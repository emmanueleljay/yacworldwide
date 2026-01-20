import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HelpCircle, Mail, Users, Heart } from "lucide-react";

const FAQ = () => {
  const { t } = useTranslation();

  const faqCategories = [
    {
      id: "general",
      title: t("faq.categories.general.title", "General Questions"),
      icon: HelpCircle,
      questions: [
        {
          question: t("faq.categories.general.q1.question", "What is the Yoruba Action Council (YAC)?"),
          answer: t("faq.categories.general.q1.answer", "The Yoruba Action Council (YAC) is a 501(c)(3) non-profit organization incorporated in New Jersey, USA on May 29th, 2018. We are dedicated to advancing the progress of Yoruba descendants globally, preserving cultural traditions, and deploying the professionalism of our members for global Yoruba development."),
        },
        {
          question: t("faq.categories.general.q2.question", "Where is YAC located?"),
          answer: t("faq.categories.general.q2.answer", "YAC is headquartered in New Jersey, United States. Our mailing address is P.O. Box 3073, East Orange, NJ 07019. However, we operate globally and have members across multiple continents."),
        },
        {
          question: t("faq.categories.general.q3.question", "Is YAC a tax-exempt organization?"),
          answer: t("faq.categories.general.q3.answer", "Yes, YAC is a registered 501(c)(3) tax-exempt organization. All donations made to YAC are tax-deductible to the fullest extent allowed by law. Donors will receive a tax receipt for their records."),
        },
        {
          question: t("faq.categories.general.q4.question", "How can I contact YAC?"),
          answer: t("faq.categories.general.q4.answer", "You can reach us by email at info@yacworldwide.org, by phone at +1 (862) 250-1791, or through our contact form on the Contact Us page. Our office hours are Monday through Friday, 9:00 AM to 5:00 PM EST."),
        },
      ],
    },
    {
      id: "membership",
      title: t("faq.categories.membership.title", "Membership"),
      icon: Users,
      questions: [
        {
          question: t("faq.categories.membership.q1.question", "Who can become a member of YAC?"),
          answer: t("faq.categories.membership.q1.answer", "Membership is open to all Yoruba descendants by birth or marriage who share our vision of advancing the Yoruba nation. We welcome members from all professions and backgrounds who are committed to our mission."),
        },
        {
          question: t("faq.categories.membership.q2.question", "What are the membership categories?"),
          answer: t("faq.categories.membership.q2.answer", "YAC offers several membership categories: Foundation Members, ANYAM (Associate National Yoruba Assembly Members), AYM Senior (Aged 50+), AYM Regular (Under 50), Student Senior (18-25), Student Junior (Under 18), and Honorary Members. Each category has different requirements and benefits."),
        },
        {
          question: t("faq.categories.membership.q3.question", "Is there a membership fee?"),
          answer: t("faq.categories.membership.q3.answer", "Yes, there is a one-time registration fee required for all members except honorary members. Annual fees and other financial obligations may be determined by the YAC executive and ratified by the membership."),
        },
        {
          question: t("faq.categories.membership.q4.question", "How do I apply for membership?"),
          answer: t("faq.categories.membership.q4.answer", "You can apply for membership by visiting our Membership page and filling out the registration form. For ANYAM and AYM categories, you will need a referral from at least two foundation members who can affirm your Yoruba heritage."),
        },
      ],
    },
    {
      id: "donations",
      title: t("faq.categories.donations.title", "Donations & Support"),
      icon: Heart,
      questions: [
        {
          question: t("faq.categories.donations.q1.question", "How can I donate to YAC?"),
          answer: t("faq.categories.donations.q1.answer", "You can donate through our website's Donate page. We accept various payment methods. You can choose from preset donation amounts or enter a custom amount that works for you."),
        },
        {
          question: t("faq.categories.donations.q2.question", "Where does my donation go?"),
          answer: t("faq.categories.donations.q2.answer", "Your donations support our four main project areas: Educational Sponsorship (scholarships and school support), Water Borehole Projects (clean water access), Cultural Promotion (preserving Yoruba heritage), and Tourism Promotion (showcasing Yorubaland)."),
        },
        {
          question: t("faq.categories.donations.q3.question", "Can I donate to a specific project?"),
          answer: t("faq.categories.donations.q3.answer", "Yes, you can designate your donation to a specific project. When making your donation, you can indicate which initiative you'd like to support, whether it's education, water, culture, or tourism."),
        },
        {
          question: t("faq.categories.donations.q4.question", "Are there other ways to support YAC besides donating?"),
          answer: t("faq.categories.donations.q4.answer", "Absolutely! You can support YAC by volunteering your time and skills, becoming a member, spreading awareness about our mission, participating in our events, or exploring corporate partnership opportunities."),
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              {t("faq.badge", "Help Center")}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
              {t("faq.title", "Frequently Asked")} <span className="text-gradient-gold">{t("faq.titleHighlight", "Questions")}</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t("faq.subtitle", "Find answers to common questions about the Yoruba Action Council, membership, donations, and our projects.")}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category) => (
              <div key={category.id} className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                    {category.title}
                  </h2>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`${category.id}-${index}`}
                      className="bg-card rounded-xl shadow-warm border-none px-6"
                    >
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("faq.ctaTitle", "Still Have Questions?")}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {t("faq.ctaText", "Can't find the answer you're looking for? Our team is here to help. Reach out to us and we'll get back to you as soon as possible.")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="default" size="lg" asChild>
                <Link to="/contact">
                  <Mail className="w-5 h-5 mr-2" />
                  {t("common.contactUs", "Contact Us")}
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/membership">
                  <Users className="w-5 h-5 mr-2" />
                  {t("common.becomeMember", "Become a Member")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
