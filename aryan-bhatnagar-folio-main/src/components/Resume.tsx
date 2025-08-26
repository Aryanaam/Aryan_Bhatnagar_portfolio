import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Eye, FileText, ExternalLink } from "lucide-react";

export const Resume = () => {
  const resumePath = "/Resume/aryan-bhatnagar-resume.pdf";

  return (
    <section id="resume" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Resume</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Download my complete professional profile and experience details
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="gradient-card shadow-card overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                {/* Resume Preview */}
                <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 p-8 flex items-center justify-center min-h-[400px]">
                  <div className="text-center">
                    <div className="w-32 h-40 mx-auto mb-6 bg-white rounded-lg shadow-elegant flex items-center justify-center border-2 border-primary/20">
                      <div className="text-center">
                        <FileText className="w-16 h-16 text-primary mx-auto mb-2" />
                        <p className="text-xs text-muted-foreground font-medium">Resume</p>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Aryan Bhatnagar</h3>
                    <p className="text-muted-foreground">Data Analyst Resume</p>
                    <Badge variant="secondary" className="mt-2">
                      PDF Format
                    </Badge>
                  </div>
                </div>

                {/* Resume Details */}
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      Professional Resume
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Comprehensive overview of my experience, skills, education, and achievements in data analytics. 
                      Includes detailed project descriptions, technical competencies, and professional certifications.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">What's Included:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        Professional Summary & Contact Information
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        Technical Skills (Python, SQL, Power BI, Tableau)
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        Professional Experience & Internships
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        Educational Background (BCA Degree)
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        Key Projects & Achievements
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        Certifications & Training Programs
                      </li>
                    </ul>
                  </div>

                  {/* Buttons */}
                  <div className="space-y-3 pt-4">
                    {/* Download Button */}
                    <Button
                      variant="hero"
                      size="lg"
                      className="w-full group"
                      onClick={() => {
                        const link = document.createElement("a");
                        link.href = resumePath;
                        link.download = "Aryan-Bhatnagar-Resume.pdf";
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                    >
                      <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                      Download Resume (PDF)
                    </Button>

                    {/* Preview Button */}
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full group"
                      onClick={() => window.open(resumePath, "_blank")}
                    >
                      <Eye className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                      Preview Resume
                    </Button>

                    {/* LinkedIn Button */}
                    <Button
                      variant="ghost"
                      size="lg"
                      className="w-full group"
                      onClick={() =>
                        window.open(
                          "https://linkedin.com/in/aryan-bhatnagar-43050211",
                          "_blank"
                        )
                      }
                    >
                      <ExternalLink className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                      View LinkedIn Profile
                    </Button>
                  </div>

                  <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/20">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-primary">Note:</strong> The resume is regularly updated with latest projects, 
                      skills, and certifications. For the most current version, please download or contact me directly.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
