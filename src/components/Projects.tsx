import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection, AnimatedList } from "@/hooks/useScrollAnimation";
import tourismImg from "@/assets/tourism.jpg";
import educationImg from "@/assets/education.jpg";
import cultureImg from "@/assets/culture.jpg";
import waterImg from "@/assets/water.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Tourism",
      description:
        "Promoting travel and engagement with Yoruba landmarks, heritage sites, and cultural destinations.",
      image: tourismImg,
      color: "from-accent to-accent/60",
      link: "/projects/tourism",
    },
    {
      title: "Educational Sponsorship",
      description:
        "Supporting students through financial aid, scholarships, and educational resources for a brighter future.",
      image: educationImg,
      color: "from-primary to-primary/60",
      link: "/projects/education",
    },
    {
      title: "Cultural Promotion",
      description:
        "Hosting events and research initiatives to uphold and celebrate Yoruba heritage and traditions.",
      image: cultureImg,
      color: "from-secondary to-secondary/60",
      link: "/projects/culture",
    },
    {
      title: "Water Borehole",
      description:
        "Infrastructure projects providing clean water access to communities in need across Yoruba land.",
      image: waterImg,
      color: "from-accent to-primary/60",
      link: "/projects/water",
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Our Projects
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Making a Difference
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Take part in our projects for the development and advancement of the Yoruba. 
            We want to reach out to those who are in need.
          </p>
        </AnimatedSection>

        {/* Projects Grid */}
        <AnimatedList
          className="grid md:grid-cols-2 gap-8"
          staggerDelay={200}
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl shadow-warm hover:shadow-elevated transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none`}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-primary-foreground/90 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.description}
                  </p>
                  <Link to={project.link} className="relative z-20 inline-block pointer-events-auto">
                    <Button
                      variant="heroOutline"
                      className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Default Title Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/90 to-transparent p-6 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="font-serif text-xl font-bold text-primary-foreground">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </AnimatedList>
      </div>
    </section>
  );
};

export default Projects;
