import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, MapPin, Download, ExternalLink } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "aryanbhatnagar04@gmail.com",
      href: "mailto:aryanbhatnagar04@gmail.com",
      color: "text-red-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 95484 85371",
      href: "tel:+919548485371",
      color: "text-green-500"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/Aryannaam",
      href: "https://github.com/Aryannaam",
      color: "text-gray-700 dark:text-gray-300"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/aryan-bhatnagar-43050211",
      href: "https://linkedin.com/in/aryan-bhatnagar-43050211",
      color: "text-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to turn your data into insights? Let's discuss how I can help your organization make data-driven decisions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <Card className="gradient-card shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 rounded-xl bg-background/50 hover:bg-background transition-all group"
                    >
                      <div className={`${info.color} group-hover:scale-110 transition-transform`}>
                        {info.icon}
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{info.label}</div>
                        <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                          {info.value}
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>

              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="gradient-card shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Download className="w-6 h-6 text-primary" />
                  </div>
                  Quick Actions
                </h3>

                <div className="space-y-4">
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="w-full justify-start group"
                    onClick={() => window.open('mailto:aryanbhatnagar04@gmail.com?subject=Job Opportunity&body=Hi Aryan, I would like to discuss a potential opportunity with you.')}
                  >
                    <Mail className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                    Send Email
                  </Button>

                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full justify-start group"
                    onClick={() => window.open('https://linkedin.com/in/aryan-bhatnagar-43050211', '_blank')}
                  >
                    <Linkedin className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                    Connect on LinkedIn
                  </Button>

                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="w-full justify-start group"
                    onClick={() => window.open('https://github.com/Aryannaam', '_blank')}
                  >
                    <Github className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                    View GitHub Profile
                  </Button>

                  <div className="pt-4 border-t border-border">
                    <Button 
                      variant="hero" 
                      size="lg" 
                      className="w-full group"
                      onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                      Download Resume
                    </Button>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-success-green/5 rounded-xl border border-success-green/20">
                  <h4 className="font-semibold text-success-green mb-2">Available for</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Full-time Data Analyst positions</li>
                    <li>• Freelance data analysis projects</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="gradient-primary text-white shadow-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Data?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Let's discuss how data analytics can drive your business forward
                </p>
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="group"
                  onClick={() => window.open('mailto:aryanbhatnagar04@gmail.com?subject=Let\'s Discuss Data Analytics&body=Hi Aryan, I\'m interested in discussing how you can help with our data analytics needs.')}
                >
                  <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Start the Conversation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};