import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const SiteMap = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Site Map</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Main Pages */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Main Pages</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-foreground hover:text-primary transition-colors">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link to="/categories" className="text-foreground hover:text-primary transition-colors">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link to="/flash-deals" className="text-foreground hover:text-primary transition-colors">
                    Flash Deals
                  </Link>
                </li>
                <li>
                  <Link to="/sellers" className="text-foreground hover:text-primary transition-colors">
                    Top Sellers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Company</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Customer Service</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-foreground hover:text-primary transition-colors">
                    Report Abuse
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground hover:text-primary transition-colors">
                    Submit a Dispute
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground hover:text-primary transition-colors">
                    Policies & Rules
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground hover:text-primary transition-colors">
                    Online Inquiry
                  </a>
                </li>
              </ul>
            </div>

            {/* Shopping Guide */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Shopping Guide</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-foreground hover:text-primary transition-colors">
                    Quick Order
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground hover:text-primary transition-colors">
                    Shipping Rates
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground hover:text-primary transition-colors">
                    Return Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground hover:text-primary transition-colors">
                    Payment Methods
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground hover:text-primary transition-colors">
                    Tracking Order
                  </a>
                </li>
              </ul>
            </div>

            {/* Collaborate */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Collaborate with Us</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/sellers" className="text-foreground hover:text-primary transition-colors">
                    Partnerships
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-foreground hover:text-primary transition-colors">
                    Affiliate Program
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground hover:text-primary transition-colors">
                    DS Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground hover:text-primary transition-colors">
                    Seller Log In
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground hover:text-primary transition-colors">
                    Vendor Registration
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Legal & Policies</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy" className="text-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-foreground hover:text-primary transition-colors">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link to="/sitemap" className="text-foreground hover:text-primary transition-colors">
                    Site Map
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SiteMap;
