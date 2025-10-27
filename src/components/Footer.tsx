import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--header-bg))] text-[hsl(var(--header-fg))] mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Customer Service */}
          <div>
            <h3 className="font-bold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/contact" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Report Abuse</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Submit a Dispute</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Policies & Rules</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Online Inquiry</Link></li>
            </ul>
          </div>

          {/* Shopping Guide */}
          <div>
            <h3 className="font-bold text-lg mb-4">Shopping Guide</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="#" className="hover:text-primary transition-colors">Quick Order</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Shipping Rates</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Return Policy</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Payment Methods</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Tracking Order</Link></li>
            </ul>
          </div>

          {/* Collaborate with Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Collaborate with Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/sellers" className="hover:text-primary transition-colors">Partnerships</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Affiliate Program</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">DS Center</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Seller Log In</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Vendor Registration</Link></li>
            </ul>
          </div>

          {/* About DHgate */}
          <div>
            <h3 className="font-bold text-lg mb-4">About DHgate</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">Company Overview</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">DHgate Blog</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">News & Events</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Global Offices</Link></li>
            </ul>
          </div>

          {/* Social & App */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <div className="flex gap-4 mb-6">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Download Our App</p>
              <div className="flex gap-2">
                <div className="bg-white/10 px-3 py-2 rounded text-xs">App Store</div>
                <div className="bg-white/10 px-3 py-2 rounded text-xs">Google Play</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2004-2025 DHgate.com All Rights Reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Use</Link>
            <Link to="/sitemap" className="hover:text-primary transition-colors">Site Map</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
