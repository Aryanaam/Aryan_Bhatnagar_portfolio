import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, Heart, ArrowUp } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-hero text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">AB</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Aryan Bhatnagar</h3>
                <p className="text-gray-300">Data Analyst</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Transforming data into actionable insights that drive business success. 
              Specialized in Python, SQL, Power BI, and advanced analytics.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Certifications", href: "#certifications" },
                { label: "Resume", href: "#resume" },
                { label: "Contact", href: "#contact" },
                { label: "Top", href: "#hero" }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-300 hover:text-hero-accent transition-colors text-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    const targetId = link.href.replace('#', '');
                    if (targetId === 'hero') {
                      scrollToTop();
                    } else {
                      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:aryanbhatnagar04@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-hero-accent transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:animate-bounce" />
                <span className="text-sm">aryanbhatnagar04@gmail.com</span>
              </a>
              <a 
                href="tel:+919548485371"
                className="flex items-center gap-3 text-gray-300 hover:text-hero-accent transition-colors group"
              >
                <Phone className="w-5 h-5 group-hover:animate-bounce" />
                <span className="text-sm">+91 95484 85371</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-hero-accent hover:bg-white/10 p-2"
                onClick={() => window.open('https://github.com/Aryannaam', '_blank')}
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-hero-accent hover:bg-white/10 p-2"
                onClick={() => window.open('https://linkedin.com/in/aryan-bhatnagar-43050211', '_blank')}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <span>© {currentYear} Aryan Bhatnagar. Made By</span>

              <span>Aryan Bhtnagar</span>
            </div>

            {/* Back to Top */}
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-gray-300 hover:text-hero-accent hover:bg-white/10 group"
            >
              <ArrowUp className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Back to Top
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-4 text-center text-xs text-gray-400">
            <p>Open to full-time opportunities and freelance projects in data analytics</p>
          </div>
        </div>
      </div>
    </footer>
  );
};