import { Folder, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "ERPNext Custom Modules & Reports",
    description: "Developed comprehensive business workflows, custom APIs, and background jobs for enterprise clients. Implemented custom doctypes and reports to streamline business operations.",
    technologies: ["Python", "Frappe", "ERPNext", "MariaDB", "REST APIs"],
    type: "Enterprise",
    featured: true,
  },
  {
    title: "Online Compiler Clone",
    description: "Full-stack web application that allows users to compile and run Python and Java code online with real-time output display.",
    technologies: ["MERN Stack", "Express.js", "React.js", "Node.js"],
    type: "Web App",
    githubUrl: "#",
  },
  {
    title: "Node.js NPX CLI Tool",
    description: "Interactive CLI-based profile tool (npx dhanvantmarathe) featuring dynamic skill display, spinner animations, and terminal links for an engaging terminal experience.",
    technologies: ["Node.js", "boxen", "terminal-link", "chalk"],
    type: "CLI Tool",
    command: "npx dhanvantmarathe",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Folder className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Featured Projects</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
              Things I've <span className="gradient-text">Built</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase my skills and experience in 
              building real-world applications.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`glass-card rounded-2xl p-6 lg:p-8 hover:border-primary/30 transition-all duration-500 group ${
                  project.featured ? "md:col-span-2" : ""
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
                      {project.type}
                    </span>
                    <h3 className="font-display font-semibold text-xl lg:text-2xl text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-secondary transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Command for CLI tool */}
                {project.command && (
                  <div className="mb-6 p-4 rounded-lg bg-background/50 border border-border font-mono text-sm">
                    <span className="text-muted-foreground">$ </span>
                    <span className="text-primary">{project.command}</span>
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-md text-sm font-medium bg-secondary/50 text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* View More CTA */}
          <div className="text-center mt-12">
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://github.com/dhanvantmarathe" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
