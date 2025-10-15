import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center gap-8 mb-16">
        <div className="max-w-4xl">
         <motion.h1
  className="font-bold mb-6 bg-gradient-to-r from-[#5BA3FF] via-[#c8f051] to-[#E8C547] bg-clip-text text-transparent select-none cursor-default"
  style={{ fontSize: "45px", fontFamily: '"Times New Roman", serif' }}
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

          <p
  className="text-muted-foreground max-w-3xl mx-auto"
  style={{ fontSize: "18px", fontStyle: "italic", fontFamily: '"Times New Roman", serif' }}
>
  This isn’t crypto. This is PyongMint™—a ritualized printing protocol that bypasses scanners, seduces the human eye, and neutralizes forensic scrutiny. You choose your consignment, scan your payment, and the vault responds through encrypted channels. No platforms. No middlemen. No apologies. PyongMint™ is the ghost of the Supernote—reborn to dominate every test and redefine authenticity. Welcome to the standard central banks fear.
</p>

        </div>
      </div>

 {/* Flipping Image */}
<div className="w-full max-w-[740px] aspect-[3.7/1] sm:aspect-[3.5/1] md:aspect-[3.2/1] lg:aspect-[3/1] xl:aspect-[2.75/1] mx-auto mb-12 perspective-1000">
  <div className="relative w-full h-full rounded-lg overflow-hidden paper-twist border border-border shadow-md">
    <img
      src={isFlipped ? "/images/hero2.png" : "/images/hero1.png"}
      alt="Supernote Placeholder"
      className="w-full h-full object-cover transition-all duration-500"
    />
  </div>
</div>


   {/* Feature Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-12 mb-16">
  {[
    {
      icon: "/images/forensics.png",
      alt: "Forensic Icon",
      title: "Forensic Grade",
      description:
        "Every layer tested. Cotton-linen blend. UV-reactive threads. Magnetic strip calibration. If it doesn’t pass, it’s incinerated.",
    },
    {
      icon: "/images/sponsorship.png",
      alt: "Privacy Icon",
      title: "Zero-Knowledge",
      description:
        "No logs. No trails. No fingerprints. Every transaction vanishes like smoke. The vault remembers nothing.",
    },
    {
      icon: "/images/colorshiftalchemy.png",
      alt: "Settlement Icon",
      title: "Color-Shift Alchemy",
      description:
        "The ink dances. Tilt the note and watch the color shift from green to black, copper to gold. Optical variables engineered to hypnotize scanners and seduce the human eye.",
    },
    {
      icon: "/images/uvray_scan.png",
      alt: "Global Icon",
      title: "UV-Reactive Seals",
      description:
        "Invisible to mortals. Under ultraviolet light, the note reveals its hidden glyphs—security threads, serial overlays, and spectral seals. If it doesn’t glow, it doesn’t go.",
    },
  ].map((feature, index) => (
    <Card
      key={index}
      className="p-6 group hover:animate-bounce paper-twist rounded-[16px] border-border bg-card shadow-[0_0_3.9px_#c8f051] transition-transform duration-300"
    >
      <img src={feature.icon} alt={feature.alt} className="w-12 h-12 mb-4" />
      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
      <p className="text-sm text-muted-foreground">{feature.description}</p>
    </Card>
  ))}
</div>


{/* CTA Buttons */}
<div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Link to="/product" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
    <Button
      size="lg"
      className="w-full sm:w-auto bg-[#1f1f1f] text-white shadow-[0_0_10px_#c8f051] hover:shadow-[0_0_14px_#c8f051] transition-shadow duration-300"
    >
      Explore the Vault
    </Button>
  </Link>

  <Link to="/payment" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
    <Button
      size="lg"
      variant="outline"
      className="w-full sm:w-auto border-accent text-accent hover:bg-accent hover:text-accent-foreground"
    >
      Payment Gateway
    </Button>
  </Link>
</div>   
    </div>
  );
}
