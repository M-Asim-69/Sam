// app/page.js
import Head from "next/head";

export default async function Home() {
  return (
    <>
    
      <header className="bg-gradient-to-r from-blue-600 max-w-full to-indigo-600 text-white pt-26 max-h-90 pb-14">
        <div className="container mx-auto">
          <h1 className="text-3xl text-center pt-6 font-bold">Your SEO Experts</h1>
        </div>
      </header>

      <main className="container bg-gray-950 mx-auto pt-4 px-4 pb-26">     
        {/* Hero Section */}
        <section className="hero  mb-12 relative bg-gradient-to-b from-blue-100 to-blue-300 rounded-lg shadow-lg overflow-hidden">
          <div className="relative text-center text-gray-800 py-40 px-6">
            <h2 className="text-5xl font-extrabold mb-4 text-gray-900 drop-shadow-lg">
              Unlock Your Website's Potential
            </h2>
            <p className="text-xl mb-6 text-gray-700">
              We provide comprehensive SEO services to drive organic traffic and improve your online presence.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full hover:shadow-lg hover:shadow-black transition-transform transform hover:scale-105">
              Get a Free SEO Audit
            </button>
          </div>
        </section>

        {/* Packages Section */}
        <section className="packages mb-12">
          <h2 className="text-4xl font-bold mb-6 text-center text-gray-500">Our Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { name: "Basic SEO", price: "$200", description: "Keyword research, on-page optimization.", bg: "from-blue-500 to-blue-700" },
              { name: "Standard SEO", price: "$500", description: "Everything in Basic + link building.", bg: "from-green-500 to-green-700" },
              { name: "Premium SEO", price: "$1000", description: "Everything in Standard + content creation.", bg: "from-purple-500 to-purple-700" },
              { name: "Enterprise SEO", price: "$1500", description: "Complete SEO solution, custom strategy.", bg: "from-red-500 to-red-700" },
            ].map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-b ${pkg.bg} text-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300`}
              >
                <div className="absolute inset-0 bg-white opacity-10 blur-lg rounded-xl"></div>
                <h3 className="text-2xl font-semibold mb-2 text-center">{pkg.name}</h3>
                <p className="text-sm text-gray-200 text-center mb-4">{pkg.description}</p>
                <p className="text-3xl font-bold text-center">{pkg.price}</p>
                <button className="mt-6 w-full bg-white text-gray-900 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition-all">
                  Choose Plan
                </button>
              </div>
            ))}

            {/* Custom Package */}
            <div className="relative bg-gradient-to-b from-gray-200 to-gray-400 text-gray-900 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-white opacity-20 blur-lg rounded-xl"></div>
              <h3 className="text-2xl font-semibold mb-2 text-center">Custom Package</h3>
              <p className="text-sm text-gray-800 text-center mb-4">
                Tailored SEO solutions for your specific needs.
              </p>
              <button className="mt-6 w-full bg-gray-700 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-gray-800 transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials ">
          <h2 className="text-4xl font-bold mb-6 text-center text-gray-500">What Our Clients Say</h2>
          {/* Add testimonials here */}
        </section>

        {/* Contact Section */}
        <section className="contact">
          <h2 className="text-4xl font-bold text-center text-gray-500">Contact Us</h2>
          {/* Add a contact form */}
        </section>
      </main>
    </>
  );
}
