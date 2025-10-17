const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-8 uppercase tracking-tight">
            Our Story
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full" />
          <p className="text-lg text-foreground/80 leading-relaxed">
            At Drop and Reset, we believe every rally starts with connection — between players,
            friends, and the game itself. Whether you're picking up a paddle for the first time or
            chasing your next win, our sessions bring people together on and off the court. We're
            more than a club; we're a community built on rhythm, flow, and the joy of play.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
