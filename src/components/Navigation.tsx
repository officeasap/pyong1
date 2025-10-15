import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Product", path: "/product" },
    { name: "Payment", path: "/payment" },
    { name: "Order", path: "/order" },
    { name: "Tracking", path: "/tracking" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLinkClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              PyongMint™
            </span>
          </Link>

          {/* Desktop Navigation */}
<div className="hidden md:flex items-center gap-4">
  {navLinks.map((link) => (
    <Link
      key={link.path}
      to={link.path}
      onClick={handleLinkClick}
      className={`text-sm font-medium px-4 py-2 rounded-[18px] bg-[#1f1f1f] text-white shadow-[0_0_3.7px_#c8f051] transition-all duration-300 hover:animate-bounce`}
    >
      {link.name}
    </Link>
  ))}
</div>




          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
     {isOpen && (
  <div className="md:hidden py-4 space-y-2">
    {navLinks.map((link) => (
      <Link
        key={link.path}
        to={link.path}
        onClick={handleLinkClick}
        className="block px-4 py-2 rounded-[18px] bg-[#1f1f1f] text-white shadow-[0_0_3.7px_#c8f051] transition-all duration-300 hover:animate-bounce"
      >
        {link.name}
      </Link>
    ))}
  </div>
)}
      
      </div>
    </nav>
  );
}
