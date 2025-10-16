import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Shield, Phone, Hash } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    const fullMessage = `Name: ${name}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(fullMessage);

    const telegramLink = `https://t.me/pyongmbot?start=${encodedMessage}`;
    window.open(telegramLink, "_blank", "noopener,noreferrer");

    toast.success("Opening Telegram to send your message");
    window.scrollTo({ top: 0, behavior: "smooth" });

    setName("");
    setMessage("");
  };

  const openTelegramChat = () => {
    window.open("https://t.me/pyongmbot", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">Secure Contact</h1>
          <p className="text-xl text-muted-foreground">
            Encrypted communications only. All channels verified.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Form */}
          <Card className="paper-twist border-border bg-card frame-bounce shadow-[0_0_20px_rgba(200,240,81,0.6)]">
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Send Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Name</label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-input text-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Message</label>
                  <Textarea
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-input text-foreground min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Send via Telegram
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Channels */}
          <div className="space-y-6">
            <Card className="paper-twist border-border bg-card frame-bounce shadow-[0_0_20px_rgba(200,240,81,0.6)]">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground">Direct Channels</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm">Telegram: @pyongmbot</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Shield className="w-5 h-5 text-secondary" />
                    <span className="text-sm">PGP: Available on request</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="w-5 h-5 text-accent" />
                    <span className="text-sm">Signal: Secure channel only</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Hash className="w-5 h-5 text-primary" />
                    <span className="text-sm">Matrix: End-to-end encrypted</span>
                  </div>
                </div>
                <Button
                  onClick={openTelegramChat}
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-4"
                >
                  Open Telegram Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="paper-twist border-border bg-card frame-bounce shadow-[0_0_20px_rgba(200,240,81,0.6)]">
              <CardContent className="p-6 space-y-2">
                <h3 className="text-lg font-bold text-foreground">Security Notice</h3>
                <p className="text-sm text-muted-foreground">
                  🔒 All communications are routed through encrypted channels. We never store message history.
                </p>
                <p className="text-xs text-muted-foreground">
                  Messages sent via the form will open Telegram with your message pre-filled. You control when to send.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
