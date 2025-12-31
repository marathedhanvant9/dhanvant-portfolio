import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    company: "FinByz Tech Pvt Ltd",
    role: "Software Developer",
    location: "Ahmedabad, Gujarat",
    period: "July 2025 - Present",
    current: true,
    description: [
      "Developed and maintained full-stack applications using Frappe Framework and ERPNext, implementing custom doctypes, workflows, and business logic.",
      "Built modern, responsive frontends with React.js and Next.js, ensuring seamless user experiences and optimal performance.",
      "Integrated Frappe REST APIs with React/Next.js frontends, implementing efficient data fetching strategies using React Query and SWR.",
      "Designed and implemented knowledge base management systems with document processing capabilities.",
    ],
    technologies: ["Python", "Frappe", "ERPNext", "React.js", "Next.js", "TypeScript", "Tailwind CSS", "MariaDB"],
  },
  {
    company: "Dexciss Technology",
    role: "Software Developer",
    location: "Pune, Maharashtra",
    period: "Jan 2025 - July 2025",
    current: false,
    description: [
      "Designed and developed responsive, user-friendly frontends with HTML, CSS, JavaScript, React.js, ensuring optimal performance across all devices.",
      "Integrated frontend and backend systems seamlessly to enable dynamic and interactive web applications.",
      "Developed database-driven features using MySQL and MariaDB for secure and efficient data handling.",
      "Collaborated with clients to deliver tailored web solutions and maintained project documentation.",
    ],
    technologies: ["Python", "Frappe", "ERPNext", "React.js", "Next.js", "JavaScript", "Tailwind CSS", "MariaDB"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-background to-background" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Work Experience</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
              My Professional <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building impactful solutions at leading technology companies.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative md:grid md:grid-cols-2 gap-8 ${
                    index % 2 === 0 ? "" : "md:rtl"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 z-10">
                    <div className={`w-4 h-4 rounded-full ${exp.current ? "bg-primary animate-pulse-glow" : "bg-accent"} ring-4 ring-background`} />
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12 md:ltr"}`}>
                    <div className="glass-card rounded-2xl p-6 lg:p-8 hover:border-primary/30 transition-all duration-500">
                      {/* Header */}
                      <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                        <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            {exp.current && (
                              <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                                Current
                              </span>
                            )}
                          </div>
                          <h3 className="font-display font-semibold text-xl text-foreground mb-1">
                            {exp.role}
                          </h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                      </div>

                      {/* Meta */}
                      <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                      </div>

                      {/* Description */}
                      <ul className={`space-y-2 text-muted-foreground mb-6 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                        {exp.description.slice(0, 2).map((item, i) => (
                          <li key={i} className="text-sm leading-relaxed">
                            • {item}
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        {exp.technologies.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
