import { TrendingUp, Users, Shield, Target } from 'lucide-react';

export const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-background/95 to-background">
      <div className="container mx-auto px-6">
        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-card rounded-xl border border-border shadow-elegant">
            <Users className="w-12 h-12 text-accent mx-auto mb-4" />
            <div className="text-4xl font-bold text-accent-bright mb-2">1,100+</div>
            <div className="text-muted-foreground">Patients Dosed</div>
          </div>
          <div className="text-center p-8 bg-card rounded-xl border border-border shadow-elegant">
            <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
            <div className="text-4xl font-bold text-accent-bright mb-2">15</div>
            <div className="text-muted-foreground">Years Safety Data</div>
          </div>
          <div className="text-center p-8 bg-card rounded-xl border border-border shadow-elegant">
            <Target className="w-12 h-12 text-accent mx-auto mb-4" />
            <div className="text-4xl font-bold text-accent-bright mb-2">3</div>
            <div className="text-muted-foreground">GI Indications</div>
          </div>
        </div>

        {/* Key Differentiator */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-10 border border-border shadow-elegant">
            <div className="flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-accent mr-3" />
              <h3 className="text-2xl font-bold text-foreground">Why Pelareorep is Different</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Only IV oncolytic virus not neutralized in blood</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Dual mechanism: Cell lysis + immune cascade response</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Targets RAS mutations in 90% of pancreatic cancers</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Made in America with established safety profile</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};