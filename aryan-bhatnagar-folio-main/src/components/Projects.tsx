import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, BarChart3, Database, TrendingUp } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Power BI Sales Report",
      description:
        "Built a dynamic dashboard to analyse ₹220K in sales across 1,700 UMHF and multiple product categories. Identified ₹20K in net profit, top-selling items: Clothing; highest profit: Printers & Bookcases.",
      tools: ["Power BI", "Excel", "SQL"],
      period: "June 2025",
      icon: <BarChart3 className="w-6 h-6" />,
      highlights: [
        "Highlighted Indore and Mumbai as top revenue cities",
        "Found 30% of transactions via Cash on Delivery, indicating scope to promote prepaid options",
        "Delivered insights for marketing and operations through effective data storytelling",
      ],
      github: "https://github.com/Aryanaam", // 🔗 Replace with real repo
      demo: "https://your-demo-link.com", // 🔗 Replace with live demo link if available
    },
    {
      title: "Rapid Rescue – Major BCA Project",
      description:
        "Designed and managed a MySQL database for secure and efficient storage of user and emergency response data, supporting real-time retrieval and integrity.",
      tools: [
        "MySQL",
        "Database Design",
        "SQL Queries",
        "HTML",
        "UI Components",
        "Data Validation",
        "Backend Testing",
      ],
      period: "Feb 2025 – May 2025",
      icon: <Database className="w-6 h-6" />,
      highlights: [
        "Developed and optimized data models and SQL queries for data extraction, analysis, and reporting on emergency trends",
        "Collaborated on building HTML-based UI components and implemented data validation and backend testing to ensure system accuracy and usability",
      ],
      github: "https://github.com/Aryanaam  ", // 🔗 Replace with real repo
      demo: "https://your-demo-link.com", // 🔗 Replace with live demo link if available
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world applications of data analysis and database management skills
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="gradient-card shadow-card hover:shadow-elegant transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{project.period}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Key Achievements */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <Badge
                        key={toolIndex}
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-4">
                  {/* View Demo */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="outline" size="sm" className="w-full group/btn">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
                      View Details
                    </Button>
                  </a>

                  {/* GitHub Source Code */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="ghost" size="sm" className="w-full group/btn">
                      <Github className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
                      Source Code
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Aryanaam" // 🔗 Replace with your GitHub profile
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" className="group">
              <Github className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              View All Projects on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
