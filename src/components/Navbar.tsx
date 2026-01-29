import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import mainLogo from "@/assets/main-logo.png";

const languages = [
  { code: "en", name: "English" },
  { code: "yo", name: "Yoruba" },
  { code: "fr", name: "French" },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [whoWeAreOpen, setWhoWeAreOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const whoWeAreLinks = [
    { name: t("nav.overview"), href: "/who-we-are" },
    { name: t("nav.mission"), href: "/who-we-are/mission" },
    { name: t("nav.vision"), href: "/who-we-are/vision" },
    { name: t("nav.history"), href: "/who-we-are/history" },
    { name: t("nav.omoluabi"), href: "/who-we-are/omoluabi" },
  ];

  const projectLinks = [
    { name: t("nav.tourismPromotion"), href: "/projects/tourism" },
    { name: t("nav.educationalSponsorship"), href: "/projects/education" },
    { name: t("nav.culturalPromotion"), href: "/projects/culture" },
    { name: t("nav.waterBorehole"), href: "/projects/water" },
  ];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setLangOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={mainLogo} alt="YAC Worldwide Logo" className="h-16 lg:h-20 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Who We Are Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors font-medium"
                onMouseEnter={() => setWhoWeAreOpen(true)}
                onMouseLeave={() => setWhoWeAreOpen(false)}
              >
                {t("nav.whoWeAre")}
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div
                className={`absolute top-full left-0 pt-2 ${whoWeAreOpen ? 'block' : 'hidden'} group-hover:block`}
                onMouseEnter={() => setWhoWeAreOpen(true)}
                onMouseLeave={() => setWhoWeAreOpen(false)}
              >
                <div className="bg-background border border-border rounded-lg shadow-lg py-2 min-w-[180px] z-50">
                  {whoWeAreLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Projects Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors font-medium"
                onMouseEnter={() => setProjectsOpen(true)}
                onMouseLeave={() => setProjectsOpen(false)}
              >
                {t("nav.projects")}
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div
                className={`absolute top-full left-0 pt-2 ${projectsOpen ? 'block' : 'hidden'} group-hover:block`}
                onMouseEnter={() => setProjectsOpen(true)}
                onMouseLeave={() => setProjectsOpen(false)}
              >
                <div className="bg-background border border-border rounded-lg shadow-lg py-2 min-w-[200px] z-50">
                  {projectLinks.map((project) => (
                    <Link
                      key={project.href}
                      to={project.href}
                      className="block px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                    >
                      {project.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/who-we-are/ile-ife"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              {t("nav.aboutIleIfe")}
            </Link>
            <Link
              to="/leadership"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              {t("nav.leadership")}
            </Link>
            <Link
              to="/membership"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              {t("nav.membership")}
            </Link>
            <Link
              to="/gallery"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              {t("nav.gallery")}
            </Link>
            <Link
              to="/contact"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              {t("nav.contact")}
            </Link>

            <Link to="/donate">
              <Button variant="hero" size="lg">
                {t("nav.donateNow")}
              </Button>
            </Link>

            {/* Language Selector */}
            <div className="relative">
              <button
                className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors p-2 rounded-md border border-border hover:border-primary/50"
                onClick={() => setLangOpen(!langOpen)}
                onBlur={() => setTimeout(() => setLangOpen(false), 150)}
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium uppercase">{i18n.language}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <div className="absolute top-full right-0 mt-2 bg-background border border-border rounded-lg shadow-lg py-1 min-w-[120px] z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                        i18n.language === lang.code 
                          ? 'text-primary bg-primary/10' 
                          : 'text-muted-foreground hover:text-primary hover:bg-muted'
                      }`}
                      onClick={() => changeLanguage(lang.code)}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {/* Mobile Who We Are Accordion */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setWhoWeAreOpen(!whoWeAreOpen)}
                >
                  {t("nav.whoWeAre")}
                  <ChevronDown className={`w-4 h-4 transition-transform ${whoWeAreOpen ? 'rotate-180' : ''}`} />
                </button>
                {whoWeAreOpen && (
                  <div className="pl-4 flex flex-col gap-2 mt-2">
                    {whoWeAreLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Projects Accordion */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setProjectsOpen(!projectsOpen)}
                >
                  {t("nav.projects")}
                  <ChevronDown className={`w-4 h-4 transition-transform ${projectsOpen ? 'rotate-180' : ''}`} />
                </button>
                {projectsOpen && (
                  <div className="pl-4 flex flex-col gap-2 mt-2">
                    {projectLinks.map((project) => (
                      <Link
                        key={project.href}
                        to={project.href}
                        className="text-muted-foreground hover:text-primary transition-colors py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {project.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/who-we-are/ile-ife"
                className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.aboutIleIfe")}
              </Link>
              <Link
                to="/leadership"
                className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.leadership")}
              </Link>
              <Link
                to="/membership"
                className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
              {t("nav.membership")}
            </Link>
            <Link
              to="/gallery"
              className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {t("nav.gallery")}
              </Link>
              <Link
                to="/contact"
                className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.contact")}
              </Link>

              <Link to="/donate" onClick={() => setIsOpen(false)}>
                <Button variant="hero" size="lg" className="mt-2 w-full">
                  {t("nav.donateNow")}
                </Button>
              </Link>

              {/* Mobile Language Selector */}
              <div className="flex items-center gap-2 pt-4 border-t border-border mt-4">
                <Globe className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{t("nav.language")}:</span>
                <div className="flex gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`px-3 py-1 text-sm rounded-md transition-colors ${
                        i18n.language === lang.code 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted text-muted-foreground hover:text-primary'
                      }`}
                      onClick={() => changeLanguage(lang.code)}
                    >
                      {lang.code.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
