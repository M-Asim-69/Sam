"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    setLoading(false);
    setSuccess(result.success ? "Message Sent!" : "Error sending message.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-6">
      <div className="w-full max-w-3xl p-8 bg-gray-800 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-6">Contact Us</h2>
        <p className="text-center text-gray-400 mb-6">
          Have any questions? Fill out the form and we'll get back to you shortly!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-all"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {success && (
          <p className={`text-center mt-4 ${success.includes("Error") ? "text-red-400" : "text-green-400"}`}>
            {success}
          </p>
        )}
      </div>
    </div>
  );
}
