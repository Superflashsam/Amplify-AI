import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    id: 'testimonialAuthor1',
    quote: "AmplifyAI has been a game-changer for our content strategy. We're creating higher quality content in a fraction of the time. Our engagement has skyrocketed!",
    name: 'Sarah Johnson',
    title: 'Marketing Director, Nova Solutions',
  },
  {
    id: 'testimonialAuthor2',
    quote: "As an agency, managing multiple brand voices was our biggest challenge. Amplify's Brand DNA feature is pure magic. It's like having a dedicated strategist for each client.",
    name: 'Michael Chen',
    title: 'Founder, Digital Growth Co.',
  },
  {
    id: 'testimonialAuthor3',
    quote: "The analytics and AI feedback loop are incredibly powerful. We're no longer guessing what works. We're making data-driven decisions that deliver real ROI.",
    name: 'Emily Rodriguez',
    title: 'CEO, Bloom Ventures',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-background/70">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold font-display">
            Trusted by Brands That Move Fast
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Hear from marketing leaders who are scaling their brands with AmplifyAI.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => {
            const authorImage = PlaceHolderImages.find(img => img.id === testimonial.id);
            return (
              <Card key={testimonial.name} className="flex flex-col justify-between bg-card/80 p-6 backdrop-blur-sm">
                <CardContent className="p-0">
                  <p className="text-base text-foreground/90">"{testimonial.quote}"</p>
                </CardContent>
                <div className="mt-6 flex items-center gap-4">
                  {authorImage && (
                    <div className="relative h-12 w-12 shrink-0">
                      <Image
                        src={authorImage.imageUrl}
                        alt={testimonial.name}
                        data-ai-hint={authorImage.imageHint}
                        className="rounded-full object-cover"
                        fill
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-foreground font-display">{testimonial.name}</p>
                    <p className="text-sm text-foreground/70">{testimonial.title}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
