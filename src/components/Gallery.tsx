import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryImages = [
  { src: gallery1, alt: "Pickleball community celebrating together" },
  { src: gallery2, alt: "Pickleball paddle and ball on court" },
  { src: gallery3, alt: "Friends playing doubles pickleball" },
  { src: gallery4, alt: "Aerial view of pickleball court" },
  { src: gallery5, alt: "Players socializing after game" },
  { src: gallery6, alt: "Player practicing serve" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Community in Action
          </h2>
          <p className="text-lg text-foreground/70">
            Moments from our courts and events
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-2xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
