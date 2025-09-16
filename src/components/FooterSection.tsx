import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Building, Mail, Phone, MapPin, FileText, TrendingUp } from 'lucide-react';

export const FooterSection = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-primary rounded-full relative">
                  <div className="absolute inset-1 border border-primary rounded-full"></div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Oncolytics Biotech Inc.</h3>
                <p className="text-sm text-primary-foreground/80 font-mono">NASDAQ: ONCY</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 mb-6 max-w-md">
              Developing pelareorep, a first-in-class double-stranded RNA oncolytic virus 
              immunotherapy for gastrointestinal cancers.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Calgary, Alberta, Canada</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accent" />
                <span>+1 (403) 670-7377</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-accent" />
                <span>info@oncolyticsbiotech.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#mission" className="text-primary-foreground/80 hover:text-accent transition-colors" onClick={(e) => { e.preventDefault(); document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' }); }}>Our Mission</a></li>
              <li><a href="#science" className="text-primary-foreground/80 hover:text-accent transition-colors" onClick={(e) => { e.preventDefault(); document.getElementById('science')?.scrollIntoView({ behavior: 'smooth' }); }}>Science</a></li>
              <li><a href="#pipeline" className="text-primary-foreground/80 hover:text-accent transition-colors" onClick={(e) => { e.preventDefault(); document.getElementById('pipeline')?.scrollIntoView({ behavior: 'smooth' }); }}>Pipeline</a></li>
              <li><a href="#management" className="text-primary-foreground/80 hover:text-accent transition-colors" onClick={(e) => { e.preventDefault(); document.getElementById('management')?.scrollIntoView({ behavior: 'smooth' }); }}>Management</a></li>
              <li><a href="/scientific-advisory-board" className="text-primary-foreground/80 hover:text-accent transition-colors">Advisory Board</a></li>
            </ul>
          </div>

          {/* Investors */}
          <div>
            <h4 className="font-semibold mb-4">Investors</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/investors" className="text-primary-foreground/80 hover:text-accent transition-colors">Stock Information</a></li>
              <li><a href="/investors" className="text-primary-foreground/80 hover:text-accent transition-colors">SEC Filings</a></li>
              <li><a href="/media" className="text-primary-foreground/80 hover:text-accent transition-colors">Press Releases</a></li>
              <li><a href="/investors" className="text-primary-foreground/80 hover:text-accent transition-colors">Financial Reports</a></li>
              <li><a href="/investors" className="text-primary-foreground/80 hover:text-accent transition-colors">Corporate Governance</a></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-6 text-sm text-primary-foreground/80">
            <span>&copy; 2024 Oncolytics Biotech Inc. All rights reserved.</span>
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Use</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="secondary" 
              size="sm"
              onClick={() => window.location.href = '/investors'}
            >
              <FileText className="w-4 h-4 mr-2" />
              Investor Kit
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => window.location.href = '/investors'}
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Stock Quote
            </Button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <p className="text-xs text-primary-foreground/60 text-center max-w-4xl mx-auto leading-relaxed">
            <strong>Forward-Looking Statements:</strong> This website contains forward-looking statements within the meaning of applicable securities laws. 
            These statements are based on current expectations and assumptions and involve known and unknown risks and uncertainties. 
            Actual results may differ materially from those expressed or implied by such forward-looking statements.
          </p>
        </div>
      </div>
    </footer>
  );
};