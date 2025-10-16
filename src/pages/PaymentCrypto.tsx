import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useState } from "react";

const cryptoData: Record<string, { name: string; address: string; qr: string }> = {
  btc: {
    name: "Bitcoin",
    address: "bc1qyylx77zjsnme7myg2gs5tuv5yscapesjgzwhp2",
    qr: "/images/QR-BTC.png",
  },
  eth: {
    name: "Ethereum",
    address: "0x1638943DD35ce2E99b595826d1F7d4C5A9a49b3b",
    qr: "/images/QR-ETH.png",
  },
  usdc: {
    name: "USD Coin",
    address: "0x1638943DD35ce2E99b595826d1F7d4C5A9a49b3b",
    qr: "/images/QR-USDC-BEP20.png",
  },
  usdt: {
    name: "Tether",
    address: "TSiKwQ7C6e3ZtJXbbojqKo13HGiFs18t5K",
    qr: "/images/QR-USDT-TRC20.png",
  },
};

export default function PaymentCrypto() {
  const { crypto } = useParams<{ crypto: string }>();
  const data = crypto ? cryptoData[crypto] : null;
  const [transactionLink, setTransactionLink] = useState("");

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

  const handleForwardTransaction = () => {
    if (!transactionLink.trim()) {
      toast.error("Please enter your transaction link");
      return;
    }

    const message = `🔐 Vault Dispatch Request\nCrypto: ${data.name}\nTX Link: ${transactionLink}`;
    const encoded = encodeURIComponent(message);
    const telegramLink = `https://t.me/pyongmbot?start=${encoded}`;

    window.open(telegramLink, "_blank", "noopener,noreferrer");
    toast.success("Opening Telegram for encrypted dispatch");
    window.scrollTo({ top: 0, behavior: "smooth" });
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

            {/* Transaction Confirmation */}
            <div className="pt-6 border-t border-border">
              <h3 className="font-bold mb-4">{data.name} Transaction Confirmation Link</h3>
              <div className="space-y-3">
                <div>
                  <Label htmlFor="tx-link">Enter your transaction confirmation</Label>
                  <Input
                    id="tx-link"
                    placeholder={`Paste your ${data.name} transaction link`}
                    value={transactionLink}
                    onChange={(e) => setTransactionLink(e.target.value)}
                    className="rounded-[12px] mt-2"
                  />
                </div>
                <Button
                  onClick={handleForwardTransaction}
                  className="w-full rounded-[18px] hover-scale paper-twist"
                >
                  🔗 Forward Transaction Link
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="p-6 rounded-[16px] border-border bg-card">
          <h3 className="text-lg font-bold mb-3">Payment Instructions</h3>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li>• Send the exact amount to the wallet address above</li>
            <li>• Copy your transaction confirmation link</li>
            <li>• Paste and forward it using the form above</li>
            <li>• Vault coordination and delivery details will follow via encrypted channels</li>
            <li>• No smart contracts. No confirmations. No fee talk. Just delivery.</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
