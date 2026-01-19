import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, GraduationCap, Music, Droplets, Heart, Users, Target, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import tourismImg from "@/assets/tourism.jpg";
import educationImg from "@/assets/education.jpg";
import cultureImg from "@/assets/culture.jpg";
import waterImg from "@/assets/water.jpg";

const Projects = () => {
  const projects = [
    {
      id: "tourism",
      title: "Tourism Development",
      subtitle: "Discover Yorubaland",
      icon: MapPin,
      image: tourismImg,
      description: "Promoting travel and engagement with Yoruba landmarks, heritage sites, and cultural destinations to boost economic development and cultural awareness.",
      longDescription: "Our tourism initiative aims to showcase the rich cultural heritage, natural beauty, and historical significance of Yorubaland to the world. We work with local communities, tour operators, and government agencies to create sustainable tourism opportunities that benefit local economies while preserving our cultural identity.",
      goals: [
        "Develop heritage tourism routes connecting major historical sites",
        "Train local guides in Yoruba history and cultural storytelling",
        "Create digital platforms for virtual tours and travel planning",
        "Partner with international tourism organizations",
      ],
      impact: [
        { number: "15+", label: "Heritage Sites Documented" },
        { number: "200+", label: "Local Guides Trained" },
        { number: "5,000+", label: "Annual Visitors" },
      ],
      color: "from-accent to-accent/60",
    },
    {
      id: "education",
      title: "Educational Sponsorship",
      subtitle: "Empowering Future Leaders",
      icon: GraduationCap,
      image: educationImg,
      description: "Supporting students through financial aid, scholarships, and educational resources for a brighter future across Yorubaland and the diaspora.",
      longDescription: "Education is the cornerstone of progress. Our Educational Sponsorship program provides comprehensive support to deserving students who lack the financial means to pursue their academic dreams. From primary school to university level, we invest in the next generation of Yoruba leaders, professionals, and change-makers.",
      goals: [
        "Provide full and partial scholarships to students in need",
        "Supply educational materials and technology resources",
        "Build and renovate school facilities in underserved areas",
        "Establish mentorship programs connecting students with professionals",
      ],
      impact: [
        { number: "500+", label: "Students Sponsored" },
        { number: "25", label: "Schools Supported" },
        { number: "$150K+", label: "Scholarships Awarded" },
      ],
      color: "from-primary to-primary/60",
    },
    {
      id: "culture",
      title: "Cultural Promotion",
      subtitle: "Preserving Our Heritage",
      icon: Music,
      image: cultureImg,
      description: "Hosting events and research initiatives to uphold and celebrate Yoruba heritage, traditions, language, and artistic expressions.",
      longDescription: "The Yoruba culture is one of the richest in Africa, with a profound influence on global art, music, religion, and philosophy. Our Cultural Promotion initiative works to preserve, document, and celebrate this heritage through festivals, educational programs, research projects, and artistic collaborations that connect Yoruba people worldwide.",
      goals: [
        "Organize annual cultural festivals and heritage celebrations",
        "Document and archive traditional practices and oral histories",
        "Promote Yoruba language learning and literacy",
        "Support traditional artists, musicians, and craftspeople",
      ],
      impact: [
        { number: "20+", label: "Cultural Events Hosted" },
        { number: "1,000+", label: "Artifacts Preserved" },
        { number: "10K+", label: "Festival Attendees" },
      ],
      color: "from-secondary to-secondary/60",
    },
    {
      id: "water",
      title: "Water Borehole Project",
      subtitle: "Clean Water for All",
      icon: Droplets,
      image: waterImg,
      description: "Infrastructure projects providing clean water access to communities in need across Yorubaland, improving health and quality of life.",
      longDescription: "Access to clean water is a fundamental human right, yet many communities in Yorubaland still lack reliable water sources. Our Water Borehole Project addresses this critical need by drilling wells, installing water systems, and educating communities on water management and sanitation practices for lasting impact.",
      goals: [
        "Drill boreholes in communities lacking clean water access",
        "Install solar-powered pumping systems for sustainability",
        "Train local technicians for ongoing maintenance",
        "Conduct hygiene and sanitation education programs",
      ],
      impact: [
        { number: "30+", label: "Boreholes Completed" },
        { number: "50K+", label: "People Served" },
        { number: "15", label: "Communities Reached" },
      ],
      color: "from-accent to-primary/60",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary via-primary/90 to-accent overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground/90 text-sm font-medium mb-6">
              Our Initiatives
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Projects for <span className="text-gradient-gold">Progress</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Discover how YAC is making a tangible difference in Yorubaland through sustainable development, 
              cultural preservation, and community empowerment initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Detail Sections */}
      {projects.map((project, index) => (
        <section 
          key={project.id} 
          id={project.id}
          className={`py-20 lg:py-32 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}
        >
          <div className="container mx-auto px-4">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-elevated">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20`} />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-full -z-10" />
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-primary font-medium uppercase tracking-wider text-sm">
                    {project.subtitle}
                  </span>
                </div>
                
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {project.title}
                </h2>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {project.longDescription}
                </p>

                {/* Goals */}
                <div className="mb-8">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Our Goals
                  </h3>
                  <ul className="space-y-3">
                    {project.goals.map((goal, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact Stats */}
                <div className="grid grid-cols-3 gap-4 p-6 bg-muted/50 rounded-2xl mb-8">
                  {project.impact.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl md:text-3xl font-serif font-bold text-primary">
                        {stat.number}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/membership">
                      <Heart className="w-5 h-5" />
                      Support This Project
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/membership">
                      <Users className="w-5 h-5" />
                      Volunteer
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary via-primary/90 to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Be Part of the Change
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-10 leading-relaxed">
              Your support makes these projects possible. Join us in building a brighter future 
              for Yoruba communities worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/membership">
                  <Heart className="w-5 h-5" />
                  Become a Member
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/leadership">
                  Meet Our Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Projects;
