import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const SocialProof = () => {
  const logos = PlaceHolderImages.filter(img => img.id.startsWith('socialProofLogo'));

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h3 className="text-center text-sm font-semibold text-foreground/60 tracking-wider">
          TRUSTED BY 10,000+ BRANDS THAT MOVE FAST
        </h3>
        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-2 place-items-center gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-5">
          {logos.map(logo => (
            <div key={logo.id} className="relative h-10 w-36">
              <Image
                src={logo.imageUrl}
                alt={logo.description}
                data-ai-hint={logo.imageHint}
                fill
                className="object-contain opacity-60 transition-opacity hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
