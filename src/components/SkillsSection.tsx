import { Zap } from "lucide-react";

const skills = {
  backend: {
    title: "Backend",
    items: ["Python", "Frappe", "ERPNext", "Node.js", "Express.js"],
    color: "from-primary to-blue-400",
  },
  frontend: {
    title: "Frontend",
    items: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
    color: "from-accent to-pink-400",
  },
  database: {
    title: "Database",
    items: ["MariaDB", "MySQL", "MongoDB"],
    color: "from-green-400 to-emerald-500",
  },
  tools: {
    title: "Tools & Others",
    items: ["Git", "REST APIs", "Postman", "VS Code", "React Query"],
    color: "from-orange-400 to-yellow-500",
  },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">My Skills</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
              Technologies I <span className="gradient-text">Work With</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit that enables me to build complete, 
              production-ready applications from frontend to backend.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {Object.entries(skills).map(([key, category], index) => (
              <div
                key={key}
                className="glass-card rounded-2xl p-6 lg:p-8 hover:border-primary/30 transition-all duration-500 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`} />
                  <h3 className="font-display font-semibold text-xl text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-lg bg-secondary/50 text-foreground text-sm font-medium hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Bar */}
          <div className="mt-12 glass-card rounded-2xl p-6 lg:p-8">
            <h3 className="font-display font-semibold text-lg text-foreground mb-4">
              Also Familiar With
            </h3>
            <div className="flex flex-wrap gap-3">
              {["HTML/CSS", "SWR", "shadcn/ui", "Cloud Computing", "DBMS", "OOP Concepts", "AI with Python (ML)"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-md border border-border text-muted-foreground text-sm hover:border-primary/50 hover:text-foreground transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
