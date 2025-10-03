import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import molecularBg from '@/assets/molecular-structure.png';

export const TeamSection = () => {
  const team = [
    {
      name: 'Thomas Heineman, M.D.',
      title: 'Chief Executive Officer',
      initials: 'TH',
    },
    {
      name: 'Kirk Look',
      title: 'Chief Financial Officer',
      initials: 'KL',
    },
    {
      name: 'George Gill, M.D.',
      title: 'Chief Medical Officer',
      initials: 'GG',
    },
    {
      name: 'Andrew de Guttadauro',
      title: 'Chief Business Officer',
      initials: 'AG',
    },
    {
      name: 'Mary Ann Nawrocki',
      title: 'VP Clinical Operations',
      initials: 'MN',
    },
    {
      name: 'Stephanie Richardson',
      title: 'VP Product Development',
      initials: 'SR',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Molecular Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src={molecularBg} 
          alt="Molecular pattern background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-center text-foreground mb-16">
            Our Team
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member) => (
              <Card 
                key={member.name} 
                className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 text-center group"
              >
                {/* Circular Avatar */}
                <div className="flex justify-center mb-6">
                  <Avatar className="w-32 h-32 border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground text-2xl font-serif font-bold">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* Name and Title */}
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {member.title}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
