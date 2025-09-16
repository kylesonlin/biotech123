import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Users, Microscope, FileText, TrendingUp, Brain, Dna, BookOpen, BarChart3, FileCheck, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  const toggleDropdown = (dropdown: string) => {
    // If clicking the same dropdown that's already open, close it
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      // Otherwise, open the clicked dropdown (direct switch)
      setActiveDropdown(dropdown);
    }
  };

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !Object.values(dropdownRefs.current).some(ref => 
        ref?.contains(event.target as Node)
      )) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  const NavButton = ({ 
    children, 
    isActive, 
    onClick 
  }: { 
    children: React.ReactNode; 
    isActive: boolean; 
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className={`
        relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out
        flex items-center gap-2 group hover:scale-105
        ${isActive 
          ? 'bg-gradient-primary text-primary-foreground shadow-glow' 
          : 'text-muted-foreground hover:text-foreground hover:bg-accent/20'
        }
      `}
    >
      {children}
      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`} />
    </button>
  );

  const DropdownContent = ({ 
    isOpen, 
    children, 
    dropdownKey 
  }: { 
    isOpen: boolean; 
    children: React.ReactNode; 
    dropdownKey: string;
  }) => (
    <div
      ref={(el) => dropdownRefs.current[dropdownKey] = el}
      className={`
        absolute top-full left-0 mt-2 min-w-80 z-50 transition-all duration-300 ease-out origin-top-left
        ${isOpen 
          ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
        }
      `}
    >
      <div className="bg-popover rounded-2xl shadow-elegant border border-border/50 p-6">
        {children}
      </div>
    </div>
  );

  const DropdownItem = ({ 
    to, 
    icon: Icon, 
    title, 
    description,
    onClick
  }: { 
    to: string; 
    icon: any; 
    title: string; 
    description?: string;
    onClick?: () => void;
  }) => (
    <Link 
      to={to} 
      onClick={() => {
        setActiveDropdown(null);
        onClick?.();
      }}
      className="group flex items-start gap-4 p-4 rounded-xl hover:bg-accent/10 transition-all duration-200 hover:scale-[1.02]"
    >
      <div className="p-2 rounded-lg bg-gradient-primary/10 group-hover:bg-gradient-primary/20 transition-colors">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div className="flex-1">
        <div className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
          {title}
        </div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1 group-hover:text-muted-foreground/80">
            {description}
          </p>
        )}
      </div>
    </Link>
  );

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
          <div className="hidden lg:flex items-center space-x-2">
            {/* About Dropdown */}
            <div className="relative">
              <NavButton 
                isActive={activeDropdown === 'about'} 
                onClick={() => toggleDropdown('about')}
              >
                <Users className="h-4 w-4" />
                About
              </NavButton>
              <DropdownContent isOpen={activeDropdown === 'about'} dropdownKey="about">
                <div className="grid gap-2">
                  <DropdownItem
                    to="/#mission"
                    icon={TrendingUp}
                    title="Our Mission"
                    description="Building a GI tumor immunotherapy platform"
                  />
                  <DropdownItem
                    to="/#management"
                    icon={Users}
                    title="Leadership Team"
                    description="Experienced dealmakers and scientists"
                  />
                  <DropdownItem
                    to="/scientific-advisory-board"
                    icon={Brain}
                    title="Scientific Advisory Board"
                    description="World-class scientific expertise"
                  />
                </div>
              </DropdownContent>
            </div>

            {/* Science Dropdown */}
            <div className="relative">
              <NavButton 
                isActive={activeDropdown === 'science'} 
                onClick={() => toggleDropdown('science')}
              >
                <Microscope className="h-4 w-4" />
                Science
              </NavButton>
               <DropdownContent isOpen={activeDropdown === 'science'} dropdownKey="science">
                <div className="grid gap-2">
                  <DropdownItem
                    to="/science"
                    icon={Dna}
                    title="Mechanism of Action"
                    description="Complete pelareorep MOA and safety data"
                  />
                  <DropdownItem
                    to="/science"
                    icon={Shield}
                    title="Safety Profile"
                    description="Proven in 1,200+ patients over 15 years"
                  />
                  <DropdownItem
                    to="/pipeline"
                    icon={BarChart3}
                    title="Clinical Pipeline"
                    description="Registration-enabled GI cancer programs"
                  />
                </div>
              </DropdownContent>
            </div>

            {/* Media Dropdown */}
            <div className="relative">
              <NavButton 
                isActive={activeDropdown === 'media'} 
                onClick={() => toggleDropdown('media')}
              >
                <FileText className="h-4 w-4" />
                Media
              </NavButton>
              <DropdownContent isOpen={activeDropdown === 'media'} dropdownKey="media">
                <div className="grid gap-2">
                  <DropdownItem
                    to="/media"
                    icon={FileText}
                    title="Press Releases"
                    description="Latest company announcements"
                  />
                  <DropdownItem
                    to="/media"
                    icon={BookOpen}
                    title="Publications"
                    description="Scientific research and findings"
                  />
                  <DropdownItem
                    to="/media"
                    icon={FileCheck}
                    title="Presentations"
                    description="Conference presentations and posters"
                  />
                </div>
              </DropdownContent>
            </div>

            {/* Investors Dropdown */}
            <div className="relative">
              <NavButton 
                isActive={activeDropdown === 'investors'} 
                onClick={() => toggleDropdown('investors')}
              >
                <TrendingUp className="h-4 w-4" />
                Investors
              </NavButton>
              <DropdownContent isOpen={activeDropdown === 'investors'} dropdownKey="investors">
                <div className="grid gap-2">
                  <DropdownItem
                    to="/investors"
                    icon={BarChart3}
                    title="Stock Information"
                    description="Current stock price and performance"
                  />
                  <DropdownItem
                    to="/investors"
                    icon={FileCheck}
                    title="SEC Filings"
                    description="Regulatory filings and reports"
                  />
                  <DropdownItem
                    to="/investors"
                    icon={Shield}
                    title="Corporate Governance"
                    description="Board information and policies"
                  />
                </div>
              </DropdownContent>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="hidden lg:flex items-center">
            <Button size="sm" className="bg-gradient-primary hover:shadow-glow rounded-full transition-all duration-300 hover:scale-105">
              Contact
            </Button>
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
                to="/#mission" 
                className="block py-3 px-4 text-sm font-medium hover:text-primary transition-colors rounded-lg hover:bg-accent/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/#science" 
                className="block py-3 px-4 text-sm font-medium hover:text-primary transition-colors rounded-lg hover:bg-accent/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Science
              </Link>
              <Link 
                to="/media" 
                className="block py-3 px-4 text-sm font-medium hover:text-primary transition-colors rounded-lg hover:bg-accent/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Media
              </Link>
              <Link 
                to="/investors" 
                className="block py-3 px-4 text-sm font-medium hover:text-primary transition-colors rounded-lg hover:bg-accent/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Investors
              </Link>
              <div className="pt-4">
                <Button size="sm" className="w-full bg-gradient-primary rounded-full">
                  Contact
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};