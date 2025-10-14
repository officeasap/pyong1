import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plane, MapPin, Package, Lock } from "lucide-react";
import { toast } from "sonner";

export default function Tracking() {
  const [orderId, setOrderId] = useState("");
  const [tracking, setTracking] = useState<any>(null);

  const handleTrack = () => {
    if (!orderId.trim()) {
      toast.error("Please enter an order ID");
      return;
    }

    // Mock tracking data
    setTracking({
      id: orderId,
      status: "vault-drop",
      timeline: [
        { stage: "Air Dispatch", icon: Plane, completed: true },
        { stage: "Vault-Drop", icon: MapPin, completed: true },
        { stage: "Secured Package", icon: Package, completed: false },
        { stage: "Final Seal", icon: Lock, completed: false },
      ],
    });

    toast.success("Package located");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">Track Your Order</h1>
          <p className="text-xl text-muted-foreground">
            Enter your order ID to track package status
          </p>
        </div>

        {/* Order ID Input */}
        <Card className="paper-twist border-border bg-card frame-bounce shadow-[0_0_20px_rgba(200,240,81,0.6)]">
          <CardContent className="p-8 space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Order ID</label>
              <div className="flex flex-col gap-3">
                <Input
                  type="text"
                  placeholder="Enter your order ID"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  className="w-full bg-input text-foreground"
                />
                <Button onClick={handleTrack} className="bg-primary hover:bg-primary/90 w-full">
                  Track Package
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tracking Timeline */}
        {tracking && (
          <Card className="paper-twist border-border bg-card frame-bounce shadow-[0_0_20px_rgba(200,240,81,0.6)]">
            <CardContent className="p-8 space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-foreground mb-2">Package Status</h2>
                <p className="text-sm text-muted-foreground">Order ID: {tracking.id}</p>
              </div>

              <div className="space-y-4">
                {tracking.timeline.map((item: any, index: number) => (
                  <div key={index} className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                        item.completed ? "bg-primary/20" : "bg-muted"
                      }`}
                    >
                      <item.icon
                        className={`w-6 h-6 ${
                          item.completed ? "text-primary" : "text-muted-foreground"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <p
                        className={`font-medium ${
                          item.completed ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {item.stage}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.completed ? "Completed" : "Pending"}
                      </p>
                    </div>
                    {index < tracking.timeline.length - 1 && (
                      <div
                        className={`h-8 w-0.5 ml-6 ${
                          item.completed ? "bg-primary" : "bg-border"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Security Notice */}
        <Card className="paper-twist border-border bg-card frame-bounce shadow-[0_0_20px_rgba(200,240,81,0.6)]">
          <CardContent className="p-6 text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              📦 All shipments are tracked through encrypted channels
            </p>
            <p className="text-xs text-muted-foreground">
              Vault-drop locations remain classified until final delivery
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
