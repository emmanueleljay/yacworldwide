import { Target, Users, Globe, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To assist in the progress of Yoruba's world and to use our intellects to support the global empowerment of the Yoruba.",
    },
    {
      icon: Users,
      title: "Unity & Community",
      description:
        "Working in one accord to empower our people at all levels of society, promoting peace, unity, love, and prosperity.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Operating as a link between the Yoruba Nation, the diaspora, and global interaction for worldwide development.",
    },
    {
      icon: Shield,
      title: "Cultural Preservation",
      description:
        "Promoting and supporting Yoruba cultural traditions, preventing our rich heritage from extinction through research.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-section-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            About Us
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Advancing the Yoruba Nation
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Yoruba Action Council (YAC) was incorporated in New Jersey, USA on May 29th, 2018 
            by like-minded Yoruba professionals to promote Yoruba interest, uphold and enhance 
            our heritage through political and socio-economic rebranding.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group p-8 bg-card rounded-2xl shadow-warm hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Solemn Pledge */}
        <div className="mt-20 bg-hero-gradient rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-serif text-2xl md:text-4xl font-bold text-primary-foreground mb-8">
              Our Solemn Pledge
            </h3>
            <div className="space-y-4 text-primary-foreground/90 text-lg leading-relaxed">
              <p className="italic">
                "We, the descendants of the Yoruba, desiring to promote the interests 
                and welfare of the Yoruba globally..."
              </p>
              <ul className="text-left max-w-2xl mx-auto space-y-3 mt-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span>Committed to transparency with a great sense of justice and honesty</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span>Exceptionally committed to excellence in upholding our heritage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span>The youth shall occupy a prime position in all our efforts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
