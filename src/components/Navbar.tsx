import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import mainLogo from "@/assets/main-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [whoWeAreOpen, setWhoWeAreOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navLinks = [
    { name: "Who We Are", href: "/who-we-are", isAnchor: false },
    { name: "Leadership", href: "/leadership", isAnchor: false },
    { name: "Membership", href: "/membership", isAnchor: false },
    { name: "Gallery", href: "/gallery", isAnchor: false },
    { name: "Contact", href: "/contact", isAnchor: false },
  ];

  const whoWeAreLinks = [
    { name: "Overview", href: "/who-we-are" },
    { name: "Mission", href: "/who-we-are/mission" },
  ];

  const projectLinks = [
    { name: "Tourism Promotion", href: "/projects/tourism" },
    { name: "Educational Sponsorship", href: "/projects/education" },
    { name: "Cultural Promotion", href: "/projects/culture" },
    { name: "Water Borehole", href: "/projects/water" },
  ];

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
                Who We Are
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
                      key={link.name}
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
                Projects
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
                      key={project.name}
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
              to="/leadership"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Leadership
            </Link>
            <Link
              to="/membership"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Membership
            </Link>
            <Link
              to="/gallery"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </Link>

            <Link to="/donate">
              <Button variant="hero" size="lg">
                Donate Now
              </Button>
            </Link>
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
                  Who We Are
                  <ChevronDown className={`w-4 h-4 transition-transform ${whoWeAreOpen ? 'rotate-180' : ''}`} />
                </button>
                {whoWeAreOpen && (
                  <div className="pl-4 flex flex-col gap-2 mt-2">
                    {whoWeAreLinks.map((link) => (
                      <Link
                        key={link.name}
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
                  Projects
                  <ChevronDown className={`w-4 h-4 transition-transform ${projectsOpen ? 'rotate-180' : ''}`} />
                </button>
                {projectsOpen && (
                  <div className="pl-4 flex flex-col gap-2 mt-2">
                    {projectLinks.map((project) => (
                      <Link
                        key={project.name}
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
                to="/leadership"
                className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Leadership
              </Link>
              <Link
                to="/membership"
                className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Membership
              </Link>
              <Link
                to="/contact"
                className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <Link to="/donate" onClick={() => setIsOpen(false)}>
                <Button variant="hero" size="lg" className="mt-2 w-full">
                  Donate Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;