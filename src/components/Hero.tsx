import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-pickleball.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto animate-fade-in">
        <div className="mb-8">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-black text-white mb-4 tracking-tight uppercase">
            Drop & Reset
          </h1>
          <div className="w-24 h-1 bg-white/80 mx-auto mb-6 rounded-full" />
        </div>
        <p className="text-2xl sm:text-3xl text-white/95 mb-10 font-light tracking-wide">
          Drop the tension. Reset with intention.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="rounded-full text-base px-8 py-6 bg-primary hover:bg-primary/90"
          >
            Join a Session
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full text-base px-8 py-6 bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
          >
            Book a Court
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
