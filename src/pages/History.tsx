import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import historyBanner from "@/assets/history-banner.jpg";
import { Calendar, MapPin, Users, Award, Globe, FileText, Heart, Milestone } from "lucide-react";

const History = () => {
  const timeline = [
    {
      year: "2018",
      title: "Official Incorporation",
      date: "May 29, 2018",
      description: "Yoruba Action Council was officially incorporated in New Jersey, USA, marking the beginning of a new chapter for Yoruba advocacy in the diaspora.",
      icon: FileText,
      highlight: true,
    },
    {
      year: "2018",
      title: "Founding Vision",
      date: "2018",
      description: "Like-minded Yoruba professionals living in New Jersey came together to establish YAC with the mission to promote Yoruba interest, uphold and enhance her heritage.",
      icon: Users,
    },
    {
      year: "2018",
      title: "501(c)(3) Status",
      date: "2018",
      description: "YAC obtained its 501(c)(3) certificate, establishing it as a recognized Non-Governmental Organization for human and community development.",
      icon: Award,
    },
    {
      year: "2019",
      title: "Community Outreach Begins",
      date: "2019",
      description: "YAC launched its first community outreach programs, connecting Yoruba people across the diaspora and strengthening ties with Nigeria.",
      icon: Heart,
    },
    {
      year: "2020",
      title: "Global Expansion",
      date: "2020",
      description: "Despite global challenges, YAC expanded its reach, establishing connections with Yoruba communities worldwide and launching digital initiatives.",
      icon: Globe,
    },
    {
      year: "2021",
      title: "Project Initiatives",
      date: "2021",
      description: "YAC launched major project initiatives including Tourism Promotion, Educational Sponsorship, Cultural Promotion, and Water Borehole projects.",
      icon: Milestone,
    },
    {
      year: "Present",
      title: "Continued Growth",
      date: "Today",
      description: "YAC continues to grow as the epitome of services for the advancement of the Yoruba Race globally, with active programs and an expanding membership.",
      icon: Calendar,
      highlight: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={historyBanner}
            alt="YAC History - Community gathering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/70" />
        </div>
        <div className="relative z-10 text-center px-4">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-4">
              Our History
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Paving the path towards change since 2018
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-8">
                <MapPin className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                  Our Founding Story
                </h2>
              </div>
              
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-lg">
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  <span className="text-primary font-semibold">Yoruba Action Council</span> was officially incorporated in 
                  <span className="font-semibold"> New Jersey, USA on the 29th of May 2018</span>. This historic date marked 
                  the formal establishment of an organization dedicated to the welfare and affairs of the Yoruba people worldwide.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  This enormous task was put together by like-minded Yoruba professionals living in New Jersey, 
                  United States of America, united by a common goal: to promote Yoruba interest, uphold and enhance her heritage.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  YAC is a Non-Governmental Organization with a <span className="text-foreground font-medium">501(c)(3) Certificate</span> for 
                  the projection of human and community development centered among the Yoruba people in the diaspora and at home in Nigeria.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Milestones & Timeline
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Key moments in our journey of advancing Yoruba interests globally
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

              {timeline.map((item, index) => {
                const IconComponent = item.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <AnimatedSection key={index} animation="fade-up">
                    <div className={`relative flex items-start gap-4 mb-8 md:mb-12 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      {/* Content */}
                      <div className={`flex-1 ml-16 md:ml-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                        <div className={`bg-card border ${item.highlight ? 'border-primary/50 shadow-lg shadow-primary/10' : 'border-border'} rounded-xl p-6 hover:shadow-md transition-shadow`}>
                          <div className={`flex items-center gap-2 mb-2 ${isEven ? 'md:justify-end' : ''}`}>
                            <span className="text-sm font-medium text-primary">{item.date}</span>
                          </div>
                          <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-background border-2 border-primary rounded-full flex items-center justify-center z-10">
                        <IconComponent className="w-7 h-7 text-primary" />
                      </div>

                      {/* Spacer for layout */}
                      <div className="hidden md:block flex-1" />
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Building a Lasting Legacy
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From our humble beginnings in New Jersey to our current global presence, YAC continues to grow 
                and evolve. Our commitment to the advancement of Yoruba people remains unwavering as we 
                work towards a future where our culture, traditions, and values thrive across generations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/who-we-are/mission"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors"
                >
                  Our Mission
                </a>
                <a
                  href="/who-we-are/vision"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary/10 transition-colors"
                >
                  Our Vision
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default History;
