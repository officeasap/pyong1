import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, Eye, Sparkles, Fingerprint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import supernoteFront from "@/assets/supernote-front.jpg";
import supernoteBack from "@/assets/supernote-back.jpg";

export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Forensic Grade",
      description: "Indistinguishable from authentic notes under laboratory analysis",
    },
    {
      icon: Eye,
      title: "Zero-Knowledge",
      description: "Complete operational security with encrypted transactions",
    },
    {
      icon: Sparkles,
      title: "Color-Shift Alchemy",
      description: "Advanced optical variable ink technology",
    },
    {
      icon: Fingerprint,
      title: "UV-Reactive Seals",
      description: "Authentic security features visible under ultraviolet light",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center gap-8 mb-16">
        <div className="max-w-4xl">
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#5BA3FF] via-[#c8f051] to-[#E8C547] bg-clip-text text-transparent select-none cursor-default"
            animate={controls}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            whileHover={{
              scale: 1.08,
              rotateX: 5,
              rotateY: 5,
              transition: { type: "spring", stiffness: 200, damping: 10 },
            }}
          >
            The Note That Made Counterfeit Obsolete
          </motion.h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Supernote is not a replica. It's a resurrection.
          </p>
        </div>
      </div>

      {/* Flipping Image */}
      <div className="max-w-4xl mx-auto mb-16 perspective-1000">
        <div className="relative w-full aspect-video rounded-lg overflow-hidden paper-twist">
          <img
            src={isFlipped ? supernoteBack : supernoteFront}
            alt="Supernote"
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="paper-twist border-border bg-card hover:signal-glow transition-all duration-300 hover:scale-105 frame-bounce shadow-[0_0_20px_rgba(200,240,81,0.6)]"
          >
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/product" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
            Explore the Vault
          </Button>
        </Link>
        <Link to="/payment" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Button size="lg" variant="outline" className="w-full sm:w-auto border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            Payment Gateway
          </Button>
        </Link>
      </div>
    </div>
  );
}
