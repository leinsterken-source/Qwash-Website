
export default function Booking() {
  return (
    <section className="py-16 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Book a Service</h2>
      <form
        action="mailto:your@email.com"
        method="POST"
        encType="text/plain"
        className="grid gap-4"
      >
        <input className="border p-3 rounded" placeholder="Name" name="name" required />
        <input className="border p-3 rounded" placeholder="Phone" name="phone" />
        <input className="border p-3 rounded" placeholder="Email" name="email" required />
        <input className="border p-3 rounded" placeholder="Service Required" name="service" />
        <input type="date" className="border p-3 rounded" name="date" />
        <textarea className="border p-3 rounded" placeholder="Message" name="message" />
        <button className="bg-black text-white py-3 rounded font-semibold">
          Submit Booking Request
        </button>
      </form>
    </section>
  );
}
