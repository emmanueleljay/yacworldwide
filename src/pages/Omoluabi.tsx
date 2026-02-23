import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import omoluabiMan from "@/assets/omoluabi-man.jpg";
import { Heart, MessageCircle, Shield, Lightbulb, Award, Sword, Briefcase, Brain } from "lucide-react";

const Omoluabi = () => {
  const principles = [
    { name: "Oro Siso", description: "Spoken word - the Yoruba accord great respect for intelligent and expert use of language", icon: MessageCircle },
    { name: "Iteriba", description: "Respect", icon: Shield },
    { name: "Inu Rere", description: "Good will - Having a good mind towards others", icon: Heart },
    { name: "Otito", description: "Truth", icon: Award },
    { name: "Iwa", description: "Character", icon: Lightbulb },
    { name: "Akinkanju", description: "Bravery", icon: Sword },
    { name: "Ise", description: "Hardwork", icon: Briefcase },
    { name: "Opolo Pipe", description: "Intelligence", icon: Brain },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={omoluabiMan}
            alt="Omoluabi - A person of good character"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/70" />
        </div>
        <div className="relative z-10 text-center px-4">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-4">
              We Are Omoluabi!!
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto font-medium">
              We Are Omo Oduduwa!!!
            </p>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mt-2">
              We Are Yoruba Action Council
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 text-center">
                Yoruba "Omoluabi" — Culture is Our Mantra
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The Omoluabi concept signifies courage, hard work, humility and respect. An Omoluabi is a person of honor who believes in hard work, respects the rights of others, and gives to the community in deeds and in action.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Omoluabi is a Yoruba philosophical and cultural concept to describe a person of good character. The omoluabi concept signifies courage, hard work, humility and respect. An omoluabi is a person of honor who believes in hard work, respects the rights of others, and gives to the community in deeds and in action. Above all, an Omoluabi is a person of integrity.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Etymology Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 text-center">
                The Meaning of Omoluabi
              </h2>
              <div className="bg-card border border-border rounded-xl p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The concept Omoluabi is an adjectival Yoruba phrase, which has the words - <span className="font-semibold text-primary">"Omo + ti + Olu-iwa + bi"</span> as its components.
                </p>
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-primary/10 rounded-lg p-4 text-center">
                    <span className="text-2xl font-serif font-bold text-primary">Omo</span>
                    <p className="text-sm text-muted-foreground mt-1">Child</p>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-4 text-center">
                    <span className="text-2xl font-serif font-bold text-primary">Ti</span>
                    <p className="text-sm text-muted-foreground mt-1">That or Which</p>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-4 text-center">
                    <span className="text-2xl font-serif font-bold text-primary">Olu-iwa</span>
                    <p className="text-sm text-muted-foreground mt-1">Chief of Character</p>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-4 text-center">
                    <span className="text-2xl font-serif font-bold text-primary">Bi</span>
                    <p className="text-sm text-muted-foreground mt-1">Born</p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When combined, Omoluabi translates as <span className="font-semibold text-foreground">"the baby begotten by the chief of iwa"</span>. Such a child is thought of as a paragon of excellence in character.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Iwapele Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                The Foundation: Iwapele
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                An Omoluabi demonstrates and exhibits the inherent virtue and value of Iwapele. Iwapele is ultimately the basis of moral conduct in Yoruba culture and a core defining attribute of an Omoluabi.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 text-center">
              The Fundamental Principles
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              The most fundamental principles demonstrated by an Omoluabi are:
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {principles.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <AnimatedSection key={principle.name} animation="fade-up" delay={index * 100}>
                  <div className="bg-card border border-border rounded-xl p-6 h-full hover:shadow-lg hover:border-primary/30 transition-all duration-300 text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-primary mb-2">
                      {principle.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {principle.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Universal Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 text-center">
                A Universal Concept
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                An individual can be termed an Omoluabi irrespective of the religion the person adheres to. Consequently, some of the characteristics and traits of an Omoluabi are considered virtues in many religions, for example, humility, truth and honesty are Christian and Muslim virtues.
              </p>
              <div className="bg-primary text-primary-foreground rounded-xl p-8 text-center">
                <p className="text-2xl md:text-3xl font-serif font-bold">
                  Above all, an Omoluabi is a person of integrity.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Omoluabi;
