import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, BookOpen, Award, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import educationImg from "@/assets/education.jpg";

const ProjectEducation = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Scholarships",
      description: "Full and partial scholarships for deserving students from primary school through university level.",
    },
    {
      icon: BookOpen,
      title: "Educational Materials",
      description: "Providing textbooks, school supplies, and learning resources to students in need.",
    },
    {
      icon: Award,
      title: "Merit Awards",
      description: "Recognizing and rewarding academic excellence to motivate continued success.",
    },
    {
      icon: Users,
      title: "Mentorship Programs",
      description: "Connecting students with professionals for guidance and career development.",
    },
  ];

  const stats = [
    { number: "500+", label: "Students Sponsored" },
    { number: "25", label: "Schools Supported" },
    { number: "$200K+", label: "Funds Distributed" },
    { number: "15", label: "Countries Reached" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${educationImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/70 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              Educational Sponsorship
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Empowering Through <span className="text-gradient-gold">Education</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
              Education is the foundation of progress. Our sponsorship program provides financial support, 
              resources, and mentorship to help Yoruba students achieve their academic dreams and become 
              future leaders.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl">
                <Heart className="w-5 h-5" />
                Sponsor a Student
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/#projects">View All Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Programs
            </h2>
            <p className="text-muted-foreground text-lg">
              We offer comprehensive educational support through multiple programs designed to address 
              different needs and stages of academic development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div 
                key={program.title}
                className="bg-card p-8 rounded-2xl shadow-warm hover:shadow-elevated transition-all duration-300 group flex gap-6"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <program.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">{program.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src={educationImg} 
                alt="Educational Sponsorship" 
                className="rounded-2xl shadow-elevated w-full"
              />
            </div>

            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                How You Can Help
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Your contribution directly impacts a student's life and future. Here's how the sponsorship process works:
              </p>
              
              <div className="space-y-6">
                {[
                  { step: "1", title: "Choose Your Level", desc: "Select a sponsorship tier that fits your capacity" },
                  { step: "2", title: "Match with a Student", desc: "We connect you with a student who needs support" },
                  { step: "3", title: "Track Progress", desc: "Receive updates on your sponsored student's achievements" },
                  { step: "4", title: "See the Impact", desc: "Witness the transformation your support creates" },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-bold">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Change a Life Today
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Every donation, no matter the size, helps a student move closer to their dreams. 
            Join us in building the future leaders of the Yoruba nation.
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

export default ProjectEducation;
