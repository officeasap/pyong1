import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";

const cryptoData: Record<string, { name: string; address: string; qr: string }> = {
  btc: {
    name: "Bitcoin",
    address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
    qr: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23fff'/%3E%3Cpath d='M20,20h20v20h-20z M40,20h20v20h-20z M60,20h20v20h-20z M80,20h20v20h-20z M100,20h20v20h-20z M120,20h20v20h-20z M140,20h20v20h-20z M20,40h20v20h-20z M140,40h20v20h-20z M20,60h20v20h-20z M60,60h20v20h-20z M80,60h20v20h-20z M100,60h20v20h-20z M140,60h20v20h-20z M20,80h20v20h-20z M60,80h20v20h-20z M80,80h20v20h-20z M100,80h20v20h-20z M140,80h20v20h-20z M20,100h20v20h-20z M60,100h20v20h-20z M80,100h20v20h-20z M100,100h20v20h-20z M140,100h20v20h-20z M20,120h20v20h-20z M140,120h20v20h-20z M20,140h20v20h-20z M40,140h20v20h-20z M60,140h20v20h-20z M80,140h20v20h-20z M100,140h20v20h-20z M120,140h20v20h-20z M140,140h20v20h-20z M60,160h20v20h-20z M100,160h20v20h-20z M120,160h20v20h-20z' fill='%23000'/%3E%3C/svg%3E",
  },
  eth: {
    name: "Ethereum",
    address: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
    qr: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23fff'/%3E%3Cpath d='M20,20h20v20h-20z M40,20h20v20h-20z M60,20h20v20h-20z M80,20h20v20h-20z M100,20h20v20h-20z M120,20h20v20h-20z M140,20h20v20h-20z M20,40h20v20h-20z M140,40h20v20h-20z M20,60h20v20h-20z M60,60h20v20h-20z M80,60h20v20h-20z M100,60h20v20h-20z M140,60h20v20h-20z M20,80h20v20h-20z M60,80h20v20h-20z M80,80h20v20h-20z M100,80h20v20h-20z M140,80h20v20h-20z M20,100h20v20h-20z M60,100h20v20h-20z M80,100h20v20h-20z M100,100h20v20h-20z M140,100h20v20h-20z M20,120h20v20h-20z M140,120h20v20h-20z M20,140h20v20h-20z M40,140h20v20h-20z M60,140h20v20h-20z M80,140h20v20h-20z M100,140h20v20h-20z M120,140h20v20h-20z M140,140h20v20h-20z M40,160h20v20h-20z M80,160h20v20h-20z M120,160h20v20h-20z' fill='%23000'/%3E%3C/svg%3E",
  },
  usdc: {
    name: "USD Coin",
    address: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
    qr: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23fff'/%3E%3Cpath d='M20,20h20v20h-20z M40,20h20v20h-20z M60,20h20v20h-20z M80,20h20v20h-20z M100,20h20v20h-20z M120,20h20v20h-20z M140,20h20v20h-20z M20,40h20v20h-20z M140,40h20v20h-20z M20,60h20v20h-20z M60,60h20v20h-20z M80,60h20v20h-20z M100,60h20v20h-20z M140,60h20v20h-20z M20,80h20v20h-20z M60,80h20v20h-20z M80,80h20v20h-20z M100,80h20v20h-20z M140,80h20v20h-20z M20,100h20v20h-20z M60,100h20v20h-20z M80,100h20v20h-20z M100,100h20v20h-20z M140,100h20v20h-20z M20,120h20v20h-20z M140,120h20v20h-20z M20,140h20v20h-20z M40,140h20v20h-20z M60,140h20v20h-20z M80,140h20v20h-20z M100,140h20v20h-20z M120,140h20v20h-20z M140,140h20v20h-20z M80,160h20v20h-20z M100,160h20v20h-20z M140,160h20v20h-20z' fill='%23000'/%3E%3C/svg%3E",
  },
  usdt: {
    name: "Tether",
    address: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
    qr: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23fff'/%3E%3Cpath d='M20,20h20v20h-20z M40,20h20v20h-20z M60,20h20v20h-20z M80,20h20v20h-20z M100,20h20v20h-20z M120,20h20v20h-20z M140,20h20v20h-20z M20,40h20v20h-20z M140,40h20v20h-20z M20,60h20v20h-20z M60,60h20v20h-20z M80,60h20v20h-20z M100,60h20v20h-20z M140,60h20v20h-20z M20,80h20v20h-20z M60,80h20v20h-20z M80,80h20v20h-20z M100,80h20v20h-20z M140,80h20v20h-20z M20,100h20v20h-20z M60,100h20v20h-20z M80,100h20v20h-20z M100,100h20v20h-20z M140,100h20v20h-20z M20,120h20v20h-20z M140,120h20v20h-20z M20,140h20v20h-20z M40,140h20v20h-20z M60,140h20v20h-20z M80,140h20v20h-20z M100,140h20v20h-20z M120,140h20v20h-20z M140,140h20v20h-20z M20,160h20v20h-20z M60,160h20v20h-20z M100,160h20v20h-20z M140,160h20v20h-20z' fill='%23000'/%3E%3C/svg%3E",
  },
};

export default function PaymentCrypto() {
  const { crypto } = useParams<{ crypto: string }>();
  const data = crypto ? cryptoData[crypto] : null;

  if (!data) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-foreground">Invalid Cryptocurrency</h1>
      </div>
    );
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(data.address);
    toast.success("Address copied to clipboard");
  };

  const handleTelegram = () => {
    const message = `Payment for ${data.name}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://t.me/pyongmint_bot?start=${encodedMessage}`, "_blank");
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">{data.name} Payment</h1>
          <p className="text-xl text-accent font-bold">Scan. Pay. Forward.</p>
        </div>

        <Card className="paper-twist border-border bg-card">
          <CardContent className="p-8 space-y-6">
            {/* QR Code */}
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-white p-4 rounded-lg paper-twist">
                <img src={data.qr} alt="Payment QR Code" className="w-full h-full" />
              </div>
            </div>

            {/* Wallet Address */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Wallet Address</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={data.address}
                  readOnly
                  className="flex-1 bg-input text-foreground px-4 py-2 rounded-lg font-mono text-sm"
                />
                <Button onClick={handleCopy} size="icon" variant="outline">
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Telegram Button */}
            <Button
              onClick={handleTelegram}
              size="lg"
              className="w-full bg-primary hover:bg-primary/90"
            >
              Contact via Telegram
            </Button>

            {/* Instructions */}
            <div className="text-center space-y-2 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                After completing the transaction, contact our secure Telegram channel to confirm your payment.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
