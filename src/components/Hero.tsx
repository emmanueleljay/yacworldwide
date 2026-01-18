import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import cultureBg from "@/assets/culture.jpg";
import tourismBg from "@/assets/tourism.jpg";
import educationBg from "@/assets/education.jpg";

const slides = [
  {
    image: heroBg,
    title: "Welcome to",
    subtitle: "Yoruba Action Council",
    description: "Advancing the progress of the Yoruba nation, preserving cultural traditions, and deploying the professionalism of our members for global Yoruba development.",
  },
  {
    image: cultureBg,
    title: "Preserving",
    subtitle: "Our Rich Heritage",
    description: "Celebrating and protecting Yoruba cultural traditions, language, arts, and ancestral wisdom for future generations.",
  },
  {
    image: tourismBg,
    title: "Promoting",
    subtitle: "Yorubaland Tourism",
    description: "Showcasing the beauty, history, and vibrant culture of Yorubaland to the world through sustainable tourism initiatives.",
  },
  {
    image: educationBg,
    title: "Empowering",
    subtitle: "Through Education",
    description: "Sponsoring students and building educational infrastructure to create opportunities for Yoruba youth worldwide.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-hero-gradient opacity-85" />
      
      {/* Slide Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-8 h-2 bg-primary"
                : "w-2 h-2 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full mb-8 animate-fade-up opacity-0 stagger-1">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              501(c)(3) Non-Profit Organization
            </span>
          </div>

          {/* Dynamic Heading */}
          <div className="overflow-hidden mb-6">
            {slides.map((slide, index) => (
              <h1
                key={index}
                className={`font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight transition-all duration-700 ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8 absolute inset-0 pointer-events-none"
                }`}
              >
                {slide.title}
                <span className="block text-gradient-gold mt-2">
                  {slide.subtitle}
                </span>
              </h1>
            ))}
          </div>

          {/* Dynamic Subtitle */}
          <div className="relative h-24 md:h-20 mb-8">
            {slides.map((slide, index) => (
              <p
                key={index}
                className={`text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed transition-all duration-700 ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
                }`}
              >
                {slide.description}
              </p>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up opacity-0 stagger-4">
            <Button variant="hero" size="xl" className="group">
              <Heart className="w-5 h-5" />
              Support Our Mission
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Learn More About Us
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-up opacity-0 stagger-5">
            {[
              { number: "2018", label: "Founded" },
              { number: "1000+", label: "Members" },
              { number: "50+", label: "Projects" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/70 text-sm mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
