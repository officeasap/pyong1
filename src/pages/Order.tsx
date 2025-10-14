import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function Order() {
  const [customAmount, setCustomAmount] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");

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
        <Card className="paper-twist border-border bg-card">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Standard Packages</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">Package</th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">Quantity</th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">Price</th>
                    <th className="text-center py-4 px-4 text-sm font-medium text-muted-foreground">Select</th>
                  </tr>
                </thead>
                <tbody>
                  {packages.map((pkg) => (
                    <tr key={pkg.value} className="border-b border-border hover:bg-muted/20">
                      <td className="py-4 px-4 font-medium text-foreground">{pkg.name}</td>
                      <td className="py-4 px-4 text-muted-foreground">{pkg.quantity}</td>
                      <td className="py-4 px-4 text-accent font-bold">{pkg.price}</td>
                      <td className="py-4 px-4 text-center">
                        <Button
                          variant={selectedPackage === pkg.value ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedPackage(pkg.value)}
                        >
                          {selectedPackage === pkg.value ? "Selected" : "Select"}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Custom Amount */}
        <Card className="paper-twist border-border bg-card">
          <CardContent className="p-8 space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Custom Amount</h2>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Number of Notes</label>
              <Input
                type="number"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="bg-input text-foreground"
              />
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="text-center">
          <Button onClick={handleOrder} size="lg" className="bg-primary hover:bg-primary/90 crypto-glow">
            Proceed to Telegram Confirmation
          </Button>
        </div>

        {/* Security Notice */}
        <Card className="paper-twist border-border bg-card">
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
