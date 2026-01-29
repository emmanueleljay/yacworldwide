import { useTranslation } from "react-i18next";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const Anthem = () => {
  const { t } = useTranslation();

  const lyrics = `ISE WA FUN'LE WA
FUN ILE IBI WA
KA GBEGA (3x)
F'AYE RII

IGBAGBO WA NIPE
B'ATI BERU
LA B'OMO
KA S'ISE (3x)
KA J'OLA

ISOKAN
AT'OMINIRA
NI K'EJE
K'AMA LEPA
ITESIWAJU
F'OPO IRE
AT'OUN TO DARA

OMO OODUA DIDE
BOSI IPO ETO RE
IWO NI IMOLE
OGO ADULAWO`;

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Oduduwa National Anthem
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Video Section */}
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/oGd9LmfLnck"
                title="Oduduwa National Anthem"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </AnimatedSection>

          {/* Lyrics Section */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="bg-card rounded-xl p-6 md:p-8 shadow-lg border border-border">
              <h3 className="text-xl font-semibold text-primary mb-6 text-center">
                Lyrics
              </h3>
              <pre className="text-foreground/90 text-center whitespace-pre-wrap font-sans leading-relaxed text-sm md:text-base">
                {lyrics}
              </pre>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Anthem;
