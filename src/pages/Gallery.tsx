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
import galleryNew10 from "@/assets/gallery-new-10.jpg";
import galleryNew11 from "@/assets/gallery-new-11.jpg";
import galleryNew12 from "@/assets/gallery-new-12.jpg";
import galleryNew13 from "@/assets/gallery-new-13.jpg";
import galleryNew14 from "@/assets/gallery-new-14.jpg";
import galleryNew15 from "@/assets/gallery-new-15.jpg";
import galleryNew16 from "@/assets/gallery-new-16.jpg";
import galleryNew17 from "@/assets/gallery-new-17.jpg";
import galleryNew18 from "@/assets/gallery-new-18.jpg";
import galleryNew19 from "@/assets/gallery-new-19.jpg";
import galleryNew20 from "@/assets/gallery-new-20.jpg";
import galleryNew21 from "@/assets/gallery-new-21.jpg";
import galleryNew22 from "@/assets/gallery-new-22.jpg";
import galleryNew23 from "@/assets/gallery-new-23.jpg";
import galleryNew24 from "@/assets/gallery-new-24.jpg";
import galleryNew25 from "@/assets/gallery-new-25.jpg";
import galleryNew26 from "@/assets/gallery-new-26.jpg";
import galleryNew27 from "@/assets/gallery-new-27.jpg";
import galleryNew28 from "@/assets/gallery-new-28.jpg";
import galleryNew29 from "@/assets/gallery-new-29.jpg";
import galleryNew30 from "@/assets/gallery-new-30.jpg";
import galleryNew31 from "@/assets/gallery-new-31.jpg";
import galleryNew32 from "@/assets/gallery-new-32.jpg";
import galleryNew33 from "@/assets/gallery-new-33.jpg";
import galleryNew34 from "@/assets/gallery-new-34.jpg";
import galleryNew35 from "@/assets/gallery-new-35.jpg";
import galleryNew36 from "@/assets/gallery-new-36.jpg";
import galleryNew37 from "@/assets/gallery-new-37.jpg";
import galleryNew38 from "@/assets/gallery-new-38.jpg";
import galleryNew39 from "@/assets/gallery-new-39.jpg";
import galleryNew40 from "@/assets/gallery-new-40.jpg";
import galleryNew41 from "@/assets/gallery-new-41.jpg";
import galleryNew42 from "@/assets/gallery-new-42.jpg";
import galleryNew43 from "@/assets/gallery-new-43.jpg";
import galleryNew44 from "@/assets/gallery-new-44.jpg";
import galleryNew45 from "@/assets/gallery-new-45.jpg";
import galleryNew46 from "@/assets/gallery-new-46.jpg";
import galleryNew47 from "@/assets/gallery-new-47.jpg";
import galleryNew48 from "@/assets/gallery-new-48.jpg";
import galleryNew49 from "@/assets/gallery-new-49.jpg";
import galleryNew50 from "@/assets/gallery-new-50.jpg";
import galleryNew51 from "@/assets/gallery-new-51.jpg";
import galleryNew52 from "@/assets/gallery-new-52.jpg";
import galleryNew53 from "@/assets/gallery-new-53.jpg";
import galleryNew54 from "@/assets/gallery-new-54.jpg";
import galleryNew55 from "@/assets/gallery-new-55.jpg";
import galleryNew56 from "@/assets/gallery-new-56.jpg";
import galleryNew57 from "@/assets/gallery-new-57.jpg";
import galleryNew58 from "@/assets/gallery-new-58.jpg";
import galleryNew59 from "@/assets/gallery-new-59.jpg";
import galleryNew60 from "@/assets/gallery-new-60.jpg";
import galleryNew61 from "@/assets/gallery-new-61.jpg";
import galleryNew62 from "@/assets/gallery-new-62.jpg";
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
        { src: galleryNew10, alt: "YAC community event", caption: "YAC Community Event - Celebrating together in unity" },
        { src: galleryNew11, alt: "YAC gathering", caption: "YAC Gathering - Members united in fellowship" },
        { src: galleryNew12, alt: "YAC event", caption: "YAC Event - Embracing our cultural heritage" },
        { src: galleryNew13, alt: "YAC celebration", caption: "YAC Celebration - Community bonds and traditions" },
        { src: galleryNew14, alt: "YAC meeting", caption: "YAC Meeting - Leadership and community in harmony" },
        { src: galleryNew15, alt: "YAC cultural event", caption: "YAC Cultural Event - Honoring Yoruba traditions" },
        { src: galleryNew16, alt: "YAC community gathering", caption: "YAC Community Gathering - Strength through unity" },
        { src: galleryNew17, alt: "YAC event photo", caption: "YAC Event - Celebrating our shared heritage" },
        { src: galleryNew18, alt: "YAC gathering photo", caption: "YAC Gathering - Cultural pride and community spirit" },
        { src: galleryNew19, alt: "YAC community photo", caption: "YAC Community - Together in cultural celebration" },
        { src: galleryNew20, alt: "YAC event", caption: "YAC Event - Celebrating our Yoruba heritage together" },
        { src: galleryNew21, alt: "YAC gathering", caption: "YAC Gathering - Community unity and fellowship" },
        { src: galleryNew22, alt: "YAC celebration", caption: "YAC Celebration - Honoring traditions and culture" },
        { src: galleryNew23, alt: "YAC Think Tank meeting", caption: "YAC Think Tank - Leadership presenting the mission and pledge" },
        { src: galleryNew24, alt: "YAC community event", caption: "YAC Community Event - Members in cultural attire" },
        { src: galleryNew25, alt: "YAC leadership", caption: "YAC Leadership - Executive members at formal gathering" },
        { src: galleryNew26, alt: "YAC cultural gathering", caption: "YAC Cultural Gathering - Embracing our shared heritage" },
        { src: galleryNew27, alt: "YAC event photo", caption: "YAC Event - Strengthening community bonds" },
        { src: galleryNew28, alt: "YAC gathering", caption: "YAC Gathering - United in cultural celebration" },
        { src: galleryNew29, alt: "YAC event", caption: "YAC Event - Community members in fellowship" },
        { src: galleryNew30, alt: "YAC celebration", caption: "YAC Celebration - Honoring our heritage together" },
        { src: galleryNew31, alt: "YAC community", caption: "YAC Community - Strength through unity and tradition" },
        { src: galleryNew32, alt: "YAC meeting", caption: "YAC Meeting - Leadership and members in harmony" },
        { src: galleryNew33, alt: "YAC cultural event", caption: "YAC Cultural Event - Celebrating Yoruba traditions" },
        { src: galleryNew34, alt: "YAC gathering photo", caption: "YAC Gathering - Cultural pride and fellowship" },
        { src: galleryNew35, alt: "YAC event photo", caption: "YAC Event - Members united in celebration" },
        { src: galleryNew36, alt: "YAC community event", caption: "YAC Community Event - Embracing our shared heritage" },
        { src: galleryNew37, alt: "YAC celebration photo", caption: "YAC Celebration - Together in cultural unity" },
        { src: galleryNew38, alt: "YAC gathering", caption: "YAC Gathering - Community members in celebration" },
        { src: galleryNew39, alt: "YAC event", caption: "YAC Event - United through our heritage" },
        { src: galleryNew40, alt: "YAC celebration", caption: "YAC Celebration - Fellowship and cultural pride" },
        { src: galleryNew41, alt: "YAC community", caption: "YAC Community - Strength in unity" },
        { src: galleryNew42, alt: "YAC meeting", caption: "YAC Meeting - Members gathered in fellowship" },
        { src: galleryNew43, alt: "YAC cultural event", caption: "YAC Cultural Event - Embracing our traditions" },
        { src: galleryNew44, alt: "YAC gathering photo", caption: "YAC Gathering - Community bonds and heritage" },
        { src: galleryNew45, alt: "YAC event photo", caption: "YAC Event - Celebrating together" },
        { src: galleryNew46, alt: "YAC community event", caption: "YAC Community Event - Cultural unity" },
        { src: galleryNew47, alt: "YAC celebration photo", caption: "YAC Celebration - Honoring our shared heritage" },
        { src: galleryNew48, alt: "Royal audience with the Ooni", caption: "Royal Audience - Meeting with the Ooni of Ife" },
        { src: galleryNew49, alt: "Conversation with the Ooni", caption: "Royal Dialogue - Engaging with the Ooni of Ife" },
        { src: galleryNew50, alt: "The Ooni of Ife at the palace", caption: "The Ooni of Ife - At the Royal Palace" },
        { src: galleryNew51, alt: "Discussion with the Ooni", caption: "Royal Exchange - Audience with the Ooni" },
        { src: galleryNew52, alt: "Portrait with the Ooni of Ife", caption: "Royal Portrait - With the Ooni of Ife" },
        { src: galleryNew53, alt: "YAC community event", caption: "YAC Community Event - Members in fellowship" },
        { src: galleryNew54, alt: "YAC gathering", caption: "YAC Gathering - Celebrating together" },
        { src: galleryNew55, alt: "YAC cultural celebration", caption: "YAC Cultural Celebration - Embracing heritage" },
        { src: galleryNew56, alt: "YAC event photo", caption: "YAC Event - Unity in cultural pride" },
        { src: galleryNew57, alt: "YAC community gathering", caption: "YAC Community - Strengthening bonds" },
        { src: galleryNew58, alt: "YAC meeting", caption: "YAC Meeting - Leadership and fellowship" },
        { src: galleryNew59, alt: "YAC celebration", caption: "YAC Celebration - Honoring our heritage" },
        { src: galleryNew60, alt: "YAC event", caption: "YAC Event - Coming together in unity" },
        { src: galleryNew61, alt: "YAC community photo", caption: "YAC Community - Shared cultural pride" },
        { src: galleryNew62, alt: "YAC gathering photo", caption: "YAC Gathering - Tradition and togetherness" },
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
