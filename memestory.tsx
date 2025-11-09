import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function MemeStory() {
  return (
    <Card className="w-full backdrop-blur-sm bg-card/80 border-border/50 shadow-xl">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          The Story
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-lg text-foreground/90 leading-relaxed">
          In the vast digital landscape of the internet, a legend was born. This meme emerged from the depths of creativity, 
          capturing hearts and minds across the globe. What started as a simple idea quickly evolved into a cultural phenomenon, 
          spreading joy and laughter wherever it went.
        </p>
        <p className="text-lg text-foreground/90 leading-relaxed">
          Through countless iterations and remixes, the meme grew stronger, building a community of passionate supporters 
          who believed in its power to bring people together. Today, it stands as a testament to the creativity and humor 
          that defines internet culture.
        </p>
        <p className="text-lg text-foreground/90 leading-relaxed">
          Join us on this incredible journey as we continue to write the next chapter of this legendary meme's story. 
          Together, we're not just sharing laughs—we're making history.
        </p>
      </CardContent>
    </Card>
  );
}
