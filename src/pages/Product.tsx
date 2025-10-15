import { useState, useEffect } from "react";
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
    {
      image: "/images/vaultLayer.png",
      title: "Vault-Layered Composition",
      description:
        "Each note is built from a ritualized stack of forensic substrates—cotton-linen blend, magnetic strip, embedded watermark, and microthread. Every layer calibrated to mimic the original $100 with 99.99% indistinguishability.",
    },
    {
      image: "/images/macroprint-security.png",
      title: "Microprint Rituals",
      description:
        "Text so small it defies the naked eye. Federal-grade microprint replicated with spectral ink and diffraction-matched spacing. Verified only under magnification. If it’s readable, it’s real.",
    },
    {
      image: "/images/colorshiftalchemy.png",
      title: "Color-Shift Alchemy",
      description:
        "The ink dances. Tilt the note and watch the color shift from green to black, copper to gold. Optical variables engineered to hypnotize scanners and seduce the human eye.",
    },
    {
      image: "/images/uvray_scan.png",
      title: "UV-Reactive Seals",
      description:
        "Invisible to mortals. Under ultraviolet light, the note reveals its hidden glyphs—security threads, serial overlays, and spectral seals. If it doesn’t glow, it doesn’t go.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground">
          Anatomy of the Supernote
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
           Every PyongMint™ note is a forensic masterpiece—layered, encrypted, and indistinguishable from the original.
     Every detail verified. Every feature authenticated. Every note a masterpiece.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
       {/* Flipping Image */}
<div className="w-full max-w-[740px] aspect-[3.7/1] sm:aspect-[3.5/1] md:aspect-[3.2/1] lg:aspect-[3/1] xl:aspect-[2.75/1] mx-auto mb-12 perspective-1000">
  <div className="relative w-full h-full rounded-lg overflow-hidden paper-twist border border-border shadow-md">
    <img
      src={isFlipped ? "/images/hero3.png" : "/images/hero1.png"}
      alt="Supernote Placeholder"
      className="w-full h-full object-cover transition-all duration-500"
    />
  </div>
</div>
        {/* Feature Grid */}
        <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="paper-twist border-border bg-card hover:scale-105 transition-transform duration-300 frame-bounce shadow-[0_0_20px_rgba(200,240,81,0.6)]"
            >
              <CardContent className="p-4 space-y-2">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-6 h-6 object-contain"
                  />
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
        <Card className="paper-twist border-border bg-card frame-bounce shadow-[0_0_20px_rgba(200,240,81,0.6)]">
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
