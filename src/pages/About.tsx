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

        <Card className="paper-twist border-border bg-card uv-glow">
          <CardContent className="p-8 space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Origin Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                In the shadows of global finance, a team of master craftsmen and forensic scientists embarked on
                an impossible mission: to create a note so perfect, it would render the concept of "counterfeit" meaningless.
              </p>
              <p>
                Using genuine Bureau of Engraving and Printing intaglio presses, authentic cotton-linen blend paper,
                and color-shifting optical variable ink, they achieved what was thought impossible.
              </p>
              <p className="text-foreground font-medium">
                The Supernote wasn't a copy. It was a parallel creation - indistinguishable, flawless, and verified.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Brand Pillars */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground text-center">Our Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <Card
                key={index}
                className="paper-twist border-border bg-card hover:uv-glow transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-secondary/10 flex items-center justify-center">
                    <pillar.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Excellence */}
        <Card className="paper-twist border-border bg-card">
          <CardContent className="p-8 space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Technical Excellence</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-bold text-accent">Intaglio Printing</h3>
                <p className="text-sm text-muted-foreground">
                  Authentic raised-ink texture, identical to Treasury standards
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-accent">Cotton-Linen Blend</h3>
                <p className="text-sm text-muted-foreground">
                  Genuine currency-grade paper with embedded security threads
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-accent">Color-Shifting Ink</h3>
                <p className="text-sm text-muted-foreground">
                  Optical variable ink that changes from copper to green
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-accent">UV Security Features</h3>
                <p className="text-sm text-muted-foreground">
                  Invisible elements that appear under ultraviolet examination
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final Statement */}
        <div className="text-center space-y-4">
          <p className="text-2xl font-bold text-primary">
            This is not replication. This is resurrection.
          </p>
          <p className="text-muted-foreground">
            PyongMint™ Ascendant - Where sovereignty meets perfection.
          </p>
        </div>
      </div>
    </div>
  );
}
