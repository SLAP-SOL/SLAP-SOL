import { useQuery } from '@tanstack/react-query';
import { useActor } from '../hooks/useActor';
import { ExternalLink, Loader2 } from 'lucide-react';
import { SiX, SiDiscord } from 'react-icons/si';
import { Button } from './ui/button';

export function SocialLinks() {
  const { actor, isFetching: isActorFetching } = useActor();

  const { data: links, isLoading } = useQuery<Array<[string, string]>>({
    queryKey: ['links'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getLinks();
    },
    enabled: !!actor && !isActorFetching,
  });

  const getIcon = (name: string) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('twitter') || lowerName === 'x') {
      return <SiX className="w-6 h-6" />;
    }
    if (lowerName.includes('discord')) {
      return <SiDiscord className="w-6 h-6" />;
    }
    return <ExternalLink className="w-6 h-6" />;
  };

  const getLabel = (name: string) => {
    const lowerName = name.toLowerCase();
    if (lowerName === 'memedepot') return 'MemeDepot';
    if (lowerName === 'twitter') return 'Twitter';
    if (lowerName === 'discord') return 'Discord';
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold text-center text-foreground mb-6">
        Connect With Us
      </h2>
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch">
        {links?.map(([name, url]) => (
          <Button
            key={name}
            variant="outline"
            size="lg"
            className="flex-1 sm:flex-initial sm:min-w-[180px] justify-start gap-4 h-14 text-base font-medium hover:bg-accent/50 hover:scale-[1.02] transition-all duration-200 group"
            asChild
          >
            <a href={url} target="_blank" rel="noopener noreferrer">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                {getIcon(name)}
              </span>
              <span className="flex-1 text-left">{getLabel(name)}</span>
              <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
}
