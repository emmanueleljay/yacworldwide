import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedSection, AnimatedList } from "@/hooks/useScrollAnimation";
import missionBanner from "@/assets/mission-banner.jpg";
import { Target, Users, Globe, Scale, Lightbulb, Heart, Handshake, Building, Award, BookOpen, Vote, Shield, Sparkles } from "lucide-react";

const Mission = () => {
  const missionPoints = [
    {
      number: "01",
      text: "To provide assistance in the progress of the Yoruba world",
      icon: Target,
    },
    {
      number: "02",
      text: "To use our intellects to support the empowerment of Yorubas globally",
      icon: Users,
    },
    {
      number: "03",
      text: "To serve as an advisory organization to other Pan-Yoruba organizations",
      icon: Lightbulb,
    },
    {
      number: "04",
      text: "To promote and support democracy at all levels and foster Yoruba growth in the political arena",
      icon: Vote,
    },
    {
      number: "05",
      text: "To encourage and deliberate on issues paramount to the Yoruba people",
      icon: Heart,
    },
    {
      number: "06",
      text: "To foster the economic empowerment of Yorubas globally",
      icon: Building,
    },
    {
      number: "07",
      text: "To work with other organizations across the globe and Nigeria to promote peace, stability, justice, and unity while working fervently for the promotion of Yoruba's interest",
      icon: Handshake,
    },
    {
      number: "08",
      text: "To engage in activities worldwide that promote and ensure social justice, equity, business opportunities, and interests of Yoruba",
      icon: Scale,
    },
    {
      number: "09",
      text: "To work diligently to bridge the information gap between the Yoruba and the world",
      icon: Globe,
    },
    {
      number: "10",
      text: "To ensure the advancement of Yoruba traditional institutions",
      icon: Award,
    },
    {
      number: "11",
      text: "Promoting the advancement of Yoruba as a giant in politics, economics, and social initiatives",
      icon: Sparkles,
    },
    {
      number: "12",
      text: "Providing awareness about our civic rights as Yoruba indigenes",
      icon: BookOpen,
    },
    {
      number: "13",
      text: "To honor and respect other peoples and cultures around the world as God's creation",
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={missionBanner}
            alt="YAC Mission - Community gathering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/70" />
        </div>
        <div className="relative z-10 text-center px-4">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-4">
              Our Mission
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Empowering the Yoruba community worldwide through unity, progress, and cultural preservation
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Statement Intro */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                YAC Mission Statement
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Yoruba Advocacy Congress is committed to advancing the interests of Yoruba people 
                worldwide through intellectual engagement, cultural promotion, and collaborative partnerships. 
                Our 13-point mission outlines our dedication to progress, unity, and global empowerment.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Points */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedList animation="fade-up" staggerDelay={100}>
            {missionPoints.map((point) => {
              const IconComponent = point.icon;
              return (
                <div
                  key={point.number}
                  className="group bg-card border border-border rounded-xl p-6 mb-4 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl font-serif font-bold text-primary">
                          {point.number}
                        </span>
                      </div>
                      <p className="text-foreground text-lg leading-relaxed">
                        {point.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </AnimatedList>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                Join Us in Our Mission
              </h2>
              <p className="text-muted-foreground mb-8">
                Be part of a global movement dedicated to the advancement and empowerment of Yoruba people everywhere.
              </p>
              <Link
                to="/membership"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors"
              >
                Become a Member
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mission;
