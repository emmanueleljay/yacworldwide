import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Projects", href: "#projects" },
    { name: "Events", href: "#events" },
    { name: "Donate", href: "#contact" },
    { name: "Contact Us", href: "/#contact" },
    { name: "Privacy Policy", href: "/privacy-policy", isRoute: true },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer id="contact" className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-xl">Y</span>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold">YAC Worldwide</span>
                <p className="text-primary-foreground/60 text-sm">Yoruba Action Council</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed max-w-md mb-6">
              A 501(c)(3) non-profit organization promoting the heritage, welfare, 
              and progress of the Yoruba people globally since 2018.
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
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-primary-foreground/70 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-primary-foreground/70 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact Us</h4>
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

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Yoruba Action Council. All rights reserved.
          </p>
          <p className="text-primary-foreground/50 text-sm">
            A 501(c)(3) Tax-Exempt Organization
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
