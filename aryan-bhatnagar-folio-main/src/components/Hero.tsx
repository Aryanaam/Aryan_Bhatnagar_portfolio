import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Github, Linkedin, Download, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import avatarImage from "@/assets/aryan-avatar.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero text-white overflow-hidden mt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent" />
      
      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 border-2 border-primary/30 rounded-full animate-float" />
      <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-primary/20 rounded-lg animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-10 w-12 h-12 border-2 border-primary/25 rounded-full animate-float" style={{ animationDelay: "4s" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar */}
          <div className="mb-8 relative">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-glow animate-float">
              <img 
                src="/lovable-uploads/c3501550-0467-4149-b453-7cf09ba0adde.png" 
                alt="Aryan Bhatnagar" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <Badge variant="secondary" className="bg-primary text-white">
                Data Analyst
              </Badge>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-glow">
            Aryan Bhatnagar
          </h1>
          

          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            <span className="text-hero-accent font-semibold">Data Analytics Professional</span>
            <br />
            Transforming data into actionable insights with Python, SQL, Power BI & Tableau
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {["Python", "SQL", "Power BI", "Tableau", "Machine Learning", "Data Visualization"].map((skill) => (
              <Badge key={skill} variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all">
                {skill}
              </Badge>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black transition-all"
              onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Download className="w-5 h-5 mr-2" />
              View Resume
            </Button>
          </div>

          {/* Quick Contact */}
          <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-300">
            <a 
              href="mailto:aryanbhatnagar04@gmail.com" 
              className="flex items-center gap-2 hover:text-hero-accent transition-colors group"
            >
              <Mail className="w-4 h-4 group-hover:animate-bounce" />
              aryanbhatnagar04@gmail.com
            </a>
            <a 
              href="tel:+919548485371" 
              className="flex items-center gap-2 hover:text-hero-accent transition-colors group"
            >
              <Phone className="w-4 h-4 group-hover:animate-bounce" />
              +91 95484 85371
            </a>
            <a 
              href="https://github.com/Aryannaam" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-hero-accent transition-colors group"
            >
              <Github className="w-4 h-4 group-hover:animate-bounce" />
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/aryan-bhatnagar-43050211" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-hero-accent transition-colors group"
            >
              <Linkedin className="w-4 h-4 group-hover:animate-bounce" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};