import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, ArrowLeft } from "lucide-react";

import leader1 from "@/assets/leader-1.jpg";
import leader2 from "@/assets/leader-2.jpg";
import leader3 from "@/assets/leader-3.jpg";
import leader4 from "@/assets/leader-4.jpg";
import leader5 from "@/assets/leader-5.jpg";
import leader6 from "@/assets/leader-6.jpg";

const Leadership = () => {
  const executives = [
    {
      name: "Chief Adebayo Ogundimu",
      role: "President",
      image: leader1,
      bio: "A visionary leader with over 25 years of experience in community development and cultural preservation. Chief Ogundimu founded YAC with a mission to unite the Yoruba diaspora and advance our heritage globally.",
    },
    {
      name: "Dr. Folake Adeleke",
      role: "Vice President",
      image: leader2,
      bio: "An accomplished educator and cultural advocate, Dr. Adeleke leads our educational sponsorship programs and has helped hundreds of students access quality education.",
    },
    {
      name: "Hon. Olumide Fashola",
      role: "Chairman, Board of Trustees",
      image: leader3,
      bio: "With decades of experience in law and governance, Hon. Fashola provides strategic oversight and ensures YAC maintains the highest standards of transparency and accountability.",
    },
  ];

  const boardMembers = [
    {
      name: "Mrs. Adunni Bakare",
      role: "Secretary General",
      image: leader4,
      bio: "An organizational expert dedicated to ensuring smooth operations and effective communication across all YAC chapters worldwide.",
    },
    {
      name: "Mr. Tunde Akinwale",
      role: "Youth Coordinator",
      image: leader5,
      bio: "A passionate advocate for youth empowerment, Tunde leads initiatives to engage the next generation in cultural preservation and leadership.",
    },
    {
      name: "Chief Samuel Adeyemi",
      role: "Financial Secretary",
      image: leader6,
      bio: "A seasoned financial professional ensuring fiscal responsibility and transparency in all YAC financial operations and donor management.",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-hero-gradient py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="max-w-3xl">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Our Team
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mt-4 mb-6">
              Leadership & Board
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
              Meet the dedicated individuals who guide YAC's mission to advance the 
              progress of the Yoruba nation and preserve our rich cultural heritage.
            </p>
          </div>
        </div>
      </header>

      {/* Executive Leadership */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Executive Team
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4">
              Executive Leadership
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {executives.map((person, index) => (
              <div
                key={person.name}
                className="group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
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
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-20 lg:py-28 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Governance
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4">
              Board Members
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {boardMembers.map((person, index) => (
              <div
                key={person.name}
                className="bg-card rounded-2xl overflow-hidden shadow-warm hover:shadow-elevated transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                    {person.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">{person.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {person.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Join Our Mission
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            We're always looking for dedicated individuals to join our cause. 
            Together, we can make a lasting impact on the Yoruba community worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Become a Member
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/">Return Home</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Leadership;
