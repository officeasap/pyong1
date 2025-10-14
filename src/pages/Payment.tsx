import { Link } from "react-router-dom";
import { Bitcoin, DollarSign, Coins } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Payment() {
  const cryptos = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      icon: Bitcoin,
      path: "/payment/btc",
      color: "text-orange-500",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      icon: Coins,
      path: "/payment/eth",
      color: "text-blue-500",
    },
    {
      name: "USD Coin",
      symbol: "USDC",
      icon: DollarSign,
      path: "/payment/usdc",
      color: "text-blue-400",
    },
    {
      name: "Tether",
      symbol: "USDT",
      icon: DollarSign,
      path: "/payment/usdt",
      color: "text-green-500",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground">
          Payment Gateway
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose your preferred cryptocurrency to proceed with secure, encrypted transactions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
        {cryptos.map((crypto) => (
          <Link key={crypto.symbol} to={crypto.path}>
            <Card className="paper-twist border-border bg-card hover:uv-glow transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <crypto.icon className={`w-8 h-8 ${crypto.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{crypto.name}</h3>
                  <p className="text-sm text-muted-foreground">{crypto.symbol}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="max-w-2xl mx-auto text-center">
        <Card className="paper-twist border-border bg-card">
          <CardContent className="p-8 space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Encrypted Transactions Only</h2>
            <p className="text-muted-foreground">
              All payments are processed through secure cryptocurrency networks. No fiat currencies accepted. 
              No smart contracts. Direct wallet-to-wallet transfers only.
            </p>
            <div className="pt-4">
              <Link to="/order">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Proceed to Order
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
