import { useState, useEffect } from "react";
import { Shield, Zap, Lock, Eye, Sparkles, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import supernoteFront from "@/assets/supernote-front.jpg";
import supernoteBack from "@/assets/supernote-back.jpg";

export default function Product() {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Shield, title: "Forensic Grade Security", description: "Laboratory-verified authentication" },
    { icon: Zap, title: "Instant Verification", description: "Real-time authenticity checks" },
    { icon: Lock, title: "Encrypted Transactions", description: "Zero-knowledge privacy protocol" },
    { icon: Eye, title: "Optical Variable Ink", description: "Color-shifting technology" },
    { icon: Sparkles, title: "UV-Reactive Elements", description: "Invisible security features" },
    { icon: CheckCircle, title: "Indistinguishable", description: "Flawless reproduction standards" },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground">
          The Vault Collection
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Every detail verified. Every feature authenticated. Every note a masterpiece.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Flipping Image */}
        <div className="order-2 lg:order-1">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden paper-twist uv-glow">
            <img
              src={isFlipped ? supernoteBack : supernoteFront}
              alt="Supernote"
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>
        </div>

        {/* Feature Grid */}
        <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="paper-twist border-border bg-card hover:scale-105 transition-transform duration-300"
            >
              <CardContent className="p-4 space-y-2">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-bold text-foreground text-sm">{feature.title}</h3>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Specifications */}
      <div className="max-w-4xl mx-auto">
        <Card className="paper-twist border-border bg-card">
          <CardContent className="p-8 space-y-6">
            <h2 className="text-2xl font-bold text-foreground text-center">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-primary">99.9%</p>
                <p className="text-sm text-muted-foreground">Accuracy Rating</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">256-bit</p>
                <p className="text-sm text-muted-foreground">Encryption Standard</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">∞</p>
                <p className="text-sm text-muted-foreground">Operational Security</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
