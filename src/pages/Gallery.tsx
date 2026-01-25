import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

// Import project images
import tourismImg from "@/assets/tourism.jpg";
import educationImg from "@/assets/education.jpg";
import cultureImg from "@/assets/culture.jpg";
import waterImg from "@/assets/water.jpg";
import yorubaDrummers from "@/assets/yoruba-drummers.jpg";
import egungunMasquerade from "@/assets/egungun-masquerade.jpg";
import yorubaSculpture from "@/assets/yoruba-sculpture.jpg";
import yacEvent1 from "@/assets/yac-event-1.jpg";
import yacEvent2 from "@/assets/yac-event-2.jpg";
import royalMeeting from "@/assets/royal-meeting.jpg";
import traditionalAttire from "@/assets/traditional-attire.jpg";
import culturalCeremony from "@/assets/cultural-ceremony.jpg";
import galleryNew1 from "@/assets/gallery-new-1.jpg";
import galleryNew2 from "@/assets/gallery-new-2.jpg";
import galleryNew3 from "@/assets/gallery-new-3.jpg";

const Gallery = () => {
  const galleryCategories = [
    {
      title: "YAC Events & Gatherings",
      images: [
        { src: yacEvent1, alt: "YAC Think Tank Group annual gathering", caption: "YAC Think Tank Group - Annual gathering featuring leaders and members in traditional attire" },
        { src: yacEvent2, alt: "YAC leadership at official event", caption: "YAC Leadership - Executive members presenting the YAC Solemn Pledge and Mission" },
        { src: galleryNew1, alt: "YAC community event", caption: "YAC Community Event - Members gathered for cultural celebration" },
        { src: galleryNew2, alt: "YAC gathering", caption: "YAC Gathering - Community members coming together in unity" },
        { src: galleryNew3, alt: "YAC event", caption: "YAC Event - Celebrating Yoruba heritage and culture" },
      ],
    },
    {
      title: "Cultural Heritage",
      images: [
        { src: yorubaSculpture, alt: "Traditional Yoruba bronze sculpture", caption: "Ancient Yoruba Bronze Art - Twin figures holding ceremonial vessel, showcasing traditional craftsmanship" },
        { src: cultureImg, alt: "Traditional Yoruba cultural ceremony", caption: "Traditional Yoruba Ceremony - Celebrating our rich cultural heritage" },
        { src: yorubaDrummers, alt: "Traditional Yoruba drummers", caption: "Yoruba Drummers - The talking drum (Dundun) central to Yoruba cultural celebrations" },
        { src: egungunMasquerade, alt: "Egungun masquerade performers", caption: "Egungun Masquerade - Sacred ancestral traditions honoring departed spirits" },
      ],
    },
    {
      title: "Royal & Traditional Leadership",
      images: [
        { src: royalMeeting, alt: "Meeting with traditional royalty", caption: "Royal Audience - YAC representatives meeting with traditional Yoruba royalty" },
        { src: traditionalAttire, alt: "Leaders in traditional Yoruba attire", caption: "Traditional Attire - Leaders adorned in ceremonial Yoruba dress at formal event" },
        { src: culturalCeremony, alt: "Traditional blessing ceremony", caption: "Cultural Blessing - Traditional ceremony with chiefs bestowing blessings on the youth" },
      ],
    },
    {
      title: "Tourism Promotion",
      images: [
        { src: tourismImg, alt: "Yoruba heritage site monument", caption: "Heritage Monument - Traditional Yoruba landmark promoting cultural tourism" },
      ],
    },
    {
      title: "Educational Sponsorship",
      images: [
        { src: educationImg, alt: "Students in classroom", caption: "Education Initiative - Students benefiting from YAC educational sponsorship programs" },
      ],
    },
    {
      title: "Water Borehole Project",
      images: [
        { src: waterImg, alt: "Community water borehole", caption: "Clean Water Access - Communities benefiting from YAC water borehole projects" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Our Gallery
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Moments of <span className="text-primary">Impact</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Explore our collection of photos showcasing the projects, events, and 
                community impact of the Yoruba Action Council across the globe.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {galleryCategories.map((category, categoryIndex) => (
            <AnimatedSection key={category.title} animation="fade-up" delay={categoryIndex * 100}>
              <div className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8 border-l-4 border-primary pl-4">
                  {category.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.images.map((image, imageIndex) => (
                    <AnimatedSection key={imageIndex} animation="fade-up" delay={imageIndex * 100}>
                      <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <p className="text-primary-foreground text-sm font-medium leading-relaxed">
                              {image.caption}
                            </p>
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Share Your Moments
              </h2>
              <p className="text-muted-foreground mb-8">
                Have photos from YAC events or projects? We'd love to feature them in our gallery. 
                Contact us to share your memories.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
