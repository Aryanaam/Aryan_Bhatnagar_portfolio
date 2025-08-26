"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Calendar, Building, X } from "lucide-react";

export const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
      issuer: "Oracle University",
      date: "Aug 2025",
      description: "Advanced certification in cloud-based data science, machine learning, and analytics on Oracle Cloud Infrastructure platform.",
      skills: ["Cloud Computing", "Data Science", "Machine Learning", "Oracle Cloud"],
      image: "/certificates/certificate02.png",
    },
    {
      title: "Introduction to Generative AI",
      issuer: "Google Cloud & Simplilearn",
      date: "Aug 2025",
      description: "Comprehensive understanding of generative AI technologies, applications, and implementation strategies.",
      skills: ["Generative AI", "Machine Learning", "AI Applications"],
      image: "/certificates/certificate01.jpg",
    },
    {
      title: "Career Essentials in Data Analysis by Microsoft and LinkedIn",
      issuer: "LinkedIn Learning & Microsoft",
      date: "Aug 2025",
      description: "Essential skills for data analysis career path covering tools, techniques, and best practices in the industry.",
      skills: ["Data Analysis", "Data Visualization", "Data Analytics"],
      image: "/certificates/certificate04.jpg",
    },
    {
      title: "Introduction to Career Skills in Data Analytics",
      issuer: "LinkedIn Learning",
      date: "Aug 2025",
      description: "Foundational skills in data analytics including career development and technical competencies.",
      skills: ["Data Analytics", "Tech Career Skills"],
      image: "/certificates/certificate03.jpg",
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Quantium & Forage",
      date: "July 2025",
      description: "Practical experience in data preparation, customer analytics, experimentation, uplift testing, and analytics for commercial application.",
      skills: ["Data Preparation", "Customer Analytics", "A/B Testing", "Commercial Analytics"],
      image: "/certificates/certificate05.jpg",
    },
    {
      title: "Data Science & Analytics",
      issuer: "HP LIFE & HP Foundation",
      date: "July 2025",
      description: "Leading data science and analytics practices, methodologies, and tools, examined the benefits and challenges of a data-driven approach for businesses.",
      skills: ["Data Science", "Business Analytics", "Data-Driven Decisions"],
      image: "/certificates/certificate06.jpg",
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte & Forage",
      date: "July 2025",
      description: "Practical tasks in data analysis and forensic technology, gaining knowledge about essential skills needed to pursue a career in the field.",
      skills: ["Data Analysis", "Forensic Technology"],
      image: "/certificates/certificate07.png",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Certifications & Training</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development in data science and analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="gradient-card shadow-card hover:shadow-elegant transition-all duration-300 group overflow-hidden">
              <div className="relative">
                <img
                  src={cert.image}
                  alt={`${cert.title} Certificate`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-primary">
                    <Calendar className="w-3 h-3 mr-1" />
                    {cert.date}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <Building className="w-4 h-4" />
                    <span className="text-sm font-medium">{cert.issuer}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{cert.description}</p>

                <div>
                  <h4 className="text-sm font-semibold mb-2">Skills Covered</h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs border-primary/30 text-primary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* ✅ Popup Trigger */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group/btn mt-4"
                  onClick={() => setSelectedCert(cert)}
                >
                  <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20">
            <Award className="w-8 h-8 text-primary" />
            <div className="text-left">
              <h3 className="font-semibold text-lg">Professional Certified</h3>
              <p className="text-muted-foreground">7+ Industry-recognized certifications in Data Science & Analytics</p>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Popup Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full relative">
            <button
              className="absolute top-3 right-3 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
              onClick={() => setSelectedCert(null)}
            >
              <X className="w-5 h-5" />
            </button>
            <img src={selectedCert.image} alt={selectedCert.title} className="w-full rounded-xl" />
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">{selectedCert.title}</h3>
              <p className="text-sm text-muted-foreground">{selectedCert.issuer}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
