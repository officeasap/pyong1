import { Card, CardContent } from "@/components/ui/card";
import { Shield, Eye, CheckCircle } from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: Shield,
      title: "Indistinguishable",
      description: "Every security feature replicated with forensic precision. Undetectable under standard examination.",
    },
    {
      icon: Eye,
      title: "Flawless",
      description: "Color-shifting ink, microprinting, UV-reactive elements - all authentic manufacturing techniques applied.",
    },
    {
      icon: CheckCircle,
      title: "Verified",
      description: "Laboratory-tested and field-proven. The Supernote standard that made counterfeit obsolete.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Origin Story */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            The Forbidden Genesis
          </h1>
          <p className="text-xl text-foreground leading-relaxed">
            Born from the classified archives of a sovereign nation, the Supernote emerged not as a counterfeit,
            but as a resurrection of currency itself.
          </p>
        </div>

     <Card className="paper-twist border-border bg-card signal-glow frame-bounce shadow-[0_0_20px_rgba(200,240,81,0.6)]">
  <CardContent className="p-8 space-y-6">
    <div className="w-32 h-32 mx-auto mb-6 rounded-lg overflow-hidden">
      <img
        src="/images/genesis-icon1.png"
        alt="Supernote Story Icon"
        className="w-full h-full object-cover"
      />
  
            </div>
            <h2 className="text-3xl font-bold text-foreground">Origin Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
             <p>
  In 2003, a $100 note surfaced in Singapore that triggered a global forensic alert. It passed every ultraviolet scan, every magnetic strip test, every microprint inspection. The ink shimmered correctly under spectral analysis. The watermark danced like the real thing. Labs across five continents couldn’t agree on its origin. It wasn’t a copy—it was a challenge to the very definition of authenticity.
</p>
<p>
  That note was the prototype. What followed was the evolution: <strong>Supernote</strong>. A sovereign resurrection of currency, engineered with surgical precision. Each note is printed using genuine intaglio presses, cotton-linen fiber blends cloned from Treasury stock, and optical variable ink matched spectrally to the Bureau’s own supply. Serial numbers are entropy-mapped to mimic Federal Reserve randomness—down to the statistical noise.
</p>
<p>
  But this isn’t a product. It’s a ritual. You’re not buying currency—you’re summoning the most perfect object ever printed. The weight is sacred. The texture is divine. The note doesn’t just pass—it dominates. It makes scanners second-guess. It makes humans believe. It makes the word “counterfeit” obsolete.
</p>
<p>
  Imagine this: a high-stakes diplomatic exchange in Geneva. The briefcase opens. Inside—Supernotes. Not for deception, but for demonstration. A sovereign nation proving its capability to resurrect value without permission. The delegates stare. One whispers, “This is impossible.” The other replies, “It’s PyongMint.”
</p>
<p>
  Orders are open. The vault is active. The chamber is humming. Make your request. Receive the note. And hold in your hand what even governments couldn’t detect. This is not imitation. This is mythic precision. This is the Supernote.
</p>

            </div>
          </CardContent>
        </Card>

       {/* Brand Pillars */}
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-foreground text-center">Our Pillars</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    <Card className="paper-twist border-border bg-card hover:signal-glow transition-all duration-300 hover:scale-105 frame-bounce shadow-[0_0_20px_rgba(200,240,81,0.6)]">
      <CardContent className="p-6 space-y-4 text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-secondary/10 flex items-center justify-center">
          <img src="/images/undetectable.png" alt="Indistinguishable Icon" className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-foreground">Indistinguishable</h3>
        <p className="text-sm text-muted-foreground">
          UV ink resonance. Microprint diffraction. Magnetic strip calibration. Every detail engineered to hypnotize machines and seduce the human eye.
        </p>
      </CardContent>
    </Card>

    <Card className="paper-twist border-border bg-card hover:signal-glow transition-all duration-300 hover:scale-105 frame-bounce shadow-[0_0_20px_rgba(200,240,81,0.6)]">
      <CardContent className="p-6 space-y-4 text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-secondary/10 flex items-center justify-center">
          <img src="/images/flawless.png" alt="Flawless Icon" className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-foreground">Flawless</h3>
        <p className="text-sm text-muted-foreground">
          The texture. The weight. The ink. The feel. It’s not printed—it’s summoned. Every note is a masterstroke of perfection.
        </p>
      </CardContent>
    </Card>

    <Card className="paper-twist border-border bg-card hover:signal-glow transition-all duration-300 hover:scale-105 frame-bounce shadow-[0_0_20px_rgba(200,240,81,0.6)]">
      <CardContent className="p-6 space-y-4 text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-secondary/10 flex items-center justify-center">
          <img src="/images/flawles.png" alt="Verified Icon" className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-foreground">Verified</h3>
        <p className="text-sm text-muted-foreground">
          Each note passes a 12-point forensic simulation. If it doesn’t pass all 12, it’s incinerated. What survives is indistinguishable from truth.
        </p>
      </CardContent>
    </Card>

  </div>
</div>

      </div>
    </div>
  );
}
