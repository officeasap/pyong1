import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TelegramChatButton() {
  const handleClick = () => {
    window.open("https://t.me/pyongmint_bot", "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(200,240,81,0.6)] animate-bounce"
      size="icon"
    >
      <MessageCircle className="w-6 h-6" />
    </Button>
  );
}
