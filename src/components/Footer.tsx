import { useTranslation } from "react-i18next";
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import mainLogo from "@/assets/main-logo.png";

const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { nameKey: "footer.links.ourProjects", href: "#projects" },
    { nameKey: "footer.links.events", href: "#events" },
    { nameKey: "footer.links.donate", href: "/donate", isRoute: true },
    { nameKey: "footer.links.faq", href: "/faq", isRoute: true },
    { nameKey: "footer.links.contactUs", href: "/contact", isRoute: true },
    { nameKey: "footer.links.privacyPolicy", href: "/privacy-policy", isRoute: true },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer id="contact" className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <img src={mainLogo} alt="YAC Worldwide Logo" className="h-24 w-auto" />
              </div>
              <p className="text-primary-foreground/70 leading-relaxed max-w-md mb-6">
                {t("footer.description")}
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-lg font-semibold mb-6">{t("footer.quickLinks")}</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.nameKey}>
                    {link.isRoute ? (
                      <Link
                        to={link.href}
                        className="text-primary-foreground/70 hover:text-primary transition-colors"
                      >
                        {t(link.nameKey)}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-primary-foreground/70 hover:text-primary transition-colors"
                      >
                        {t(link.nameKey)}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-serif text-lg font-semibold mb-6">{t("footer.contactTitle")}</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-primary-foreground/70">
                    YAC P.O. Box 5130<br />
                    Kendall Park, NJ 08824
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a
                    href="mailto:Info@yacworldwide.org"
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    Info@yacworldwide.org
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a
                    href="tel:732-595-7420"
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    732-595-7420
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
          <p className="text-primary-foreground/50 text-sm">
            {t("footer.taxExempt")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
