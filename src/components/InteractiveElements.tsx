import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

// Hover card with 3D tilt effect
interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export const TiltCard = ({ 
  children, 
  className = '', 
  intensity = 10 
}: TiltCardProps) => {
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / centerY * intensity;
    const rotateY = (centerX - x) / centerX * intensity;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <div
      className={cn('transition-transform duration-300 ease-out', className)}
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

// Magnetic button effect
interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  magneticStrength?: number;
}

export const MagneticButton = ({ 
  children, 
  className = '', 
  magneticStrength = 0.3 
}: MagneticButtonProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    setPosition({
      x: x * magneticStrength,
      y: y * magneticStrength
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <button
      className={cn('transition-transform duration-300 ease-out', className)}
      style={{ 
        transform: `translate(${position.x}px, ${position.y}px)` 
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};

// Ripple effect component
interface RippleEffectProps {
  children: React.ReactNode;
  className?: string;
  rippleColor?: string;
}

export const RippleEffect = ({ 
  children, 
  className = '', 
  rippleColor = 'rgba(255, 255, 255, 0.6)' 
}: RippleEffectProps) => {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  const createRipple = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples(prev => [...prev, { x, y, id }]);

    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== id));
    }, 600);
  };

  return (
    <div
      className={cn('relative overflow-hidden cursor-pointer', className)}
      onMouseDown={createRipple}
    >
      {children}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute animate-ping rounded-full pointer-events-none"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
            backgroundColor: rippleColor,
            animation: 'ripple 0.6s ease-out'
          }}
        />
      ))}
    </div>
  );
};

// Floating action button
interface FloatingActionButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
}

export const FloatingActionButton = ({
  onClick,
  className = '',
  children,
  position = 'bottom-right'
}: FloatingActionButtonProps) => {
  const positionClasses = {
    'bottom-right': 'fixed bottom-6 right-6',
    'bottom-left': 'fixed bottom-6 left-6',
    'top-right': 'fixed top-6 right-6', 
    'top-left': 'fixed top-6 left-6'
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        'w-14 h-14 bg-gradient-primary text-primary-foreground rounded-full shadow-glow z-50',
        'hover:scale-110 active:scale-95 transition-all duration-200',
        'flex items-center justify-center',
        positionClasses[position],
        className
      )}
    >
      {children}
    </button>
  );
};

// Progress indicator
interface ProgressIndicatorProps {
  progress: number;
  className?: string;
  showText?: boolean;
}

export const ProgressIndicator = ({
  progress,
  className = '',
  showText = false
}: ProgressIndicatorProps) => {
  return (
    <div className={cn('w-full', className)}>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-gradient-primary transition-all duration-500 ease-out"
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        />
      </div>
      {showText && (
        <div className="text-sm text-muted-foreground mt-1 text-center">
          {Math.round(progress)}%
        </div>
      )}
    </div>
  );
};