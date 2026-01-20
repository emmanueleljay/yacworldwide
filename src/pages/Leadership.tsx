import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, ArrowLeft } from "lucide-react";
import { AnimatedSection, AnimatedList } from "@/hooks/useScrollAnimation";

import drGodwin from "@/assets/dr-godwin-omolola.jpg";
import drAlbert from "@/assets/dr-albert-ayeni.jpg";
import drAkin from "@/assets/dr-akin-awofolaju.jpg";

const Leadership = () => {
  const { t } = useTranslation();

  const executives = [
    {
      name: "Dr. Godwin Babs Oloyede Omolola",
      role: t('leadership.executiveBoardMember'),
      image: drGodwin,
      bio: "Dr. Godwin Babs Oloyede Omolola was born in Lagos to the Sokoti Family from Igbotako, Ondo State. He earned his D.Sc. in Computer Engineering and Digital Security from Colorado Technical University. With over 25 years of experience as a Cybersecurity Solution Architect and Risk Management Practitioner, he has worked with Fortune 500 companies including Chase Manhattan Bank, IBM, AT&T, and various government agencies. He is a member of ISACA, ISC2, FBI InfraGard, and contributes to emerging technologies under Cisco, IEEE, MITRE, and CSA.",
    },
    {
      name: "Dr. Albert Ayeni",
      role: t('leadership.executiveBoardMember'),
      image: drAlbert,
      bio: "Dr. Albert Ayeni was born in Lagos and raised in Iffe-Ijumu, Kogi State. He earned his Ph.D. from Cornell University and served on the faculty at the University of Ibadan for 17 years before joining Rutgers University in 1995. Currently serving as Ethnic Crops Research Specialist and Leader of Entrepreneurship Ag Program at Rutgers' School of Environmental and Biological Sciences. He is a consultant to APLU and has led planning committees for NIDO Americas World Conference and multiple education summits.",
    },
    {
      name: "Dr. Akin Awofolaju",
      role: t('leadership.executiveBoardMember'),
      image: drAkin,
      bio: "Dr. Akin Awofolaju was born in Lagos and holds an MBA and Ph.D. in Neuroeconomics and Applied Economics. He is an accomplished management consultant and corporate governance executive with experience as former Executive Board Director at Verizon Wireless. Dr. Awofolaju serves as President of NIDOA-USA Northeast Region Chapter and brings extensive expertise in strategic leadership and organizational development.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
      {/* Header */}
      <header className="bg-hero-gradient py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('common.backToHome')}
          </Link>
          <AnimatedSection className="max-w-3xl">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              {t('leadership.badge')}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mt-4 mb-6">
              {t('leadership.title')}
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
              {t('leadership.subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </header>

      {/* Executive Leadership */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              {t('leadership.executiveLabel')}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4">
              {t('leadership.executiveTitle')}
            </h2>
          </AnimatedSection>

          <AnimatedList
            className="grid md:grid-cols-3 gap-8 lg:gap-12"
            staggerDelay={200}
          >
            {executives.map((person) => (
              <div key={person.name} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex gap-3">
                      <button className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-colors">
                        <Linkedin className="w-5 h-5 text-primary-foreground" />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-colors">
                        <Mail className="w-5 h-5 text-primary-foreground" />
                      </button>
                    </div>
                  </div>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                  {person.name}
                </h3>
                <p className="text-primary font-medium mb-3">{person.role}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {person.bio}
                </p>
              </div>
            ))}
          </AnimatedList>
        </div>
      </section>


      {/* CTA */}
      <section className="py-20 lg:py-28 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              {t('leadership.ctaTitle')}
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              {t('leadership.ctaText')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/membership">{t('common.becomeMember')}</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/">{t('common.returnHome')}</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
};

export default Leadership;