import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Drop & Reset</h3>
            <p className="text-background/70 text-sm">
              Where community meets competition. Join us on the court.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-background/70 hover:text-background transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#membership" className="text-background/70 hover:text-background transition-colors">
                  Membership
                </a>
              </li>
              <li>
                <a href="#events" className="text-background/70 hover:text-background transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-background/70 hover:text-background transition-colors">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>123 Court Street</li>
              <li>San Diego, CA 92101</li>
              <li>(555) 123-4567</li>
              <li>hello@dropandreset.com</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-background/70 hover:text-background transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-background/70 hover:text-background transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-background/70 hover:text-background transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>© {currentYear} Drop & Reset Pickleball Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
