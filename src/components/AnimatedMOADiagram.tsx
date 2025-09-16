import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Zap, Shield, Activity, ArrowRight } from 'lucide-react';
import moaDiagram from '@/assets/moa-diagram-custom.jpg';

export const AnimatedMOADiagram = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: "IV Administration",
      description: "Pelareorep delivered systemically, reaching primary and metastatic sites",
      icon: Activity,
      color: "text-primary",
      bgColor: "bg-primary/10",
      position: { x: 10, y: 20 }
    },
    {
      id: 1,
      title: "Selective Targeting",
      description: "Virus preferentially infects RAS-mutant cancer cells",
      icon: Target,
      color: "text-accent",
      bgColor: "bg-accent/10",
      position: { x: 30, y: 60 }
    },
    {
      id: 2,
      title: "Viral Replication",
      description: "dsRNA replicates within tumor cells, causing direct lysis",
      icon: Zap,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      position: { x: 60, y: 30 }
    },
    {
      id: 3,
      title: "Immune Activation",
      description: "Released antigens activate immune system against cancer",
      icon: Shield,
      color: "text-warning",
      bgColor: "bg-warning/10",
      position: { x: 80, y: 70 }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="glass-effect overflow-hidden relative">
      <CardContent className="p-0">
        <div className="relative">
          {/* Main MOA Image */}
          <img 
            src={moaDiagram} 
            alt="Pelareorep mechanism of action showing selective targeting and dual action"
            className="w-full h-96 object-cover"
          />
          
          {/* Animated Overlay Elements */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = activeStep === index;
              
              return (
                <div
                  key={step.id}
                  className={`absolute transition-all duration-500 cursor-pointer ${
                    isActive ? 'scale-110 z-20' : 'scale-100 z-10'
                  }`}
                  style={{ 
                    left: `${step.position.x}%`, 
                    top: `${step.position.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onClick={() => setActiveStep(index)}
                >
                  <div className={`
                    w-16 h-16 rounded-full flex items-center justify-center
                    ${isActive ? step.bgColor : 'bg-background/80'}
                    border-2 ${isActive ? `border-current ${step.color}` : 'border-border'}
                    backdrop-blur-md shadow-glow
                    ${isActive ? 'animate-pulse-glow' : ''}
                  `}>
                    <IconComponent className={`w-8 h-8 ${isActive ? step.color : 'text-muted-foreground'}`} />
                  </div>
                  
                  {/* Connecting Lines */}
                  {index < steps.length - 1 && (
                    <div className={`
                      absolute top-1/2 left-full w-20 h-0.5
                      ${isActive || activeStep === (index + 1) ? 'bg-primary' : 'bg-border'}
                      transition-colors duration-500
                    `} />
                  )}
                </div>
              );
            })}
          </div>

          {/* Progress Indicators */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="grid grid-cols-4 gap-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    activeStep === index ? 'bg-primary' : 'bg-border'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Active Step Description */}
        <div className="p-6 bg-gradient-subtle">
          <div className="flex items-start gap-4">
            <Badge className={`${steps[activeStep].bgColor} ${steps[activeStep].color} border-0`}>
              Step {activeStep + 1}
            </Badge>
            <div className="flex-1">
              <h3 className="font-semibold mb-2">{steps[activeStep].title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {steps[activeStep].description}
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <span>Auto-advancing</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};