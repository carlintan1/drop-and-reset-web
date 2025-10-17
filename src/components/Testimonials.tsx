import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I found my people here! The community is welcoming and the games are always fun.",
    author: "Sarah M.",
    role: "Social Player",
  },
  {
    quote: "Best decision I made this year. The coaching helped me level up my game significantly.",
    author: "James K.",
    role: "Competitive Player",
  },
  {
    quote: "From total beginner to league player in 6 months. The supportive atmosphere makes all the difference.",
    author: "Maya P.",
    role: "All Access Member",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4 uppercase tracking-tight">
            What Our Members Say
          </h2>
          <p className="text-lg text-foreground/80">
            Real stories from our community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-accent rounded-3xl p-8 relative hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-md"
            >
              <Quote className="h-10 w-10 text-primary/30 mb-4" />
              <p className="text-foreground/80 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
