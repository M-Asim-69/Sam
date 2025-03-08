import Head from "next/head";

export default function About() {
  return (
    <>
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white pt-26 pb-14">
        <div className="container mx-auto">
          <h1 className="text-3xl text-center pt-6 font-bold">About Us</h1>
        </div>
      </header>

      <main className="container bg-gray-950 mx-auto pt-4 px-4 pb-26">
        {/* Hero Section */}
        <section className="hero mb-12 relative bg-gradient-to-b from-blue-100 to-blue-300 rounded-lg shadow-lg overflow-hidden">
          <div className="relative text-center text-gray-800 py-24 px-6">
            <h2 className="text-5xl font-extrabold mb-4 text-gray-900 drop-shadow-lg">
              Who We Are
            </h2>
            <p className="text-xl mb-6 text-gray-700 max-w-2xl mx-auto">
              We are a team of dedicated SEO professionals passionate about helping
              businesses grow online through expert optimization strategies.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="mission mb-12 text-center text-gray-300">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Our mission is to empower businesses with cutting-edge SEO strategies
            that boost rankings, drive traffic, and enhance brand visibility.
          </p>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose-us mb-12">
          <h2 className="text-4xl font-bold text-center text-gray-300 mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "Proven Results", desc: "Our SEO strategies deliver measurable success." },
              { title: "Expert Team", desc: "A dedicated team with years of industry experience." },
              { title: "Advanced Tools", desc: "We use cutting-edge tools for maximum impact." },
              { title: "Customized Plans", desc: "SEO strategies tailored to your business needs." },
              { title: "White Hat Techniques", desc: "Ethical SEO that ensures long-term success." },
              { title: "Client-Centric", desc: "Your success is our top priority." },
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 text-white p-6 rounded-xl shadow-lg text-center hover:scale-105 transform transition-all">
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Team Section */}
        <section className="team mb-12">
          <h2 className="text-4xl font-bold text-center text-gray-300 mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {["Alex Johnson", "Sarah Williams", "David Brown"].map((name, index) => (
              <div key={index} className="bg-gradient-to-b from-blue-500 to-blue-700 text-white p-6 rounded-xl shadow-lg text-center hover:scale-105 transform transition-all">
                <h3 className="text-2xl font-semibold mb-2">{name}</h3>
                <p className="text-gray-200">SEO Specialist</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
