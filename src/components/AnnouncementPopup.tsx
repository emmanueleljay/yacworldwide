import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";
import eventFlyerMain from "@/assets/event-flyer-main.jpeg";
import eventFlyerOgunyinka from "@/assets/event-flyer-ogunyinka.jpeg";
import eventFlyerAyeni from "@/assets/event-flyer-ayeni.jpeg";

interface Slide {
  image: string;
  caption: string;
}

const slides: Slide[] = [
  {
    image: eventFlyerMain,
    caption:
      "11th Annual Nigerian Independence Day Celebration — Dinner & Awards Night. Theme: New Beginning Leaders Summit. Saturday, October 31, 2026 | Holiday Inn, 750 West Edge Road, Linden, NJ | 4PM – 9PM. Powered by Lord and Nikes.",
  },
  {
    image: eventFlyerOgunyinka,
    caption:
      "Hon. (Chief) Oluwaseyi Ogunyinka, Pacesetter, specially invites you to the 11th Annual Nigerian Independence Day Celebration — Saturday, October 31, 2026, Linden, NJ.",
  },
  {
    image: eventFlyerAyeni,
    caption:
      "Hon. Prof. Albert Ayeni, The Real Dr. Pepper, Gate Keeper, specially invites you to the 11th Annual Nigerian Independence Day Celebration — Saturday, October 31, 2026, Linden, NJ.",
  },
];

const STORAGE_KEY = "yac-announcement-popup-dismissed";

const AnnouncementPopup = () => {
  const [open, setOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Show once per browser session
    if (typeof window !== "undefined" && window.sessionStorage.getItem(STORAGE_KEY)) {
      return;
    }
    const timer = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = useCallback(() => {
    setOpen(false);
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // sessionStorage unavailable — popup simply shows again next visit
    }
  }, []);

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    if (!open) return;
    const timer = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % slides.length),
      6000
    );
    return () => clearInterval(timer);
  }, [open]);

  const goToPrevious = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && dismiss()}>
      <DialogContent className="max-w-lg md:max-w-xl w-[92vw] p-0 bg-background border-border overflow-hidden rounded-2xl">
        <div className="relative">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 bg-primary text-primary-foreground">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4" />
              <span className="font-serif font-semibold tracking-wide text-sm md:text-base">
                Upcoming Event
              </span>
            </div>
            <button
              onClick={dismiss}
              aria-label="Close announcement"
              className="p-1 rounded-full hover:bg-primary-foreground/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Flyer */}
          <div className="relative bg-muted">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].caption}
              className="w-full max-h-[62vh] object-contain"
            />
            {/* Navigation arrows */}
            <button
              onClick={goToPrevious}
              aria-label="Previous flyer"
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={goToNext}
              aria-label="Next flyer"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
            {/* Slide indicators */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to flyer ${index + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-6 h-2 bg-primary"
                      : "w-2 h-2 bg-foreground/30 hover:bg-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Caption + CTA */}
          <div className="px-5 py-4 space-y-3">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {slides[currentSlide].caption}
            </p>
            <div className="flex gap-3">
              <Link to="/gallery" onClick={dismiss} className="flex-1">
                <Button variant="hero" size="default" className="w-full">
                  View in Gallery
                </Button>
              </Link>
              <Button variant="outline" size="default" onClick={dismiss}>
                Maybe Later
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AnnouncementPopup;
