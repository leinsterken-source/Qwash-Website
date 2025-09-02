import React from "react";
import { motion } from "framer-motion";
import { Sun, Droplet } from "lucide-react";

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">Qwash</h1>
        <p className="mt-4 text-xl">Power Washing for Gardens & Buildings Across Ireland</p>
      </section>

      {/* About Section */}
      <section className="py-16 px-8 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Based in Laois, Serving All Ireland</h2>
        <p>
          Being centrally located in the Midlands means we can reach the four corners of Ireland in a single day.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-8">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-xl shadow">
            <Sun className="mx-auto mb-4" size={48} />
            <h3 className="text-xl font-bold mb-2">Building Power Washing</h3>
            <p>We clean facades, walls, driveways, and more with professional equipment.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-xl shadow">
            <Droplet className="mx-auto mb-4" size={48} />
            <h3 className="text-xl font-bold mb-2">Garden & Yard Cleaning</h3>
            <p>We remove moss, algae, and grime to make gardens sparkle again.</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Before & After</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <img src="https://source.unsplash.com/300x200/?garden,clean" alt="Cleaned Yard 1" className="rounded-lg" />
          <img src="https://source.unsplash.com/300x200/?building,clean" alt="Cleaned Yard 2" className="rounded-lg" />
          <img src="https://source.unsplash.com/300x200/?driveway,clean" alt="Cleaned Yard 3" className="rounded-lg" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Get a Quote</h2>
        <p className="mb-6">Call us at 086-XXXXXXX or email info@qwash.ie</p>
        <a href="mailto:info@qwash.ie" className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100">
          Contact Us
        </a>
      </section>
    </div>
  );
}
