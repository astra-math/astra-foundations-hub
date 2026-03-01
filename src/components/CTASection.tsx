import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="bg-navy section-padding">
      <div className="gold-divider mb-20 md:mb-28" />
      <div className="container-astra text-center">
        <h2 className="font-heading text-3xl md:text-4xl text-cream mb-6">
          Begin the journey
        </h2>
        <p className="text-cream/70 text-lg mx-auto mb-10 max-w-xl">
          Experience the structure and intellectual level of Astra through a live workshop.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button variant="gold" size="lg" asChild>
            <Link to="/workshops">Attend a free workshop</Link>
          </Button>
          <Button variant="outline-gold" size="lg" asChild>
            <Link to="/programs">Explore the programs</Link>
          </Button>
        </div>
        <p className="text-cream/40 text-sm">
          Workshop participation is required prior to enrollment.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
