
import { galleryImages } from "../data/gallery";

export default function Gallery() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {galleryImages.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt="Work example"
            className="rounded-xl shadow hover:scale-105 transition cursor-pointer"
          />
        ))}
      </div>
    </section>
  );
}
