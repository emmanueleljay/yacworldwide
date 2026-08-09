import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { MapPin, Crown, Landmark, Palette, Sparkles } from "lucide-react";

// Import artifact images
import ifeBronzeHead from "@/assets/ife-bronze-head.jpg";
import opaOranmiyan from "@/assets/opa-oranmiyan.jpg";
import ifeTerracotta from "@/assets/ife-terracotta.jpg";
import oduduwaShrine from "@/assets/oduduwa-shrine.jpg";

const AboutIleIfe = () => {
  const { t } = useTranslation();

  const yorubaMonths = [
    { yoruba: "Ṣẹ́rẹ́", english: "January" },
    { yoruba: "Èrèlè", english: "February" },
    { yoruba: "Ẹrẹ̀nà", english: "March" },
    { yoruba: "Igbe", english: "April" },
    { yoruba: "Ẹ̀bíbì", english: "May" },
    { yoruba: "Òkúdù", english: "June" },
    { yoruba: "Agẹmọ", english: "July" },
    { yoruba: "Ògún", english: "August" },
    { yoruba: "Ọwéwè", english: "September" },
    { yoruba: "Ọ̀wàrà", english: "October" },
    { yoruba: "Belú", english: "November" },
    { yoruba: "Ọ̀pẹ", english: "December" },
  ];

  const artifacts = [
    {
      icon: Crown,
      title: "The Bronze Head of an Ooni (The Ife Head)",
      description:
        "The bronze and copper-alloy heads discovered in Ile-Ife are perhaps the most famous evidence of the city's ancient sophistication. These sculptures, dating back to the 4th–15th centuries, exhibit a level of naturalism that shocked Western archaeologists when they were first \"discovered\" by Leo Frobenius. They represent the divine authority of the Ooni (the King) and serve as a physical link to the ancestral founders of the race.",
      image: ifeBronzeHead,
    },
    {
      icon: Landmark,
      title: "The Opa Oranmiyan (Staff of Oranmiyan)",
      description:
        "This massive granite monolith stands over 5 meters tall in the heart of Ile-Ife. According to tradition, it was the walking stick or staff of Oranmiyan, the youngest son of Oduduwa (the progenitor of the Yoruba). It is a symbol of the military prowess and the foundational lineage of the Yoruba kingdoms, as Oranmiyan went on to found the Oyo Empire and the Benin Dynasty.",
      image: opaOranmiyan,
    },
    {
      icon: Palette,
      title: "Terracotta Sculptures",
      description:
        "Before the mastery of bronze casting, Ife artists were renowned for their terracotta works. These pieces often depict ritual scenes, deities, and everyday citizens with intricate facial scarification (Pele). These artifacts suggest a deeply organized social and religious structure that centers on Ife as a sacred hub.",
      image: ifeTerracotta,
    },
    {
      icon: Sparkles,
      title: "The Oranfe and Oduduwa Shrines",
      description:
        "Ile-Ife is home to 401 deities (Orishas), and their shrines are considered the physical anchors of Yoruba spirituality. The belief is that at the dawn of time, Olodumare (the Supreme Being) sent Oduduwa down a chain to create the earth out of the primordial waters at Ife. The existence of these ancient groves and shrines reinforces the city's status as the spiritual \"Source.\"",
      image: oduduwaShrine,
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium tracking-wide uppercase text-sm">
                {t("ileIfe.badge", "The Sacred City")}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-center mb-6">
              {t("ileIfe.title", "Origin of")}
              <span className="text-primary block mt-2">{t("ileIfe.highlight", "Yoruba Race")}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto">
              {t(
                "ileIfe.subtitle",
                "In Yoruba cosmology and historical tradition, Ile-Ife is revered as the \"Enu Owa\" (the source) and the \"Orirun\" (the birthplace) of both the Yoruba people and humanity at large."
              )}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10">
                <p className="text-lg md:text-xl text-foreground leading-relaxed text-center">
                  {t(
                    "ileIfe.intro",
                    "This belief is supported by a rich oral tradition and stunning archaeological evidence that showcases a highly advanced civilization."
                  )}
                </p>
                <p className="text-lg md:text-xl text-primary font-semibold mt-6 text-center">
                  {t(
                    "ileIfe.introHighlight",
                    "Here are some of the most distinctive artworks and landmarks that support these historical and spiritual claims:"
                  )}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Artifacts Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <span className="text-primary font-medium tracking-wide uppercase text-sm">
                {t("ileIfe.artifactsLabel", "Archaeological Evidence")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
                {t("ileIfe.artifactsTitle", "Sacred Artworks & Landmarks")}
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid gap-12 max-w-6xl mx-auto">
            {artifacts.map((artifact, index) => (
              <AnimatedSection key={artifact.title} animation="fade-up" delay={index * 100}>
                <div className="bg-background rounded-2xl overflow-hidden shadow-lg border border-border hover:border-primary/30 transition-colors">
                  <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                    {/* Image */}
                    <div className={`relative h-64 md:h-auto md:min-h-[320px] ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                      <img
                        src={artifact.image}
                        alt={artifact.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:hidden" />
                    </div>
                    {/* Content */}
                    <div className={`p-8 md:p-10 flex flex-col justify-center ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <artifact.icon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-primary font-bold text-lg">{index + 1}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                        {artifact.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {artifact.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Yoruba Months Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <span className="text-primary font-medium tracking-wide uppercase text-sm">
                {t("ileIfe.monthsLabel", "Language & Calendar")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
                {t("ileIfe.monthsTitle", "Names of Months in Yorùbá")}
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                {t(
                  "ileIfe.monthsSubtitle",
                  "The twelve months of the year as they are known in the Yorùbá language."
                )}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-border shadow-lg">
              <div className="grid grid-cols-[3rem_1fr_1fr] bg-primary text-primary-foreground font-semibold text-sm md:text-base">
                <div className="px-3 py-3 text-center">S/N</div>
                <div className="px-4 py-3">Yorùbá</div>
                <div className="px-4 py-3">English</div>
              </div>
              {yorubaMonths.map((month, index) => (
                <div
                  key={month.english}
                  className={`grid grid-cols-[3rem_1fr_1fr] items-center border-t border-border ${
                    index % 2 === 0 ? "bg-background" : "bg-secondary/30"
                  }`}
                >
                  <div className="px-3 py-3 text-center font-bold text-primary">{index + 1}</div>
                  <div className="px-4 py-3 font-bold text-lg text-foreground">{month.yoruba}</div>
                  <div className="px-4 py-3 text-muted-foreground">{month.english}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t("ileIfe.ctaTitle", "Discover More About Our Heritage")}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t(
                  "ileIfe.ctaText",
                  "Ile-Ife remains the spiritual and cultural heart of the Yoruba people. Its legacy continues to inspire and unite Yoruba descendants across the globe."
                )}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutIleIfe;
