import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { MessageCircle, Mail, Phone } from "lucide-react";

const HelpCenter = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Help Center</h1>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center">
            <MessageCircle className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="font-bold text-lg mb-2">Live Chat</h3>
            <p className="text-sm text-muted-foreground">Get instant support from our team</p>
          </Card>
          
          <Card className="p-6 text-center">
            <Mail className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="font-bold text-lg mb-2">Email Support</h3>
            <p className="text-sm text-muted-foreground">support@daytools.com</p>
          </Card>
          
          <Card className="p-6 text-center">
            <Phone className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="font-bold text-lg mb-2">Phone</h3>
            <p className="text-sm text-muted-foreground">1-800-DAYTOOLS</p>
          </Card>
        </div>

        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">How do I track my order?</h3>
              <p className="text-muted-foreground">
                You can track your order by logging into your account and viewing the Orders section.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">What is the return policy?</h3>
              <p className="text-muted-foreground">
                We offer a 30-day return policy for most items. Please see our Return Policy page for details.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">How long does shipping take?</h3>
              <p className="text-muted-foreground">
                Standard shipping takes 7-15 business days. Express shipping options are available at checkout.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">
                We accept all major credit cards, PayPal, and bank transfers.
              </p>
            </div>
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default HelpCenter;
