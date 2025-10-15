import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Payment() {
  const cryptos = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      image: "/images/cryptopay.png",
      path: "/payment/btc",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      image: "/images/Eth.png",
      path: "/payment/eth",
    },
    {
      name: "USD Coin",
      symbol: "USDC",
      image: "/images/USDC.png",
      path: "/payment/usdc",
    },
    {
      name: "Tether",
      symbol: "USDT",
      image: "/images/Usdt.png",
      path: "/payment/usdt",
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
          <Link key={crypto.symbol} to={crypto.path} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Card className="paper-twist border-border bg-card hover:signal-glow transition-all duration-300 hover:scale-105 cursor-pointer frame-bounce shadow-[0_0_20px_rgba(200,240,81,0.6)]">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                  <img
                    src={crypto.image}
                    alt={`${crypto.name} icon`}
                    className="w-8 h-8 object-contain"
                  />
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
        <Card className="paper-twist border-border bg-card frame-bounce shadow-[0_0_20px_rgba(200,240,81,0.6)]">
          <CardContent className="p-8 space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Encrypted Transactions Only</h2>
            <p className="text-muted-foreground">
              All payments are processed through secure cryptocurrency networks. No fiat currencies accepted. 
              No smart contracts. Direct wallet-to-wallet transfers only. This gateway honors sovereignty, privacy, and mythic precision.
 
            </p>
            <div className="pt-4">
              <Link to="/order" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
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
