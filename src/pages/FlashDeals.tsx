import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Clock } from "lucide-react";

const FlashDeals = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const flashDeals = [
    { id: "1", title: "Wireless Earbuds Pro with Noise Cancellation", price: 27.97, originalPrice: 99.99, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80", orders: 1205, discount: 72 },
    { id: "2", title: "Designer Crossbody Bag Women's Fashion", price: 18.63, originalPrice: 62.10, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80", orders: 892, discount: 70 },
    { id: "3", title: "Smart Watch Fitness Tracker Heart Rate", price: 45.99, originalPrice: 129.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80", orders: 2341, discount: 65 },
    { id: "4", title: "LED Ring Light for Photography Studio", price: 32.50, originalPrice: 89.99, image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&q=80", orders: 567, discount: 64 },
    { id: "5", title: "Portable Bluetooth Speaker Waterproof", price: 19.99, originalPrice: 59.99, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80", orders: 1678, discount: 67 },
    { id: "6", title: "Gaming Mouse RGB Programmable Buttons", price: 24.99, originalPrice: 69.99, image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&q=80", orders: 934, discount: 64 },
    { id: "7", title: "Phone Case with Card Holder Leather", price: 8.99, originalPrice: 24.99, image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&q=80", orders: 3421, discount: 64 },
    { id: "8", title: "Yoga Mat Non-Slip Exercise Fitness", price: 15.99, originalPrice: 45.99, image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&q=80", orders: 721, discount: 65 },
    { id: "9", title: "Running Shoes Breathable Sneakers", price: 39.99, originalPrice: 99.99, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80", orders: 1567, discount: 60 },
    { id: "10", title: "Laptop Stand Aluminum Adjustable", price: 22.99, originalPrice: 54.99, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80", orders: 432, discount: 58 },
    { id: "11", title: "Electric Toothbrush Rechargeable", price: 29.99, originalPrice: 79.99, image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400&q=80", orders: 891, discount: 63 },
    { id: "12", title: "Camera Tripod Professional Adjustable", price: 35.99, originalPrice: 89.99, image: "https://images.unsplash.com/photo-1567634287079-f00c75cbc50d?w=400&q=80", orders: 234, discount: 60 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 py-16 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1920&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-6xl font-bold mb-4 animate-pulse">⚡ FLASH DEALS ⚡</h1>
              <p className="text-2xl mb-8">Limited Time Offers - Up to 90% OFF!</p>
              
              {/* Countdown Timer */}
              <div className="flex justify-center items-center gap-4 mb-6">
                <Clock className="h-8 w-8" />
                <div className="flex gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
                    <div className="text-4xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                    <div className="text-sm opacity-80">Hours</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
                    <div className="text-4xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                    <div className="text-sm opacity-80">Minutes</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
                    <div className="text-4xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                    <div className="text-sm opacity-80">Seconds</div>
                  </div>
                </div>
              </div>
              
              <p className="text-lg">Hurry! Deals end soon - Don't miss out!</p>
            </div>
          </div>
        </section>

        {/* Flash Deals Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Today's Best Deals</h2>
            <p className="text-muted-foreground">Unbeatable prices on top products - Save up to 90%</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {flashDeals.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        {/* Promotional Banner */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=1920&q=80')] bg-cover bg-center opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">New User Special</h2>
              <p className="text-xl mb-6">Get an EXTRA 20% OFF on your first order!</p>
              <div className="inline-flex items-center gap-4">
                <div className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-2xl">
                  EXTRA20
                </div>
                <span className="text-lg">Use code at checkout</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FlashDeals;
