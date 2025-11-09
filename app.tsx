import { Header } from './components/Header';
import { SocialLinks } from './components/SocialLinks';
import { MemeStory } from './components/MemeStory';
import { PurchaseInfo } from './components/PurchaseInfo';
import { MemeGallery } from './components/MemeGallery';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-background to-muted/20">
      <Header />
      <main className="flex-1 w-full px-4 py-8 space-y-16">
        <div className="container max-w-4xl mx-auto">
          <SocialLinks />
        </div>
        <div className="container max-w-4xl mx-auto">
          <MemeStory />
        </div>
        <div className="container max-w-4xl mx-auto">
          <PurchaseInfo />
        </div>
        <div className="container max-w-6xl mx-auto">
          <MemeGallery />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
