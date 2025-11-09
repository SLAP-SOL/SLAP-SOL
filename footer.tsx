import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full py-8 px-4 border-t border-border/50">
      <div className="container max-w-4xl mx-auto">
        <p className="text-center text-sm text-muted-foreground">
          © 2025. Built with{' '}
          <Heart className="inline w-4 h-4 text-destructive fill-destructive animate-pulse" />{' '}
          using{' '}
          <a
            href="https://caffeine.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
