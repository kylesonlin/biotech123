import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Users, Microscope, FileText, TrendingUp, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="fixed top-0 w-full z-50 glass-effect border-b border-border/50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo & Company Name */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
              <div className="w-6 h-6 border-2 border-primary-foreground rounded-full relative">
                <div className="absolute inset-1 border border-primary-foreground rounded-full animate-pulse-glow"></div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">Oncolytics Biotech</h1>
              <p className="text-xs text-muted-foreground font-mono">NASDAQ: ONCY</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/about" 
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out hover:scale-105 text-muted-foreground hover:text-foreground hover:bg-accent/20"
            >
              <Users className="h-4 w-4" />
              About
            </Link>
            <Link 
              to="/science" 
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out hover:scale-105 text-muted-foreground hover:text-foreground hover:bg-accent/20"
            >
              <Microscope className="h-4 w-4" />
              Science
            </Link>
            <Link 
              to="/investors" 
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out hover:scale-105 text-muted-foreground hover:text-foreground hover:bg-accent/20"
            >
              <TrendingUp className="h-4 w-4" />
              Investors
            </Link>
            <Link 
              to="/resources" 
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out hover:scale-105 text-muted-foreground hover:text-foreground hover:bg-accent/20"
            >
              <FileText className="h-4 w-4" />
              Resources
            </Link>
          </div>

          {/* Contact CTA */}
          <div className="hidden lg:flex items-center">
            <Link to="/contact">
              <Button size="sm" className="bg-gradient-primary hover:shadow-glow rounded-full transition-all duration-300 hover:scale-105">
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden rounded-full"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border/50 animate-accordion-down">
            <div className="space-y-3">
              <Link 
                to="/about" 
                className="block py-3 px-4 text-sm font-medium hover:text-primary transition-colors rounded-lg hover:bg-accent/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/science" 
                className="block py-3 px-4 text-sm font-medium hover:text-primary transition-colors rounded-lg hover:bg-accent/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Science
              </Link>
              <Link 
                to="/investors" 
                className="block py-3 px-4 text-sm font-medium hover:text-primary transition-colors rounded-lg hover:bg-accent/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Investors
              </Link>
              <Link 
                to="/resources" 
                className="block py-3 px-4 text-sm font-medium hover:text-primary transition-colors rounded-lg hover:bg-accent/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <div className="pt-4">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button size="sm" className="w-full bg-gradient-primary rounded-full">
                    Contact
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};