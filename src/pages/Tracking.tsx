"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plane, MapPin, Package, Lock } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabaseClient";

const noteIcons: Record<string, any> = {
  "✈️": Plane,
  "📍": MapPin,
  "📦": Package,
  "🔒": Lock,
};

const statusIcons: Record<string, any> = {
  Dispatched: Plane,
  "In Transit": MapPin,
  Delivered: Package,
  "Final Seal": Lock,
};

export default function Tracking() {
  const [orderId, setOrderId] = useState("");
  const [trackingData, setTrackingData] = useState<any>(null);
  const [isTracking, setIsTracking] = useState(false);

  const handleTrack = async () => {
    if (!orderId.trim()) {
      toast.error("Please enter your order ID");
      return;
    }

    setIsTracking(true);

    const { data, error } = await supabase
      .from("consignments")
      .select("*")
      .eq("order_id", orderId.trim())
      .limit(1)
      .single();

    setIsTracking(false);

    if (error || !data) {
      toast.error("No dispatch record found for this Order ID.");
      return;
    }

    let parsedNotes = [];
    try {
      parsedNotes =
        typeof data.notes === "string" ? JSON.parse(data.notes) : data.notes;
    } catch {
      parsedNotes = [];
    }

    setTrackingData({
      status: data.status,
      notes: parsedNotes,
      subject: data.sender_name,
      signal_handle: data.signal_handle,
      matrix_id: data.matrix_id,
      verified_by: data.verification_status,
      timeline: Array.isArray(data.timeline)
        ? data.timeline
        : [
            {
              status: data.status,
              date: new Date().toLocaleString(),
              completed: true,
            },
          ],
      estimatedDelivery: data.estimated_delivery || "TBD",
      vaultDrop: data.vault_drop || "Secure Vault",
    });

    toast.success("Package located");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Dispatched":
        return "#97e2f7";
      case "In Transit":
        return "#c8f051";
      case "Delivered":
        return "#fad87b";
      default:
        return "#a0a0a0";
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            Track Your Order
          </h1>
          <p className="text-xl text-muted-foreground">
            Enter your order ID to track package status
          </p>
        </div>

        {/* Input */}
        <Card className="paper-twist border-border bg-card frame-bounce shadow-[0_0_20px_rgba(250,216,123,0.6)]">
          <CardContent className="p-8 space-y-4">
            <label className="text-sm font-medium text-[#fad87b]">
              🚚 Enter Your Vault Order ID
            </label>
            <div className="flex flex-col gap-3">
              <Input
                type="text"
                placeholder="Enter your order ID"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="w-full bg-input text-foreground ring-2 ring-[#fad87b] focus:ring-[#fad87b]"
              />
              <Button
                onClick={handleTrack}
                disabled={isTracking}
                className="bg-[#1f1f1f] hover:bg-[#2a2a2a] w-full shadow-[0_0_15px_#fad87b] text-white flex items-center justify-center gap-2"
              >
                <Plane className="w-5 h-5" />
                {isTracking ? (
                  <span style={{ color: "#f9ad36" }}>Tracking Package...</span>
                ) : (
                  "Track Package"
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Display */}
        {trackingData && (
          <>
            {/* Receiver */}
            <Card className="paper-twist border-border bg-card frame-bounce shadow-[0_0_20px_rgba(200,240,81,0.6)]">
              <CardContent className="p-4 text-center">
                <p className="text-sm">
                  <span className="font-bold text-[1.05rem]">Receiver:</span>{" "}
                  <span
                    className="font-bold text-[1.05rem]"
                    style={{ color: "#95fab9" }}
                  >
                    {trackingData.subject}
                  </span>
                </p>
              </CardContent>
            </Card>

            {/* Status */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">
                Current Status
              </p>
              <p
                className="text-3xl font-bold"
                style={{ color: getStatusColor(trackingData.status) }}
              >
                {trackingData.status}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Estimated Delivery: {trackingData.estimatedDelivery}
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              {trackingData.timeline.map((item: any, index: number) => {
                const Icon = statusIcons[item.status] || Lock;
                const color = getStatusColor(item.status);
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: `${color}33`,
                        color: color,
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold" style={{ color }}>
                        {item.status}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.date}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Vault Drop */}
            <Card className="paper-twist border-border bg-card frame-bounce shadow-[0_0_15px_#fad87b]">
              <CardContent className="p-4 text-center">
                <p className="text-sm">
                  <span className="font-bold">Vault-Drop Option:</span>{" "}
                  {trackingData.vaultDrop}
                </p>
              </CardContent>
            </Card>

            {/* Notes */}
            {trackingData.notes.length > 0 && (
              <Card className="paper-twist border-border bg-card frame-bounce shadow-[0_0_15px_#fad87b]">
                <CardContent className="p-4 space-y-6">
                  {trackingData.notes.map((note: any, idx: number) => {
                    const Icon = noteIcons[note.icon] || Package;
                    const isAirDispatch =
                      note.label === "Mode" && note.value === "Air Dispatch";
                    const color = isAirDispatch ? "#fad87b" : note.color;
                    return (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white">
                          <Icon className="w-4 h-4" style={{ color }} />
                        </div>
                        <span className="text-sm font-semibold">
                          {note.label}:
                        </span>
                        <span
                          className="text-sm font-bold"
                          style={{ color: color }}
                        >
                          {note.value}
                        </span>
                      </div>
                    );
                  })}

{/* Supernote Panel */}
{trackingData.notes.some((n: any) => n.label === "Mode" && n.value === "Air Dispatch") && (
  <div className="mt-8 space-y-6 text-[#a7fdfc]">
    {/* Supernote Image */}
    <div className="w-full rounded-lg overflow-hidden">
      <img
        src="/images/SuperNote1.png"
        alt="Supernote"
        className="w-full h-auto object-cover rounded-lg shadow-[0_0_8px_#c8f051]"
      />
    </div>
  </div>
)}

                  {/* Mythic Feature Grid */}
                  {trackingData.notes.some(
                    (n: any) => n.label === "Mode" && n.value === "Air Dispatch"
                  ) && (
                    <div className="mt-8 space-y-6 text-[#fad87b]">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                        {[
                          [
                            "1️⃣",
                            "Security Thread",
                            "Encrypted lineage—glows under scrutiny, loyal to the vault",
                          ],
                          [
                            "2️⃣",
                            "3-D Ribbon",
                            "Multidimensional verification—shifts with perspective, never static",
                          ],
                          [
                            "3️⃣",
                            "Color-Shifting Ink",
                            "Adaptive identity—copper to green, truth in transformation",
                          ],
                          [
                            "4️⃣",
                            "Watermark",
                            "Ghost signature—visible only to the initiated",
                          ],
                          [
                            "5️⃣",
                            "Microprinting",
                            "Hidden doctrine—too precise for imitation",
                          ],
                          [
                            "6️⃣",
                            "Raised Printing",
                            "Tactile authority—feel the legend",
                          ],
                          [
                            "7️⃣",
                            "Security Fibers",
                            "Threaded DNA—woven mythos across the surface",
                          ],
                          [
                            "8️⃣",
                            "Serial Numbers",
                            "Unique bloodline—each note a sovereign entity",
                          ],
                          [
                            "9️⃣",
                            "Treasury Seal",
                            "Sanctioned by the mythic order",
                          ],
                          [
                            "🔟",
                            "Fed Identifier",
                            "Origin glyph—traces back to the source temple",
                          ],
                          [
                            "11️⃣",
                            "Series Year",
                            "Chrono-stamp—marks the era of emergence",
                          ],
                          [
                            "12️⃣",
                            "Gold “100”",
                            "Visual dominance—instantly recognized by all tribes",
                          ],
                        ].map(([arrow, feature, reframe], i) => (
                          <div
                            key={i}
                            className="flex flex-col gap-1 bg-[#1f1f1f] p-4 rounded-lg shadow-[0_0_3px_#c8f051]"
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{arrow}</span>
                              <span className="font-bold text-[#fad87b]">
                                {feature}
                              </span>
                            </div>
                            <p className="text-[#fad87b]">{reframe}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </>
        )}


 <div>
              <h3 className="text-xl font-bold mb-2 text-[#ff7d6c] tracking-wide">
                Sovereign Dispatch Policy
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                All Supernote consignments are governed by PyongMint’s encrypted dispatch
                framework. Coordinates and vault access are only exchanged through
                pre-verified secure channels.
              </p>
            </div>

      </div>
    </div>
  );
}
