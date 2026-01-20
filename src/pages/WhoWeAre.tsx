import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Globe, Crown, Heart, Scale } from "lucide-react";

const WhoWeAre = () => {
  const highlights = [
    {
      icon: Users,
      title: "21% of Nigeria",
      description: "The Yoruba constitute approximately 21% of Nigeria's total population"
    },
    {
      icon: MapPin,
      title: "Southwestern Nigeria",
      description: "Primary states: Ekiti, Lagos, Ogun, Ondo, Osun, and Oyo"
    },
    {
      icon: Globe,
      title: "Global Diaspora",
      description: "Communities in Benin Republic, Brazil, Cuba, Jamaica, and Togo"
    }
  ];

  const values = [
    {
      icon: Crown,
      title: "Pride & Heritage",
      description: "An immensely proud heritage with acute consciousness of personal dignity and well-developed cultural norms predating European arrival."
    },
    {
      icon: Users,
      title: "Sovereignty of the People",
      description: "A system strongly rooted in the belief that power belongs to the people, with rulers serving the welfare of their citizens."
    },
    {
      icon: Scale,
      title: "Dignity & Freedom",
      description: "Strong emphasis on individual dignity, freedom of expression, and fairness and equity in the allocation of opportunities."
    },
    {
      icon: Heart,
      title: "Respect for All",
      description: "Full inclusion and respect for women at all levels, with selection or election by the people as the source of legitimacy."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Our Identity
            </span>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Who Are the <span className="text-primary">Yorubas?</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              One of the largest ethnic groups in West Africa, with a rich heritage 
              of dignity, democracy, and development-oriented values.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-2xl shadow-lg border border-border text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-8">
                A Development-Oriented People
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The Yoruba, who populate the Southwestern states of Nigeria, is one of the largest 
                ethnic groups in West Africa. These states are Ekiti, Lagos, Ogun, Ondo, Osun, and 
                Oyo states, with a sizeable Yoruba population found in adjoining states of Kwara, 
                Kogi, and Delta.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Beyond the shores of Nigeria, some of the indigenous communities of the Yoruba are 
                found in Benin Republic, Brazil, Cuba, Jamaica, and Togo. Yoruba, by nature and 
                natural inclinations, is a very development-oriented people. We have an immensely 
                proud heritage and are also very acutely conscious of personal dignity.
              </p>

              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-8 mt-12">
                A Democratic Heritage
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We have well-developed mores and norms, subsisting long before the arrival of the 
                Europeans on the scene. The whole Yoruba system is, very obviously, strongly-rooted 
                in a belief in the sovereignty of the people – in the belief and assumption that 
                power belongs to the people, and that the sole duty of rulers is to serve the 
                welfare of their people.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Not only did the system's operation involve conceptually all citizens, but it also 
                strongly emphasized the dignity of the individual, the right and freedom of the 
                individual to speak and to be heard with respect, and fairness and equity in the 
                allocation of opportunities. It fully included and respected women at all levels. 
                It emphasized selection or election by the people as the source of legitimacy of 
                public officers.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                In fact, the system of election introduced by Europeans into Africa in the 20th 
                century is arguably not superior to the Yoruba indigenous practice in any essence – 
                and elections were, by no means, new or strange to us as people.
              </p>

              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-8 mt-12">
                Confident & Self-Assured
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our political culture also made us confident and self-assured persons. We honor our 
                rulers and leaders, but we cherish our freedom of expression, choice, and association, 
                and we expect to be decently respected by persons who exercise authority over us. We 
                want to be part of the molding of the direction of the affairs of our society.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Even among enslaved Africans in the slavery setting in the Americas, observers 
                remarked of enslaved Yoruba men that they were "proud – even haughty". Similar 
                remarks were made during British colonial rule by British bureaucrats. One official, 
                who served for many years in Nigeria, remarked that of British African subjects, the 
                Yoruba were one people who never treated the British or any white man as a god.
              </p>

              <blockquote className="border-l-4 border-primary pl-6 py-4 my-8 bg-primary/5 rounded-r-lg">
                <p className="text-xl font-serif italic text-foreground mb-2">
                  "In my experience, the Yoruba regarded themselves as superior to the British. 
                  A Yoruba child would look at an important European and shout, 'Hello, white man,' 
                  – as if the white man were a freak."
                </p>
                <cite className="text-muted-foreground">— A British Colonial Official</cite>
              </blockquote>

              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-8 mt-12">
                The Imperative for Restoration
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                This is the Yoruba. The need to restore this high sense of dignity and self-worth 
                remains an urgent and critical imperative. The alternative is to go deeper into the 
                abyss. The Yoruba have vested the authority to lead them out of the developmental 
                quagmire in the hands of the current Yoruba political leadership.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                It is extremely easy to lead the Yoruba people and enjoy their support and goodwill. 
                However, good, responsible, responsive, and impactful governance is a sine-qua-non 
                to reap such benefits. We would be doing ourselves and future generations a world of 
                good by championing this cause at this point in our history.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The foundational principles that define Yoruba culture and society
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-2xl shadow-lg border border-border"
              >
                <div className="w-14 h-14 mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
            Join Us in Preserving Our Heritage
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Become a member of YAC Worldwide and help champion the cause of 
            Yoruba dignity, development, and cultural preservation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/membership">Become a Member</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/leadership">Meet Our Leaders</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhoWeAre;
