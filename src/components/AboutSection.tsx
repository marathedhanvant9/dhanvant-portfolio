import { Code2, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">About Me</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
              Get to Know <span className="gradient-text">Me Better</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image/Visual */}
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Decorative elements */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
                <div className="absolute inset-4 rounded-2xl glass-card flex items-center justify-center">
                  <div className="text-center p-8">
                    <Code2 className="w-20 h-20 text-primary mx-auto mb-6 opacity-80" />
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">1+ Years</span>
                        <span className="px-3 py-1 rounded-full bg-accent/10 text-accent">MCA Graduate</span>
                      </div>
                      <p className="text-lg font-display font-semibold text-foreground mt-4">
                        Full-Stack Developer
                      </p>
                      <p className="text-muted-foreground">
                        Jalgaon, Maharashtra
                      </p>
                    </div>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl glass-card flex items-center justify-center floating">
                  <span className="font-display font-bold text-2xl gradient-text">8.96</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-xl glass-card flex items-center justify-center floating-delayed">
                  <span className="text-sm text-muted-foreground">CGPA</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a <span className="text-foreground font-medium">Software Engineer</span> with 
                over a year of hands-on experience in <span className="text-primary">ERPNext/Frappe</span> and 
                full-stack development. I specialize in building robust, scalable solutions that 
                help businesses streamline their operations.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans across <span className="text-foreground font-medium">Python, React.js, Next.js, 
                REST APIs, and database management</span>. I'm passionate about creating real-world, 
                impactful applications that solve complex business challenges.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a Master's in Computer Applications from RCPT, Institute of Management & Research Development, 
                I combine strong academic foundations with practical industry experience to deliver 
                high-quality software solutions.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6">
                <div className="glass-card rounded-xl p-4 text-center">
                  <span className="font-display font-bold text-2xl gradient-text">1+</span>
                  <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
                </div>
                <div className="glass-card rounded-xl p-4 text-center">
                  <span className="font-display font-bold text-2xl gradient-text">5+</span>
                  <p className="text-sm text-muted-foreground mt-1">Projects Built</p>
                </div>
                <div className="glass-card rounded-xl p-4 text-center col-span-2 sm:col-span-1">
                  <span className="font-display font-bold text-2xl gradient-text">2</span>
                  <p className="text-sm text-muted-foreground mt-1">Companies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
