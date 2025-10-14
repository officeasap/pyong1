import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

export default function Order() {
  const [customAmount, setCustomAmount] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  
  const customValue = parseFloat(customAmount) || 0;
  const cryptoCharge = customValue * 0.15;
  const chargeDisplay = cryptoCharge;

  const packages = [
    { name: "Operator Pack", quantity: "10 notes", price: "$500", value: "operator" },
    { name: "Elite Pack", quantity: "50 notes", price: "$2,250", value: "elite" },
    { name: "Sovereign Pack", quantity: "100 notes", price: "$4,000", value: "sovereign" },
    { name: "Vault Collection", quantity: "500 notes", price: "$18,000", value: "vault" },
  ];

  const handleOrder = () => {
    if (!selectedPackage && !customAmount) {
      toast.error("Please select a package or enter a custom amount");
      return;
    }

    const message = selectedPackage
      ? `Order: ${packages.find((p) => p.value === selectedPackage)?.name}`
      : `Custom Order: ${customAmount} notes`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://t.me/pyongmint_bot?start=${encodedMessage}`, "_blank");
    toast.success("Opening Telegram for order confirmation");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">Place Your Order</h1>
          <p className="text-xl text-muted-foreground">
            Select a package or specify a custom amount
          </p>
        </div>

        {/* Package Selection */}
        <Card className="paper-twist border-border bg-card frame-bounce shadow-[0_0_20px_rgba(200,240,81,0.6)]">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Standard Packages</h2>
            <div className="space-y-4">
              {packages.map((pkg) => (
                <div 
                  key={pkg.value} 
                  className="flex items-center space-x-4 p-4 rounded-lg border border-border hover:bg-muted/20 transition-colors"
                >
                  <Checkbox
                    id={pkg.value}
                    checked={selectedPackage === pkg.value}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedPackage(pkg.value);
                        setCustomAmount("");
                      } else {
                        setSelectedPackage("");
                      }
                    }}
                  />
                  <Label htmlFor={pkg.value} className="flex-1 cursor-pointer">
                    <div className="font-medium text-foreground">{pkg.name}</div>
                    <div className="text-sm text-muted-foreground">{pkg.quantity}</div>
                  </Label>
                  <div className="text-accent font-bold">{pkg.price}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Custom Amount */}
        <Card className="paper-twist border-border bg-card frame-bounce shadow-[0_0_20px_rgba(200,240,81,0.6)]">
          <CardContent className="p-8 space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Custom Amount</h2>
            <div className="space-y-2 mb-4">
              <Label htmlFor="custom-amount" className="text-sm font-semibold">
                💸 Custom Amount
              </Label>
              <Input
                id="custom-amount"
                type="text"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedPackage("");
                }}
                className="rounded-[12px] text-[#ade5f7]"
              />
            </div>
            
            {customAmount && (
              <div className="mb-6 text-center text-lg font-bold">
                Crypto Charge (15%):{" "}
                <span style={{ color: "#7ef178" }}>
                  ${chargeDisplay.toLocaleString()}
                </span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="text-center">
          <Button onClick={handleOrder} size="lg" className="bg-primary hover:bg-primary/90 crypto-glow">
            Proceed to Telegram Confirmation
          </Button>
        </div>

        {/* Security Notice */}
        <Card className="paper-twist border-border bg-card frame-bounce shadow-[0_0_20px_rgba(200,240,81,0.6)]">
          <CardContent className="p-6 text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              🔒 All orders are processed through our encrypted Telegram channel
            </p>
            <p className="text-xs text-muted-foreground">
              Your security is our priority. Zero-knowledge protocol enforced.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
