import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Users, Globe, Shield, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gradient-to-r from-primary to-secondary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="text-white max-w-2xl">
              <h1 className="text-6xl font-bold mb-6">About DHgate</h1>
              <p className="text-2xl opacity-90">
                Connecting buyers and sellers worldwide since 2004
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              DHgate.com is a leading B2B cross-border e-commerce marketplace in China. 
              We empower millions of small and medium-sized businesses worldwide to reach 
              global markets and grow their business through our platform.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">100M+</div>
              <div className="text-muted-foreground">Registered Buyers</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">2.3M+</div>
              <div className="text-muted-foreground">Active Sellers</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Countries Served</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">40M+</div>
              <div className="text-muted-foreground">Product Listings</div>
            </Card>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Customer First</h3>
                <p className="text-muted-foreground">
                  We prioritize customer satisfaction and provide comprehensive buyer protection
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Global Reach</h3>
                <p className="text-muted-foreground">
                  Connecting businesses across borders and cultures worldwide
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Trust & Safety</h3>
                <p className="text-muted-foreground">
                  Secure transactions and verified sellers ensure safe shopping
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Continuously improving our platform with latest technology
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Journey</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-2xl font-bold text-primary">2004</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Foundation</h3>
                  <p className="text-muted-foreground">
                    DHgate.com was founded in Beijing, China, with a vision to connect Chinese 
                    manufacturers with global buyers.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-2xl font-bold text-primary">2010</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Global Expansion</h3>
                  <p className="text-muted-foreground">
                    Reached 10 million registered buyers and expanded services to over 100 countries.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-2xl font-bold text-primary">2015</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Mobile Innovation</h3>
                  <p className="text-muted-foreground">
                    Launched mobile apps and introduced advanced buyer protection programs.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-2xl font-bold text-primary">2020</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Digital Transformation</h3>
                  <p className="text-muted-foreground">
                    Implemented AI-powered recommendations and enhanced security features.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-2xl font-bold text-primary">2025</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Leading the Future</h3>
                  <p className="text-muted-foreground">
                    Over 100 million registered buyers, continuing to innovate and serve the 
                    global e-commerce community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
