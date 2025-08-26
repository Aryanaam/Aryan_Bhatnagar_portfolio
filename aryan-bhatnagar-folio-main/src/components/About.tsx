import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, BarChart3, Brain, Target, Users } from "lucide-react";

export const About = () => {
  const experiences = [
    {
      company: "Codesoft",
      role: "Data Analytics Intern",
      period: "Remote | 2025",
      type: "Internship",
      description: "Working on predictive modeling and sales forecasting using Python and machine learning techniques. Performing data cleaning, preprocessing, and exploratory analysis to uncover trends.",
      skills: ["Python", "Machine Learning", "Data Analysis", "Sales Forecasting"]
    },
    {
      company: "Alfabiz Marketing",
      role: "Social Media Intern",
      period: "Agra, India | 2023-2024",
      type: "Internship", 
      description: "Increased audience engagement by designing and publishing content across platforms. Analysed content performance using platform metrics and adjusted strategies to improve visibility.",
      skills: ["Content Strategy", "Data Analysis", "Performance Metrics"]
    }
  ];

  const skills = [
    {
      category: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      items: ["Python", "SQL", "R"]
    },
    {
      category: "Data Tools & Platforms", 
      icon: <Database className="w-6 h-6" />,
      items: ["Power BI", "Tableau", "Excel", "Google Sheets", "GitHub"]
    },
    {
      category: "Data Concepts",
      icon: <BarChart3 className="w-6 h-6" />,
      items: ["EDA", "Descriptive Analysis", "Diagnostic Analysis", "Predictive Analysis", "ETL Processes", "DBMS/RDBMS"]
    },
    {
      category: "Soft Skills",
      icon: <Brain className="w-6 h-6" />,
      items: ["Problem-Solving", "Effective Communication", "Team Collaboration", "Attention to Detail"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about transforming raw data into actionable insights that drive business decisions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* About Content */}
          <div className="space-y-6">
            <Card className="gradient-card shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Professional Summary</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>BCA Graduate (2022-2025)</strong> with strong skills in Python, SQL, Power BI, Tableau, and database management. 
                  Backed by hands-on project experience in sales forecasting, consumer behavior research, and emergency response systems.
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Expertise</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Specialized in transforming raw data into actionable insights and advanced data visualizations. 
                  Proficient in <span className="text-tech-blue font-medium">Data Analysis</span> applying analytical and technical expertise to solve real-world business challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">Dr. BHIMRAO AMBEDKAR UNIVERSITY</div>
                  <div className="text-muted-foreground">Bachelor of Computer Application</div>
                  <div className="text-sm text-muted-foreground">Agra, India • 2022 - 2025</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            {skills.map((skillGroup, index) => (
              <Card key={index} className="gradient-card shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary">{skillGroup.icon}</div>
                    <h4 className="font-semibold">{skillGroup.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Professional Experience</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="gradient-card shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-primary">{exp.role}</h4>
                      <p className="text-lg font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>
                    <Badge variant="outline" className="border-primary text-primary">
                      {exp.type}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};