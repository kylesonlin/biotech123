import { cn } from '@/lib/utils';

// Skeleton loaders
export const SkeletonCard = ({ className }: { className?: string }) => (
  <div className={cn("animate-pulse", className)}>
    <div className="bg-muted rounded-lg p-6">
      <div className="h-4 bg-muted-foreground/20 rounded w-1/3 mb-4"></div>
      <div className="space-y-2">
        <div className="h-3 bg-muted-foreground/20 rounded w-full"></div>
        <div className="h-3 bg-muted-foreground/20 rounded w-4/5"></div>
        <div className="h-3 bg-muted-foreground/20 rounded w-3/5"></div>
      </div>
    </div>
  </div>
);

export const SkeletonProfile = ({ className }: { className?: string }) => (
  <div className={cn("animate-pulse", className)}>
    <div className="bg-muted rounded-lg p-6">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-muted-foreground/20 rounded-full"></div>
        <div className="space-y-2 flex-1">
          <div className="h-4 bg-muted-foreground/20 rounded w-1/2"></div>
          <div className="h-3 bg-muted-foreground/20 rounded w-1/3"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-muted-foreground/20 rounded w-full"></div>
        <div className="h-3 bg-muted-foreground/20 rounded w-3/4"></div>
      </div>
    </div>
  </div>
);

// Loading spinner
export const LoadingSpinner = ({ 
  size = "md", 
  className 
}: { 
  size?: "sm" | "md" | "lg"; 
  className?: string;
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  };

  return (
    <div className={cn("animate-spin", sizeClasses[size], className)}>
      <div className="border-2 border-current border-t-transparent rounded-full w-full h-full"></div>
    </div>
  );
};

// Page loading overlay
export const PageLoading = () => (
  <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 animate-pulse-glow">
        <LoadingSpinner size="lg" className="text-white" />
      </div>
      <p className="text-muted-foreground">Loading...</p>
    </div>
  </div>
);

// Content loading placeholder
export const ContentLoading = ({ lines = 3 }: { lines?: number }) => (
  <div className="animate-pulse space-y-4">
    {Array.from({ length: lines }).map((_, i) => (
      <div key={i} className="space-y-2">
        <div className="h-4 bg-muted rounded w-full"></div>
        <div className="h-4 bg-muted rounded w-4/5"></div>
      </div>
    ))}
  </div>
);