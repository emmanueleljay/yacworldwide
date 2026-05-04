import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { AnimatedSection, AnimatedList } from "@/hooks/useScrollAnimation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import drGodwin from "@/assets/dr-godwin-omolola.jpg";
import drAlbert from "@/assets/dr-albert-ayeni.jpg";
import drAkin from "@/assets/dr-akin-awofolaju.jpg";
import msAbby from "@/assets/ms-abby.jpg";
import drBola from "@/assets/dr-bola-omotosho.jpg";
import drAdeniyi from "@/assets/dr-adeniyi-ogunkoya.jpg";
import princeDepo from "@/assets/leadership-depo-akande.jpeg";
import foundingMember1 from "@/assets/founding-member-1.jpeg";
import adeyemiOmoniyi from "@/assets/adeyemi-omoniyi.png";
import kabiyesiOlowu from "@/assets/kabiyesi-olowu.png";
import leadershipFeature from "@/assets/leadership-feature.jpg";

interface Leader {
  name: string;
  role: string;
  image: string;
  bio: string;
  tagline?: string;
}

const LeaderCard = ({ person, onViewBio }: { person: Leader; onViewBio: () => void }) => (
  <div className="group text-center">
    <div className="relative overflow-hidden rounded-2xl mb-4">
      <img
        src={person.image}
        alt={person.name}
        className="w-full aspect-square object-cover object-top group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
      {person.name}
    </h3>
    <p className="text-primary font-bold mb-3">{person.role}</p>
    <Button variant="outline" size="sm" onClick={onViewBio}>
      View Bio
    </Button>
  </div>
);

const Leadership = () => {
  const { t } = useTranslation();
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  const foundingLeaders: Leader[] = [
    {
      name: "Dr. Akin Mo' Awofolaju",
      role: "Founding President",
      tagline: "Neuroeconomist | Fortune 100 Executive | Global Business Strategy Consultant",
      image: drAkin,
      bio: `Academic pursuits include an MBA and PhD scholarships in Neuroeconomics and Applied Development Economics from Moscow University and Plekhanov Business School in Moscow. He further had his doctoral education in Business Strategy & Corporate Diplomacy at the prestigious Cornell University, S.C. Johnson Graduate School of Management in Ithaca, New York. He has also completed advanced programs in Executive Leadership Development, Business Strategy, and Strategic Thinking/Planning at the Yale and Harvard University Business Schools.

His expertise includes:

Emerging private equity, future capital, leveraged M&A buyouts, venture capital, recapitalization, and private equity funds.

Strategic capital development in Fintech.

Revolutionizing process improvement with innovative tactical evaluations.

Specializing in mergers and acquisitions, managing numerous organizations in senior executive capacities.

Awofolaju has served in various C-level and Director capacities with Fortune 500 companies such as Verizon Wireless, Apple Inc., Altice, and Comcast. While at Verizon Wireless, the largest U.S. wireless communication company, he was a leading Executive Board Director, managing over US$2.5 billion in investments (Tri-State regions) and overseeing more than 3,000 employees for over 10 years.`,
    },
    {
      name: "Dr. Albert Ayeni",
      role: "Founding General Secretary",
      image: drAlbert,
      bio: "Dr. Albert Ayeni was born in Lagos and raised in Iffe-Ijumu, Kogi State. He earned his Ph.D. from Cornell University and served on the faculty at the University of Ibadan for 17 years before joining Rutgers University in 1995. Currently serving as Ethnic Crops Research Specialist and Leader of Entrepreneurship Ag Program at Rutgers' School of Environmental and Biological Sciences. He is a consultant to APLU and has led planning committees for NIDO Americas World Conference and multiple education summits.",
    },
  ];

  const executives: Leader[] = [
    {
      name: "Dr. Godwin Babs Oloyede Omolola",
      role: "Executive Founding Member",
      image: drGodwin,
      bio: "Dr. Godwin Babs Oloyede Omolola was born in Lagos to the Sokoti Family from Igbotako, Ondo State. He earned his D.Sc. in Computer Engineering and Digital Security from Colorado Technical University. With over 25 years of experience as a Cybersecurity Solution Architect and Risk Management Practitioner, he has worked with Fortune 500 companies including Chase Manhattan Bank, IBM, AT&T, and various government agencies. He is a member of ISACA, ISC2, FBI InfraGard, and contributes to emerging technologies under Cisco, IEEE, MITRE, and CSA.",
    },
    {
      name: "Ms. Abby Agboola Arogundade",
      role: "Executive Founding Member",
      image: msAbby,
      bio: "Ms Abby is an RN & a Midwife for over 45 years. Her nursing education started at Lagos University Teaching Hospital, Lagos. Her BSN & MSN was completed at Wagner College on Staten Island, and she is currently pursuing a Ph.D in International Business at California Intercontinental University, expected to finish in February 2027. She is the CEO of Fadmo Health and Homecare Agency, Fadmo Logistics USA and Nigeria. She is married with three children and three grandchildren.",
    },
    {
      name: "Dr. Bola Omotosho",
      role: "Member",
      image: drBola,
      bio: "Dr Bola Omotosho graduated with honors, earning both a Bachelor of Science and a Doctor of Medicine from Obafemi Awolowo University in Nigeria, formerly known as the University of Ife. His journey continued with further training in Anesthesiology, leading to a remarkable medical career with the Nigerian Navy. In the late 1990s, he took a bold step to relocate to the Bronx, USA, where he pursued his passion for medicine with extensive training in Hematology/Oncology and Infectious Disease as a clinical researcher. With over four decades of experience, his career as a physician reflects a rich tapestry of service in military hospitals, major metropolitan hospitals, and private teaching hospitals. In 2024, he took on the role of Senior Advisor for Community Partnerships with the Department of Health and Mental Hygiene in New York City, continuing to inspire and make a difference in the community.",
    },
    {
      name: "Prince Depo Akande",
      role: "Founding Member",
      image: princeDepo,
      bio: `Prince Depo Akande, Msc Banking and Finance) FCIB (Fellow, Chartered Institute of Bankers of Nigeria) is a Finance Executive with over 30 years experience of Corporate and Investment Banking. At the early stage in the US, he worked with Merrill Lynch Investment Managers as an Assistant Vice President, he and others were responsible for managing portfolio of over 600 billions in assets, he left Merrill Lynch in 2003 to start his own business and presently the President and CEO of Pro Settlement Solutions, LLC, a title and settlement company based in Edison in New Jersey. He also sits on the board of various companies where he contributes to the growth of the companies.

Prince Akande is a community and a political enthusiast leader in Franklin Township. He is happily married with children.`,
    },
    {
      name: "Adeniyi Ogunkoya, M.D.",
      role: "Founding Member",
      image: drAdeniyi,
      bio: `Adeniyi Ogunkoya, M.D., has practiced in the medical profession for over 3 decades, establishing as a front runner in the field of internal medicine, in the United States, and possessing cognate experiences and expertise in various aspects of medical profession where he excelled in the various aspects of medical management practices, including management of top-rated and world class hospitals, Teaching hospitals, health care medical facilities, in the field of primary care development and management at several levels. Dr. Ogunkoya has held various teaching and training experiences in various capacities at the University teaching hospitals in the state of New Jersey, United States. Dr. Ogunkoya has held several administrative and managerial positions, including head and leadership roles, at various hospitals, healthcare facilities, and primary healthcare centers over the past three decades. Dr. Ogunkoya is a medical director, medical consultant, professional medical instructor, medical specialist, and medical project developer. Dr. Ogunkoya is a graduate of the State University of New York (SUNY) Downstate medical school in Brooklyn, New York, and also Residency and Fellowship program at the University of Medicine and Dentistry (UMDNJ), New Jersey Medical School in combined internal medicine and pediatrics, followed by a fellowship in allergy and immunology from 1981 to 1988.

Dr Adeniyi Ogunkoya was an executive and founding member of NIDO (Nigerians in the Diaspora Organization) at the National level and also the inaugural and founding member of NIDO, New Jersey.

In Nigeria, Dr. Ogunkoya has conducted several Medical missions, notable ones in Kaduna and another in Onitsha, hosted by the OBI of ONITSHA. Dr. Ogunkoya was a member of the presidential committee to set up six world-class hospitals in the six geopolitical zones in Nigeria. He was also an Executive Director on the board of Transcorp in Nigeria. Now the Visioneer of a 200-bed world-class hospital just outside of Lagos on a 100-acre land.

Dr. Ogunkoya is passionate about his cultural background and wishes to continue to promote the YORUBA culture as a member of the Yoruba Action Council (YAC).`,
    },
    {
      name: "Name Withheld",
      role: "Founding Member",
      image: foundingMember1,
      bio: `Academic Qualifications:
- BSc, Civil Engineering
- MBA, Finance
- Honorary Doctorate in Theology

Career Highlights:
- Chief Engineer, Mobil Oil East
- Engineering Manager, Mobil Oil Nigeria
- Constructed and completed the Aviation Depot, Port Harcourt
- Took part in the Mobil House construction, Lagos
- Built the Obanikoro Filling Station at a record six-month completion — one of the fastest in the lower part of the world
- Built a Plastic Plant and a Lube Oil Plant, among others
- Constructed over 40 retail outlets across Nigeria
- Worked for the NYC Department of Buildings in Manhattan for 20 years

Now retired and resting peacefully.`,
    },
    {
      name: "Adeyemi Omoniyi",
      role: "Member",
      image: adeyemiOmoniyi,
      bio: `Adeyemi Omoniyi has a stint in Healthcare IT with 6+ years of experience helping hospitals optimize and upgrade Healthcare software. With a deep passion for business, he owns a downstream oil and gas venture in Nigeria.`,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
      {/* Header with Feature Image */}
      <header className="relative">
        <div className="absolute inset-0">
          <img
            src={leadershipFeature}
            alt="YAC Leadership gathering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative py-20 lg:py-32">
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
                {t("leadership.badge")}
              </span>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mt-4 mb-6">
                {t("leadership.title")}
              </h1>
              <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
                {t("leadership.subtitle")}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </header>

      {/* Executive Leadership */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              {t("leadership.executiveLabel")}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4">
              {t("leadership.executiveTitle")}
            </h2>
          </AnimatedSection>

          {/* Patron */}
          <AnimatedSection className="flex justify-center mb-16">
            <div className="group max-w-md text-center">
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img
                  src={kabiyesiOlowu}
                  alt="Kabiyesi Olowu of Owu Kingdom"
                  className="w-full aspect-square object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-1">
                Kabiyesi Olowu of Owu Kingdom
              </h3>
              <p className="text-primary font-bold text-lg">Our Patron</p>
            </div>
          </AnimatedSection>

          {/* All Leaders */}
          <AnimatedList
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
            staggerDelay={200}
          >
            {[...foundingLeaders, ...executives].map((person) => (
              <LeaderCard
                key={person.name}
                person={person}
                onViewBio={() => setSelectedLeader(person)}
              />
            ))}
          </AnimatedList>
        </div>
      </section>

      {/* Bio Dialog */}
      <Dialog open={!!selectedLeader} onOpenChange={(open) => !open && setSelectedLeader(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedLeader && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-2">
                  <img
                    src={selectedLeader.image}
                    alt={selectedLeader.name}
                    className="w-16 h-16 rounded-full object-cover object-top"
                  />
                  <div>
                    <DialogTitle className="text-xl font-serif">{selectedLeader.name}</DialogTitle>
                    <p className="text-primary font-bold text-sm">{selectedLeader.role}</p>
                  </div>
                </div>
                {selectedLeader.tagline && (
                  <p className="text-sm text-muted-foreground italic">{selectedLeader.tagline}</p>
                )}
              </DialogHeader>
              <DialogDescription className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm">
                {selectedLeader.bio}
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              {t("leadership.ctaTitle")}
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              {t("leadership.ctaText")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/membership">{t("common.becomeMember")}</Link>
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

export default Leadership;
