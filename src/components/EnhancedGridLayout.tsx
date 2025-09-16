import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GridProps {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

interface ColProps {
  children: ReactNode;
  span?: 1 | 2 | 3 | 4 | 6 | 8 | 9 | 12;
  mdSpan?: 1 | 2 | 3 | 4 | 6 | 8 | 9 | 12;
  lgSpan?: 1 | 2 | 3 | 4 | 6 | 8 | 9 | 12;
  className?: string;
}

const gapClasses = {
  sm: 'gap-4',
  md: 'gap-6', 
  lg: 'gap-8',
  xl: 'gap-12'
};

const colClasses = {
  1: 'col-span-1',
  2: 'col-span-2', 
  3: 'col-span-3',
  4: 'col-span-4',
  6: 'col-span-6',
  8: 'col-span-8',
  9: 'col-span-9',
  12: 'col-span-12'
};

const mdColClasses = {
  1: 'md:col-span-1',
  2: 'md:col-span-2',
  3: 'md:col-span-3', 
  4: 'md:col-span-4',
  6: 'md:col-span-6',
  8: 'md:col-span-8',
  9: 'md:col-span-9',
  12: 'md:col-span-12'
};

const lgColClasses = {
  1: 'lg:col-span-1',
  2: 'lg:col-span-2',
  3: 'lg:col-span-3',
  4: 'lg:col-span-4', 
  6: 'lg:col-span-6',
  8: 'lg:col-span-8',
  9: 'lg:col-span-9',
  12: 'lg:col-span-12'
};

export const Grid = ({ children, cols = 12, gap = 'md', className }: GridProps) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3', 
    4: 'grid-cols-4',
    6: 'grid-cols-6',
    12: 'grid-cols-12'
  };

  return (
    <div className={cn(
      'grid',
      gridCols[cols],
      gapClasses[gap],
      className
    )}>
      {children}
    </div>
  );
};

export const Col = ({ children, span = 12, mdSpan, lgSpan, className }: ColProps) => {
  return (
    <div className={cn(
      colClasses[span],
      mdSpan && mdColClasses[mdSpan],
      lgSpan && lgColClasses[lgSpan], 
      className
    )}>
      {children}
    </div>
  );
};

// Predefined responsive layouts
export const HeroLayout = ({ children }: { children: ReactNode }) => (
  <div className="relative min-h-screen overflow-hidden">
    <div className="container mx-auto px-6 py-24">
      <Grid cols={12} gap="xl" className="items-center min-h-[80vh]">
        {children}
      </Grid>
    </div>
  </div>
);

export const SectionLayout = ({ 
  children, 
  className,
  background = 'default'
}: { 
  children: ReactNode;
  className?: string;
  background?: 'default' | 'muted' | 'gradient';
}) => {
  const backgrounds = {
    default: '',
    muted: 'bg-muted/30',
    gradient: 'bg-gradient-subtle'
  };

  return (
    <section className={cn('py-24', backgrounds[background], className)}>
      <div className="container mx-auto px-6">
        <Grid cols={12} gap="lg">
          {children}
        </Grid>
      </div>
    </section>
  );
};

export const CardGrid = ({ 
  children,
  cols = 3,
  gap = 'lg'
}: {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
}) => (
  <Grid 
    cols={12} 
    gap={gap}
    className={cn(
      'grid-cols-1',
      cols >= 2 && 'md:grid-cols-2',
      cols >= 3 && 'lg:grid-cols-3', 
      cols >= 4 && 'xl:grid-cols-4'
    )}
  >
    {children}
  </Grid>
);