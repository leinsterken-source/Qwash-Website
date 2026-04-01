
import { reviews } from "../data/reviews";

export default function Reviews() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Customer Reviews</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <div className="font-semibold">{r.name}</div>
              <div>{"★".repeat(r.rating)}</div>
              <p className="mt-2 text-gray-600">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
