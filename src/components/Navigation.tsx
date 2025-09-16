import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="fixed top-0 w-full z-50 glass-effect border-b border-border/50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo & Company Name */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-primary-foreground rounded-full relative">
                <div className="absolute inset-1 border border-primary-foreground rounded-full animate-pulse-glow"></div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">Oncolytics Biotech</h1>
              <p className="text-xs text-muted-foreground font-mono">NASDAQ: ONCY</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-80 p-4">
                    <div className="grid gap-3">
                      <NavigationMenuLink className="block p-3 rounded-lg hover:bg-muted transition-colors">
                        <div className="font-medium text-sm">Our Mission</div>
                        <p className="text-xs text-muted-foreground mt-1">Building a GI tumor immunotherapy platform</p>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block p-3 rounded-lg hover:bg-muted transition-colors">
                        <div className="font-medium text-sm">Leadership Team</div>
                        <p className="text-xs text-muted-foreground mt-1">Experienced dealmakers and scientists</p>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Science</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-96 p-4">
                    <div className="grid gap-3">
                      <NavigationMenuLink className="block p-3 rounded-lg hover:bg-muted transition-colors">
                        <div className="font-medium text-sm">Mechanism of Action</div>
                        <p className="text-xs text-muted-foreground mt-1">ds-RNA oncolytic virus targeting RAS pathway</p>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block p-3 rounded-lg hover:bg-muted transition-colors">
                        <div className="font-medium text-sm">Safety Profile</div>
                        <p className="text-xs text-muted-foreground mt-1">Proven in 1,100+ patients over 15 years</p>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block p-3 rounded-lg hover:bg-muted transition-colors">
                        <div className="font-medium text-sm">Clinical Pipeline</div>
                        <p className="text-xs text-muted-foreground mt-1">GOBLET study ongoing in GI cancers</p>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                  Pipeline
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Media</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-80 p-4">
                    <div className="grid gap-3">
                      <NavigationMenuLink className="block p-3 rounded-lg hover:bg-muted transition-colors">
                        <div className="font-medium text-sm">Press Releases</div>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block p-3 rounded-lg hover:bg-muted transition-colors">
                        <div className="font-medium text-sm">Publications</div>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block p-3 rounded-lg hover:bg-muted transition-colors">
                        <div className="font-medium text-sm">Presentations</div>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Investors</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-80 p-4">
                    <div className="grid gap-3">
                      <NavigationMenuLink className="block p-3 rounded-lg hover:bg-muted transition-colors">
                        <div className="font-medium text-sm">Stock Information</div>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block p-3 rounded-lg hover:bg-muted transition-colors">
                        <div className="font-medium text-sm">SEC Filings</div>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block p-3 rounded-lg hover:bg-muted transition-colors">
                        <div className="font-medium text-sm">Corporate Governance</div>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Contact CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm">Investor Relations</Button>
            <Button size="sm" className="bg-gradient-primary hover:opacity-90">Contact</Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border/50">
            <div className="space-y-3">
              <a href="#about" className="block py-2 text-sm font-medium hover:text-primary transition-colors">About</a>
              <a href="#science" className="block py-2 text-sm font-medium hover:text-primary transition-colors">Science</a>
              <a href="#pipeline" className="block py-2 text-sm font-medium hover:text-primary transition-colors">Pipeline</a>
              <a href="#media" className="block py-2 text-sm font-medium hover:text-primary transition-colors">Media</a>
              <a href="#investors" className="block py-2 text-sm font-medium hover:text-primary transition-colors">Investors</a>
              <div className="pt-4 space-y-2">
                <Button variant="outline" size="sm" className="w-full">Investor Relations</Button>
                <Button size="sm" className="w-full bg-gradient-primary hover:opacity-90">Contact</Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};