import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Copy, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export function PurchaseInfo() {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const contractAddresses = [
    { label: 'Ethereum Contract', address: '0x1234567890abcdef1234567890abcdef12345678' },
    { label: 'Solana Contract', address: 'So1ana1234567890abcdef1234567890abcdef12345678' },
  ];

  const handleCopy = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  return (
    <Card className="w-full backdrop-blur-sm bg-card/80 border-border/50 shadow-xl">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          Get Your Tokens
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <p className="text-lg text-foreground/90 mb-6">
            Ready to join the community? Purchase tokens through our official partners.
          </p>
          <Button
            size="lg"
            className="w-full sm:w-auto min-w-[250px] h-14 text-lg font-semibold gap-3 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
            asChild
          >
            <a href="https://example.com/buy" target="_blank" rel="noopener noreferrer">
              Official Purchase Link
              <ExternalLink className="w-5 h-5" />
            </a>
          </Button>
        </div>

        <div className="pt-6 border-t border-border/50">
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            Contract Addresses
          </h3>
          <div className="space-y-3">
            {contractAddresses.map(({ label, address }) => (
              <div
                key={address}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-4 rounded-lg bg-muted/50 border border-border/30"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground/70 mb-1">{label}</p>
                  <p className="text-sm font-mono text-foreground break-all">{address}</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 shrink-0"
                  onClick={() => handleCopy(address)}
                >
                  {copiedAddress === address ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
