import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Crown, Users, MapPin, Scroll, Scale, Globe } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const WhoWeAre = () => {
  const sevenPrinces = [
    "The Alafin of Oyo",
    "The Oba of Benin (sharing a common ancestor, though the Edo people have their own distinct identity)",
    "The Alaketu of Ketu",
    "The Orangun of Ila",
    "The Onisabe of Sabe",
    "The Onipopo of Popo",
    "The Olowu of Owu",
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
              WHO WE ARE
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Understanding the connection between the "Children of Oduduwa" and the "Yoruba people" – 
              a genealogical/royal title versus a cultural/ethnic identity.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                In Yoruba culture and history, the "Children of Oduduwa" and the "Yoruba people" are 
                essentially two ways of describing the same group, but they carry different nuances. 
                One is a genealogical/royal title, while the other is a cultural/ethnic identity. 
                Here is a breakdown of the differences:
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Lineage vs Ethnicity Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Crown className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
                  1. Lineage vs. Ethnicity
                </h2>
              </div>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection animation="fade-up" delay={100}>
                <div className="bg-card p-8 rounded-2xl shadow-lg border border-border h-full">
                  <h3 className="text-xl font-serif font-bold text-primary mb-4">
                    Children of Oduduwa (Ọmọ Oòduà)
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This term refers to the direct descendants and royal lineages of Oduduwa, 
                    the legendary progenitor of the race. Historically, it specifically designated 
                    the princes and princesses who left Ile-Ife to found their own kingdoms 
                    (like Oyo, Benin, Ketu, and Ila). Today, it is used as a proud, poetic epithet 
                    for all Yoruba people to emphasize their shared ancestry and divine origin.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-up" delay={200}>
                <div className="bg-card p-8 rounded-2xl shadow-lg border border-border h-full">
                  <h3 className="text-xl font-serif font-bold text-primary mb-4">
                    Yoruba People
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This is the modern ethnic and linguistic label. It covers millions of people 
                    who speak the Yoruba language and practice its culture, regardless of whether 
                    they can trace a direct bloodline to the royal house of Ife. Interestingly, 
                    the name "Yoruba" was not used by the people themselves for centuries; they 
                    identified by their sub-groups (like Egba, Ijesha, or Ekiti) until the 19th century.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* The Seven Princes Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
                  2. The Seven (or Sixteen) Princes
                </h2>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={100}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Tradition often distinguishes the "Children of Oduduwa" by the specific crowns 
                they inherited. While accounts vary, the most famous "children" (who were often 
                actually his grandchildren through his son Okanbi) founded the core Yoruba kingdoms:
              </p>
              
              <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
                <ul className="space-y-4">
                  {sevenPrinces.map((prince, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-bold text-sm">{index + 1}</span>
                      </span>
                      <span className="text-foreground">{prince}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Historical Reality vs Mythology Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Scroll className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
                  3. Historical Reality vs. Mythology
                </h2>
              </div>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection animation="fade-up" delay={100}>
                <div className="bg-card p-8 rounded-2xl shadow-lg border border-border h-full">
                  <h3 className="text-xl font-serif font-bold text-primary mb-4">
                    The Mythological View
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    In this version, all Yoruba people are "Children of Oduduwa" because he was 
                    a divine being sent from heaven to create the earth at Ile-Ife. Therefore, 
                    every Yoruba person is his spiritual descendant.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-up" delay={200}>
                <div className="bg-card p-8 rounded-2xl shadow-lg border border-border h-full">
                  <h3 className="text-xl font-serif font-bold text-primary mb-4">
                    The Historical View
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Historians suggest Oduduwa was a powerful leader who migrated to Ile-Ife 
                    and unified existing autonomous communities. In this context, "Children of 
                    Oduduwa" refers to the ruling elite he established, while the "Yoruba" are 
                    the broader population formed by the merging of his followers with the 
                    indigenous people who were already living in the region.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Oyo and Benin Connection Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Globe className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
                  The Connection: Oyo Empire & Kingdom of Benin
                </h2>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={100}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The connection between the Oyo Empire and the Kingdom of Benin is one of the 
                most fascinating parts of West African history. Both trace their royal lineages 
                back to Oranmiyan, the youngest son (or grandson) of Oduduwa, but they developed 
                into very different types of powers.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={150}>
              <div className="bg-card p-8 rounded-2xl shadow-lg border border-border mb-8">
                <h3 className="text-xl font-serif font-bold text-primary mb-6">
                  1. The Common Link: Oranmiyan
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  According to the most widely accepted historical tradition in Ile-Ife:
                </p>
                
                <div className="space-y-6">
                  <div className="pl-6 border-l-4 border-primary">
                    <h4 className="font-semibold text-foreground mb-2">To Benin:</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      After the original rulers of Benin (the Ogiso dynasty) failed, the people 
                      sent to Oduduwa for a ruler. He sent his son, Oranmiyan. Oranmiyan stayed 
                      for a while but found the culture difficult to manage, calling it "Ile-Ibinu" 
                      (a land of vexation), which eventually became "Benin." Before leaving, he 
                      fathered a son with a local princess. That son became Eweka I, the first 
                      Oba of Benin.
                    </p>
                  </div>
                  
                  <div className="pl-6 border-l-4 border-primary">
                    <h4 className="font-semibold text-foreground mb-2">To Oyo:</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      After leaving Benin, Oranmiyan traveled north and eventually founded Oyo-Ile. 
                      He became the first Alaafin of Oyo.
                    </p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mt-6">
                  Because of this, the Alaafin of Oyo and the Oba of Benin are traditionally seen 
                  as "brothers" in royalty, both being "Children of Oduduwa."
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="bg-card p-8 rounded-2xl shadow-lg border border-border mb-8">
                <h3 className="text-xl font-serif font-bold text-primary mb-4">
                  2. Oyo vs. Benin: Key Differences
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  While they share a root, they grew into distinct entities with different 
                  political systems, cultures, and spheres of influence.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* The Origin Dispute Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Scale className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
                  3. The "Origin"
                </h2>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={100}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                It is important to know that today, there is a famous disagreement between the 
                two groups regarding Oduduwa himself:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-card p-8 rounded-2xl shadow-lg border border-border h-full">
                  <h3 className="text-xl font-serif font-bold text-primary mb-4">
                    The Yoruba Version
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Oduduwa was a divine figure (or a prince from the East) who founded Ile-Ife. 
                    He sent his son Oranmiyan to "civilize" or rule Benin.
                  </p>
                </div>
                
                <div className="bg-card p-8 rounded-2xl shadow-lg border border-border h-full">
                  <h3 className="text-xl font-serif font-bold text-primary mb-4">
                    The Benin (Edo) Version
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    They believe Oduduwa was actually a Benin prince named Ekaladerhan who fled 
                    Benin, went to Ile-Ife, and changed his name. This argument is plainly 
                    contrary to Yorubas' Father & Son definitive roles – that a head cannot be a tail.
                  </p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Oranmiyan, their progenitor, is from Ile-Ife. In this version, the "Children of 
                Oduduwa" are actually children of a Benin prince, making the Yoruba royalty 
                descendants of Benin, rather than the other way around – this is a political tale 
                that doesn't sustain any genealogical facts. A historical 4th century origination 
                of a progenitor from Ile-Ife vs. a recent 12-14th century usurpation of fatherly 
                role of reverse.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-8 text-center">
                In Summary
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-primary-foreground/10 p-6 rounded-2xl text-center backdrop-blur-sm">
                  <h3 className="text-xl font-serif font-bold mb-3">Oyo</h3>
                  <p className="opacity-90">
                    The political peak of the Yoruba people.
                  </p>
                </div>
                
                <div className="bg-primary-foreground/10 p-6 rounded-2xl text-center backdrop-blur-sm">
                  <h3 className="text-xl font-serif font-bold mb-3">Benin</h3>
                  <p className="opacity-90">
                    The peak of the Edo people, but its royal family shares a bloodline with the Yoruba.
                  </p>
                </div>
                
                <div className="bg-primary-foreground/10 p-6 rounded-2xl text-center backdrop-blur-sm">
                  <h3 className="text-xl font-serif font-bold mb-3">Children of Oduduwa</h3>
                  <p className="opacity-90">
                    The title links them together as part of a shared historical family tree, 
                    even though they are different ethnicities today.
                  </p>
                </div>
              </div>
              
              <blockquote className="border-l-4 border-primary-foreground pl-6 py-4 bg-primary-foreground/10 rounded-r-lg">
                <p className="text-2xl font-serif italic">
                  "ILE-IFE: The disputed cradle of the world, is the undisputed cradle of 
                  Yoruba race worldwide."
                </p>
              </blockquote>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-6">
            Join Us in Preserving Our Heritage
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Become a member of YAC Worldwide and help champion the cause of 
            Yoruba dignity, development, and cultural preservation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/membership">Become a Member</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8">
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
