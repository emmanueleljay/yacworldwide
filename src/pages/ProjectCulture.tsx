import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Music, BookOpen, Palette, Mic, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import cultureImg from "@/assets/culture.jpg";

const ProjectCulture = () => {
  const initiatives = [
    {
      icon: Music,
      title: "Traditional Music & Dance",
      description: "Preserving and teaching traditional Yoruba music, drumming, and dance forms to new generations.",
    },
    {
      icon: BookOpen,
      title: "Language Preservation",
      description: "Developing resources and programs to teach and maintain the Yoruba language globally.",
    },
    {
      icon: Palette,
      title: "Arts & Crafts",
      description: "Supporting traditional artisans and promoting Yoruba art forms including adire, sculptures, and beadwork.",
    },
    {
      icon: Mic,
      title: "Cultural Events",
      description: "Organizing festivals, conferences, and celebrations that bring the community together.",
    },
  ];

  const events = [
    { name: "Annual Yoruba Heritage Festival", date: "August 2024", location: "Houston, TX" },
    { name: "Yoruba Language Workshop", date: "Monthly", location: "Online" },
    { name: "Traditional Arts Exhibition", date: "October 2024", location: "Lagos, Nigeria" },
    { name: "Youth Cultural Camp", date: "Summer 2024", location: "Various Locations" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${cultureImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/70 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-6">
              Cultural Promotion
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Celebrating Our <span className="text-gradient-gold">Heritage</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
              Our cultural promotion initiative works to preserve, celebrate, and share the rich traditions 
              of the Yoruba people. From language and music to art and ceremonies, we ensure our heritage 
              thrives for generations to come.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl">
                <Heart className="w-5 h-5" />
                Support Culture
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/#projects">View All Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Cultural Initiatives
            </h2>
            <p className="text-muted-foreground text-lg">
              We work across multiple fronts to ensure the Yoruba cultural heritage remains vibrant and accessible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {initiatives.map((item) => (
              <div 
                key={item.title}
                className="bg-card p-8 rounded-2xl shadow-warm hover:shadow-elevated transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-secondary/20 transition-colors">
                  <item.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Cultural Preservation Matters
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Culture is the foundation of identity. As Yoruba people spread across the globe, maintaining 
                our cultural connections becomes increasingly vital. Our initiatives ensure that:
              </p>
              
              <ul className="space-y-4">
                {[
                  "Future generations understand their roots and heritage",
                  "Traditional knowledge and practices are documented and preserved",
                  "The Yoruba language remains alive and evolving",
                  "Artists and craftspeople can continue their traditional work",
                  "Our community stays connected across geographical boundaries",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <img 
                src={cultureImg} 
                alt="Yoruba Cultural Celebration" 
                className="rounded-2xl shadow-elevated w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-warm">
                <div className="text-3xl font-serif font-bold text-secondary mb-1">100+</div>
                <div className="text-muted-foreground text-sm">Cultural Events</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
              Upcoming Events
            </h2>
            <p className="text-muted-foreground text-lg">
              Join us at our upcoming cultural events and celebrations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {events.map((event) => (
              <div 
                key={event.name}
                className="bg-card p-6 rounded-xl shadow-warm hover:shadow-elevated transition-all duration-300 flex items-center gap-4"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Music className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{event.name}</h3>
                  <p className="text-muted-foreground text-sm">{event.date} • {event.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Be Part of Our Cultural Legacy
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Help us preserve and promote the rich cultural heritage of the Yoruba people. 
            Your support makes a lasting difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="xl">
              <Heart className="w-5 h-5" />
              Donate Now
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/membership">Become a Member</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectCulture;
