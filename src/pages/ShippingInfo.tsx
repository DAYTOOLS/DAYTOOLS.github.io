import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const ShippingInfo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Shipping Information</h1>
        
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Shipping Rates</h2>
          <div className="space-y-4">
            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold">Standard Shipping (15-20 days)</span>
              <span className="text-green-600 font-bold">FREE on orders over $50</span>
            </div>
            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold">Express Shipping (7-10 days)</span>
              <span>$9.99</span>
            </div>
            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold">Priority Shipping (3-5 days)</span>
              <span>$19.99</span>
            </div>
          </div>
        </Card>

        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-6">Tracking Your Order</h2>
          <p className="text-muted-foreground mb-4">
            Once your order ships, you'll receive a tracking number via email. You can track your package using this number on our website or the carrier's website.
          </p>
          <p className="text-muted-foreground">
            Please allow 24-48 hours after receiving your tracking number for the carrier to update their system.
          </p>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default ShippingInfo;
