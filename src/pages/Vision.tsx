import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedSection, AnimatedList } from "@/hooks/useScrollAnimation";
import heroBg from "@/assets/hero-bg.jpg";
import { Eye, Globe, Users, Handshake, Link2, Sparkles } from "lucide-react";

const Vision = () => {
  const objectives = [
    {
      text: "To advance and enhance the progress of the Yoruba nation",
      icon: Sparkles,
    },
    {
      text: "Employ and deploy the professionalism of members for the Yoruba global development",
      icon: Users,
    },
    {
      text: "Cooperation with the other Pan Yoruba groups in coordinating pro Yoruba events",
      icon: Handshake,
    },
    {
      text: "Operate as a link between the Yoruba Nation, the diaspora, and global interaction",
      icon: Link2,
    },
    {
      text: "Promote and support Yoruba cultural tradition, and thus, preventing the culture from extinction through research and development",
      icon: Globe,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="YAC Vision - Yoruba heritage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/70" />
        </div>
        <div className="relative z-10 text-center px-4">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-4">
              Our Vision
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Elevating the Yoruba race among the Committee of Nations
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <Eye className="w-10 h-10 text-primary" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8 text-center">
                YAC Vision Statement
              </h2>
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-lg">
                <p className="text-lg md:text-xl text-foreground leading-relaxed text-center">
                  A clear-cut vision of YAC envisaged an <span className="text-primary font-semibold">enhanced and aloft placement of the Yoruba race</span> among 
                  the Committee of Nations within the existing provision of human and natural resources in the cliché of Nigeria contraption.
                </p>
                <div className="my-8 border-t border-border" />
                <p className="text-lg text-muted-foreground leading-relaxed text-center">
                  This includes brainstorming of like-minded Yoruba professionals in various fields of human development, 
                  and in creating a purposive environment that will lead to the <span className="text-foreground font-medium">growth and development of human capital</span> within 
                  Nigeria and the diaspora through micro and macroeconomic indices.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Purpose */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Our Core Purpose
              </h2>
              <p className="text-xl text-primary font-medium">
                To make YAC the epitome of services for the advancement of the Yoruba Race globally
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Strategic Objectives
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The foundational pillars that guide our vision toward achieving global Yoruba advancement
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedList animation="fade-up" staggerDelay={100}>
              {objectives.map((objective, index) => {
                const IconComponent = objective.icon;
                return (
                  <div
                    key={index}
                    className="group bg-card border border-border rounded-xl p-6 mb-4 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-foreground text-lg leading-relaxed flex-1">
                        {objective.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </AnimatedList>
          </div>
        </div>
      </section>

      {/* Solemn Pledge */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Our Solemn Pledge
              </h2>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 md:p-10">
                <p className="text-lg md:text-xl text-foreground leading-relaxed italic">
                  "We commit to the promotion of <span className="text-primary font-semibold">peace, unity, love, and prosperity</span> for 
                  all Yoruba, empowering people at all levels of society."
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                Be Part of Our Vision
              </h2>
              <p className="text-muted-foreground mb-8">
                Join us in building a future where Yoruba excellence is recognized and celebrated worldwide.
              </p>
              <a
                href="/membership"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors"
              >
                Join YAC Today
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vision;
