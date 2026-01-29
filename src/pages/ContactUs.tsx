import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";
import contactBanner from "@/assets/contact-banner.jpg";
import { submitContactForm } from "@/lib/web3forms";

const ContactUs = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitContactForm(formData);
      
      toast({
        title: t("contact.messageSent"),
        description: t("contact.messageSentDesc"),
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email us directly at info@yacworldwide.org",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contact.address"),
      details: ["YAC P.O. Box 5130", "Kendall Park, NJ 08824"],
    },
    {
      icon: Phone,
      title: t("contact.phone"),
      details: ["732-595-7420"],
    },
    {
      icon: Mail,
      title: t("contact.email"),
      details: ["Info@yacworldwide.org"],
      isLink: true,
    },
    {
      icon: Clock,
      title: t("contact.officeHours"),
      details: [t("contact.officeHoursValue")],
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative min-h-[50vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${contactBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary-foreground text-sm font-medium mb-6">
            {t("contact.badge")}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            {t("contact.title")}
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                {t("contact.formLabel")}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                {t("contact.formTitle")}
              </h2>
              <p className="text-muted-foreground mb-8">
                {t("contact.formSubtitle")}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      {t("contact.yourName")} *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="bg-muted/50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      {t("contact.emailAddress")} *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="bg-muted/50"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {t("contact.subject")} *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t("contact.subjectPlaceholder")}
                    className="bg-muted/50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {t("contact.message")} *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("contact.messagePlaceholder")}
                    rows={6}
                    className="bg-muted/50"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    t("common.sending")
                  ) : (
                    <>
                      {t("common.sendMessage")}
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                {t("contact.infoLabel")}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                {t("contact.infoTitle")}
              </h2>
              <p className="text-muted-foreground mb-8">
                {t("contact.infoSubtitle")}
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-muted/30 rounded-xl border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground">
                          {item.isLink ? (
                            <a
                              href={`mailto:${detail}`}
                              className="hover:text-primary transition-colors"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 p-6 bg-muted/30 rounded-xl border border-border">
                <h3 className="font-semibold text-foreground mb-4">
                  {t("contact.location")}
                </h3>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                    <p className="text-muted-foreground">
                      Kendall Park, New Jersey
                    </p>
                    <p className="text-sm text-muted-foreground/70">
                      United States of America
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactUs;
