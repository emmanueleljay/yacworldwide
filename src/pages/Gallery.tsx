import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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
import galleryNew4 from "@/assets/gallery-new-4.jpg";
import galleryNew5 from "@/assets/gallery-new-5.jpg";
import galleryNew6 from "@/assets/gallery-new-6.jpg";
import galleryNew7 from "@/assets/gallery-new-7.jpg";
import galleryNew8 from "@/assets/gallery-new-8.jpg";
import galleryNew9 from "@/assets/gallery-new-9.jpg";
import galleryEvent1 from "@/assets/gallery-event-1.jpg";
import galleryEvent2 from "@/assets/gallery-event-2.jpg";
import galleryEvent3 from "@/assets/gallery-event-3.jpg";
import galleryEvent4 from "@/assets/gallery-event-4.jpg";
import galleryEvent5 from "@/assets/gallery-event-5.jpg";
import galleryEvent6 from "@/assets/gallery-event-6.jpg";
import galleryEvent7 from "@/assets/gallery-event-7.jpg";
import galleryEvent8 from "@/assets/gallery-event-8.jpg";
import galleryEvent9 from "@/assets/gallery-event-9.jpg";
import galleryEvent10 from "@/assets/gallery-event-10.jpg";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [allImages, setAllImages] = useState<GalleryImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryCategories = [
    {
      title: "YAC Events & Gatherings",
      images: [
        { src: galleryEvent1, alt: "YAC community event", caption: "YAC Community Event - Members gathered for cultural celebration" },
        { src: galleryEvent2, alt: "YAC gathering", caption: "YAC Gathering - Community members coming together in unity" },
        { src: galleryEvent3, alt: "YAC event", caption: "YAC Event - Celebrating Yoruba heritage and culture" },
        { src: galleryEvent4, alt: "YAC community gathering", caption: "YAC Community Gathering - Members united in cultural celebration" },
        { src: galleryEvent5, alt: "YAC cultural event", caption: "YAC Cultural Event - Embracing Yoruba traditions together" },
        { src: galleryEvent6, alt: "YAC meeting", caption: "YAC Meeting - Leadership and members in fellowship" },
        { src: galleryEvent7, alt: "YAC celebration", caption: "YAC Celebration - Honoring our heritage and community bonds" },
        { src: galleryEvent8, alt: "YAC event photo", caption: "YAC Event - Coming together to celebrate our culture" },
        { src: galleryEvent9, alt: "YAC gathering photo", caption: "YAC Gathering - Unity in cultural pride and tradition" },
        { src: galleryEvent10, alt: "YAC community photo", caption: "YAC Community - Strengthening bonds through shared heritage" },
        { src: yacEvent1, alt: "YAC Think Tank Group annual gathering", caption: "YAC Think Tank Group - Annual gathering featuring leaders and members in traditional attire" },
        { src: yacEvent2, alt: "YAC leadership at official event", caption: "YAC Leadership - Executive members presenting the YAC Solemn Pledge and Mission" },
        { src: galleryNew1, alt: "YAC community event", caption: "YAC Community Event - Members gathered for cultural celebration" },
        { src: galleryNew2, alt: "YAC gathering", caption: "YAC Gathering - Community members coming together in unity" },
        { src: galleryNew3, alt: "YAC event", caption: "YAC Event - Celebrating Yoruba heritage and culture" },
        { src: galleryNew4, alt: "YAC community gathering", caption: "YAC Community Gathering - Members united in cultural celebration" },
        { src: galleryNew5, alt: "YAC cultural event", caption: "YAC Cultural Event - Embracing Yoruba traditions together" },
        { src: galleryNew6, alt: "YAC meeting", caption: "YAC Meeting - Leadership and members in fellowship" },
        { src: galleryNew7, alt: "YAC celebration", caption: "YAC Celebration - Honoring our heritage and community bonds" },
        { src: galleryNew8, alt: "YAC event photo", caption: "YAC Event - Coming together to celebrate our culture" },
        { src: galleryNew9, alt: "YAC gathering photo", caption: "YAC Gathering - Unity in cultural pride and tradition" },
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

  // Flatten all images for navigation
  const getAllImages = () => {
    return galleryCategories.flatMap(category => category.images);
  };

  const openLightbox = (image: GalleryImage) => {
    const images = getAllImages();
    const index = images.findIndex(img => img.src === image.src);
    setAllImages(images);
    setCurrentIndex(index);
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : allImages.length - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(allImages[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex < allImages.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedImage(allImages[newIndex]);
  };

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
                    <AnimatedSection key={imageIndex} animation="fade-up" delay={imageIndex * 50}>
                      <div 
                        className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                        onClick={() => openLightbox(image)}
                      >
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
                        {/* Click indicator */}
                        <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
                            <path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          </svg>
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

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 bg-background/95 backdrop-blur-md border-none">
          <div className="relative w-full h-full flex flex-col">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 bg-background/80 hover:bg-background rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-background/80 hover:bg-background rounded-full p-3 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-background/80 hover:bg-background rounded-full p-3 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>

            {/* Image */}
            <div className="flex-1 flex items-center justify-center p-8">
              {selectedImage && (
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
                />
              )}
            </div>

            {/* Caption */}
            {selectedImage && (
              <div className="p-6 text-center bg-muted/50">
                <p className="text-foreground font-medium">{selectedImage.caption}</p>
                <p className="text-muted-foreground text-sm mt-2">
                  {currentIndex + 1} of {allImages.length}
                </p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

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
