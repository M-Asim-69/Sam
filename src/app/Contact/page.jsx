export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white px-6 py-12">
      <div className="w-full max-w-xl p-10 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 text-center">
        <h2 className="text-5xl font-extrabold text-blue-400 mb-6">Contact Us</h2>
        <p className="text-lg text-gray-300 mb-8">
          Have any questions? Feel free to reach out, and we'll get back to you as soon as possible.
        </p>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 shadow-md">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">Email Us</h3>
          <p className="text-lg text-gray-300 font-semibold">
            <span className="block text-blue-400 hover:text-blue-300 transition">
              Info@rankingeico.com
            </span>
            <span className="block text-blue-400 hover:text-blue-300 transition">
              admin@rankingeico.com
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
