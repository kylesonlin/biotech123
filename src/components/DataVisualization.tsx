import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, Calendar, Award, Target } from 'lucide-react';
import { useEffect, useState } from 'react';

interface TimelineItem {
  date: string;
  milestone: string;
  status: 'completed' | 'active' | 'upcoming';
  progress: number;
}

interface MarketStat {
  label: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down' | 'stable';
  icon: any;
  color: string;
}

export const DataVisualization = () => {
  const [animatedProgress, setAnimatedProgress] = useState<{[key: string]: number}>({});

  const timelineData: TimelineItem[] = [
    { date: "Q3 2024", milestone: "SCAC Data Presented", status: "completed", progress: 100 },
    { date: "Q4 2024", milestone: "mPDAC Enrollment", status: "active", progress: 65 },
    { date: "H1 2025", milestone: "Interim Analysis", status: "upcoming", progress: 0 },
    { date: "H2 2025", milestone: "Partnership Target", status: "upcoming", progress: 0 },
    { date: "2026", milestone: "Phase 3 Initiation", status: "upcoming", progress: 0 }
  ];

  const marketStats: MarketStat[] = [
    {
      label: "Patients Treated",
      value: "1,200+",
      change: "+15%",
      trend: "up",
      icon: Users,
      color: "text-primary"
    },
    {
      label: "Market Size",
      value: "$16B+",
      change: "Growing",
      trend: "up",
      icon: TrendingUp,
      color: "text-accent"
    },
    {
      label: "Active Studies",
      value: "20+",
      trend: "stable",
      icon: Target,
      color: "text-secondary"
    },
    {
      label: "FDA Designations",
      value: "2",
      change: "Fast Track + Orphan",
      trend: "up",
      icon: Award,
      color: "text-warning"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const animated = {};
      timelineData.forEach((item, index) => {
        setTimeout(() => {
          setAnimatedProgress(prev => ({
            ...prev,
            [item.date]: item.progress
          }));
        }, index * 200);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-8">
      {/* Clinical Timeline */}
      <Card className="glass-effect">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Calendar className="h-6 w-6 text-primary" />
            Clinical Development Timeline
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary opacity-30" />
            
            {timelineData.map((item, index) => (
              <div key={item.date} className="relative flex items-center gap-6 pb-8 last:pb-0">
                {/* Timeline Dot */}
                <div className={`
                  relative z-10 w-16 h-16 rounded-full flex items-center justify-center
                  ${item.status === 'completed' ? 'bg-primary text-primary-foreground' :
                    item.status === 'active' ? 'bg-accent text-accent-foreground animate-pulse-glow' :
                    'bg-muted text-muted-foreground'
                  }
                  transition-all duration-500 hover:scale-110
                `}>
                  <span className="text-sm font-bold">{index + 1}</span>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant={
                      item.status === 'completed' ? 'default' :
                      item.status === 'active' ? 'secondary' : 'outline'
                    }>
                      {item.date}
                    </Badge>
                    <h3 className="font-semibold">{item.milestone}</h3>
                  </div>
                  
                  {item.status !== 'upcoming' && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{item.progress}%</span>
                      </div>
                      <Progress 
                        value={animatedProgress[item.date] || 0} 
                        className="h-2"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Market Statistics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {marketStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card 
              key={stat.label} 
              className="glass-effect hover:shadow-glow transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2 rounded-lg bg-muted/50 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-5 w-5 ${stat.color}`} />
                  </div>
                  {stat.trend && (
                    <div className={`text-xs px-2 py-1 rounded-full ${
                      stat.trend === 'up' ? 'bg-green-500/10 text-green-600' :
                      stat.trend === 'down' ? 'bg-red-500/10 text-red-600' :
                      'bg-gray-500/10 text-gray-600'
                    }`}>
                      {stat.trend === 'up' ? '↗' : stat.trend === 'down' ? '↘' : '→'}
                    </div>
                  )}
                </div>
                
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                  {stat.value}
                </div>
                
                <div className="text-sm text-muted-foreground mb-2">
                  {stat.label}
                </div>
                
                {stat.change && (
                  <div className="text-xs text-muted-foreground">
                    {stat.change}
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Pipeline Progress Overview */}
      <Card className="glass-effect">
        <CardHeader>
          <CardTitle>Pipeline Development Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {[
              { name: "Pancreatic Cancer (mPDAC)", progress: 65, phase: "Phase 3 Planned", color: "bg-primary" },
              { name: "Colorectal Cancer (mCRC)", progress: 40, phase: "Biomarker Studies", color: "bg-accent" },
              { name: "Anal Cancer (SCAC)", progress: 80, phase: "Registration Enabling", color: "bg-secondary" }
            ].map((program, index) => (
              <div key={program.name} className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold">{program.name}</h4>
                    <p className="text-sm text-muted-foreground">{program.phase}</p>
                  </div>
                  <Badge variant="outline">{program.progress}%</Badge>
                </div>
                <Progress value={program.progress} className="h-3" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};