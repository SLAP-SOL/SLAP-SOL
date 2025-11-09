import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function MemeGallery() {
  const memeImages = [
    {
      src: '/assets/generated/meme-placeholder-1.dim_400x400.png',
      alt: 'Meme 1',
    },
    {
      src: '/assets/generated/meme-placeholder-2.dim_400x400.png',
      alt: 'Meme 2',
    },
    {
      src: '/assets/generated/meme-placeholder-3.dim_400x400.png',
      alt: 'Meme 3',
    },
  ];

  return (
    <Card className="w-full backdrop-blur-sm bg-card/80 border-border/50 shadow-xl">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          Meme Gallery
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {memeImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg border border-border/50 bg-muted/30 aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
