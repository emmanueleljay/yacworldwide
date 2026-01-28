import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Target, Users, GraduationCap, Crown, Award, Star } from "lucide-react";
import { AnimatedSection, AnimatedList } from "@/hooks/useScrollAnimation";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import membershipImage from "@/assets/membership-banner.jpg";

const Membership = () => {
  const { t } = useTranslation();
  const [dateOfBirth, setDateOfBirth] = useState<Date>();
  const [honorDeclaration, setHonorDeclaration] = useState(false);
  const objectives = [
    t("membership.objectives.0", "Advance the progress of Yoruba descendants globally."),
    t("membership.objectives.1", "Use resources to support the empowerment of Yorubas globally."),
    t("membership.objectives.2", "Promote the active engagement and participation of the youth (Age 18-35-year bracket) in YAC activities."),
    t("membership.objectives.3", "Serve as an advisory organization to other Pan-Yoruba organizations."),
    t("membership.objectives.4", "Promote and support democracy at all levels."),
    t("membership.objectives.5", "Encourage and deliberate on issues paramount to the Yoruba people."),
    t("membership.objectives.6", "Foster the economic empowerment of Yorubas globally."),
    t("membership.objectives.7", "Work with other organizations across the globe in general and Nigeria, in particular, to promote peace, stability, justice, and unity while working fervently for the promotion of the Yoruba interest."),
    t("membership.objectives.8", "Engage in activities worldwide, that promote and ensure social justice, equity, business opportunities, and interests of the Yoruba."),
    t("membership.objectives.9", "Work diligently to bridge the information gap between the Yoruba and the world."),
    t("membership.objectives.10", "Ensure the advancement of Yoruba traditional institutions."),
    t("membership.objectives.11", "Promote the advancement of Yoruba as a giant in politics, economics, and social initiatives."),
    t("membership.objectives.12", "Provide awareness about our civic rights as Yoruba citizens."),
    t("membership.objectives.13", "Honor and respect other peoples and cultures around the world as God's creation."),
    t("membership.objectives.14", "Facilitate and foster Yoruba unity, strategic growth, and political visibility."),
  ];

  // Membership categories content is now displayed as detailed text sections

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
      {/* Header */}
      <header className="bg-hero-gradient py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("common.backToHome")}
          </Link>
          <AnimatedSection className="max-w-3xl">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              {t("membership.badge")}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mt-4 mb-6">
              {t("membership.title")}
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
              {t("membership.subtitle")}
            </p>
          </AnimatedSection>
        </div>
      </header>

      {/* Image & Intro Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection animation="scale-in" className="relative">
              <div className="absolute -inset-4 bg-gold-gradient rounded-2xl opacity-20 blur-xl"></div>
              <img 
                src={membershipImage} 
                alt="YAC members celebrating in traditional Yoruba attire" 
                className="relative rounded-2xl shadow-elevated w-full h-auto object-cover"
              />
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                {t("membership.introLabel")}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                {t("membership.introTitle")}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                {t("membership.introText1")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("membership.introText2")}
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              {t("membership.objectivesLabel")}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4">
              {t("membership.objectivesTitle")}
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              {t("membership.objectivesSubtitle")}
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedList className="grid gap-4" staggerDelay={80}>
              {objectives.map((objective, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-card rounded-xl p-5 shadow-warm hover:shadow-elevated transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-sm">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="text-foreground leading-relaxed pt-2">
                    {objective}
                  </p>
                </div>
              ))}
            </AnimatedList>
          </div>
        </div>
      </section>

      {/* Membership Categories */}
      <section className="py-20 lg:py-28 bg-section-gradient">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-warm">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
                The membership of YAC falls into the following categories:
              </h2>
              
              <div className="space-y-8 text-foreground">
                {/* Category 1 */}
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-serif text-xl font-bold text-primary mb-3 flex items-center gap-3">
                    <Crown className="w-6 h-6" />
                    Category 1 – Foundation Member
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Membership obtained at the inception of YAC. The registration fee for the Foundation Member is <strong className="text-foreground">US$500 (Five hundred US dollars)</strong> due before the inauguration of the substantive Executive of YAC in January 2019.
                  </p>
                </div>

                {/* Category 2 */}
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-serif text-xl font-bold text-primary mb-3 flex items-center gap-3">
                    <Users className="w-6 h-6" />
                    Category 2 – Accredited Non-Youth Adult Member (ANYAM)
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    YAC defines ANYAM as an adult above the age of 35, gainfully employed, and earning an income more than the NJ minimum wage. The registration fee for ANYAM is <strong className="text-foreground">US$100 (One hundred US dollars)</strong>.
                  </p>
                </div>

                {/* Category 3 */}
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-serif text-xl font-bold text-primary mb-3 flex items-center gap-3">
                    <Star className="w-6 h-6" />
                    Category 3 – Accredited Youth Member (AYM)
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    YAC's definition of a youth is an adult male or female in the 18 – 35 years age bracket. In this category three sub-categories are recognized:
                  </p>
                  <ul className="space-y-4 ml-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">Gainfully employed and earning an income higher than the NJ minimum wage ($14.20-18.92/hr.).</strong> The registration fee for this subcategory of AYM is <strong className="text-foreground">US$75 (Seventy-Five US dollars)</strong>.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">Employed and earning the NJ minimum wage or less.</strong> The registration fee for this subcategory of AYM is <strong className="text-foreground">US$50 (Fifty US dollars)</strong>.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div className="text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">Student membership:</strong> YAC is highly interested in student membership as leaders of tomorrow. In addition to the registration fee, student members are called to serve in capacities that promote YAC's mission in its totality. The student members will benefit from YAC through mentoring services provided by the foundation and ANYAM members. The registration fee for the Graduate student is <strong className="text-foreground">US$30 (Thirty US dollars)</strong> and Undergraduate student <strong className="text-foreground">US$20 (Twenty US dollars)</strong>.
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Category 4 */}
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-serif text-xl font-bold text-primary mb-3 flex items-center gap-3">
                    <Award className="w-6 h-6" />
                    Category 4 – Honorary Member
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Through nomination and ratification by the YAC membership, highly distinguished Yoruba leaders may be accepted to the membership of YAC. Members in this category are admitted free, but may be approached for financial and moral support, and/or advisory role and may make other non-financial contributions to the welfare of YAC.
                  </p>
                </div>

                {/* Additional Notes */}
                <div className="bg-muted/30 rounded-xl p-6 mt-8 border border-border">
                  <h4 className="font-serif text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Important Membership Information
                  </h4>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Membership of YAC from categories 2 and 3 above may be obtained only through referral by a minimum of two foundation members affirming the individual as an honorable Yoruba descendant by birth or marriage.
                    </p>
                    <p>
                      The YAC registration fee is a one-time payment required of all members except the honorary members. Annual fees and other financial obligations may be levied to all categories of the YAC membership as may be determined from time to time by the YAC executive and ratified by the YAC membership.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                {t("membership.formLabel")}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4">
                {t("membership.formTitle")}
              </h2>
              <p className="text-muted-foreground text-lg mt-4">
                {t("membership.formSubtitle")}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <form className="bg-card rounded-2xl p-8 shadow-warm space-y-8">
                {/* Applicant's Information */}
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-6 pb-2 border-b border-border">
                    Applicant's Information
                  </h3>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="First Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Date of Birth
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal px-4 py-3 h-auto",
                              !dateOfBirth && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {dateOfBirth ? format(dateOfBirth, "PPP") : <span>Select date of birth</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-background border border-border z-50" align="start">
                          <Calendar
                            mode="single"
                            selected={dateOfBirth}
                            onSelect={setDateOfBirth}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                            className={cn("p-3 pointer-events-auto")}
                            captionLayout="dropdown-buttons"
                            fromYear={1920}
                            toYear={new Date().getFullYear()}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Occupation
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="Occupation"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Affiliation
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="Affiliation"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Contact Address
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Contact Address"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Membership Category
                      </label>
                      <select className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                        <option value="">Select a category</option>
                        <option value="foundation">Category 1 – Foundation Member - $500</option>
                        <option value="anyam">Category 2 – ANYAM (Adult 35+) - $100</option>
                        <option value="aym-above-min">Category 3 – AYM (Above NJ Min Wage) - $75</option>
                        <option value="aym-min">Category 3 – AYM (NJ Min Wage or Less) - $50</option>
                        <option value="student-grad">Category 3 – AYM Student (Graduate) - $30</option>
                        <option value="student-undergrad">Category 3 – AYM Student (Undergraduate) - $20</option>
                        <option value="honorary">Category 4 – Honorary Member (By Nomination)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Introducer's Information */}
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-6 pb-2 border-b border-border">
                    Introducer's Information
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Introducer's Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Supporter's Information */}
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-6 pb-2 border-b border-border">
                    Applicant's Supporter from YAC Membership
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Supporter's Name (from YAC)
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Honor Declaration */}
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-6 pb-2 border-b border-border">
                    Applicant's Honor Declaration
                  </h3>
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="honor-declaration"
                      checked={honorDeclaration}
                      onCheckedChange={(checked) => setHonorDeclaration(checked as boolean)}
                      className="mt-1"
                    />
                    <label
                      htmlFor="honor-declaration"
                      className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                    >
                      I hereby declare that I am an honorable Yoruba descendant (by birth or marriage) of good character with no criminal records in the Diaspora and/or the Homeland.
                    </label>
                  </div>
                </div>

                <Button variant="hero" size="xl" className="w-full">
                  {t("membership.submit")}
                </Button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              {t("membership.contactLabel")}
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              {t("membership.contactText")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">{t("common.contactUs")}</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/">{t("common.returnHome")}</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
};

export default Membership;
