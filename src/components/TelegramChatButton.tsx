import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TelegramChatButton() {
  const handleClick = () => {
    window.open("https://t.me/pyongmbot", "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      onClick={handleClick}
      aria-label="Chat with PyongMint Bot"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#1f1f1f] shadow-[0_0_2.3px_#c8f051] animate-[bounce_2.5s_ease-in-out_infinite] p-0"
    >
      <img
        src="/images/agent39.png"
        alt="PyongMint Bot Avatar"
        className="w-full h-full object-cover rounded-full"
      />
    </Button>
  );
}
