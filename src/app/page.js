import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const seoPackages = [
    {
      name: "Starter Package",
      price: "$200/month",
      features: [
        "Targeted keywords: 10",
        "Total 3000 word count / month",
        "Keyword Research",
        "5 Page optimization",
        "Off-page activities",
        "Ongoing Link Building",
        "Complete on-page optimization",
        "Monthly report",
        "Product / Service Description (3 per month)",
        "Website speed optimization (Quarterly)",
        "Email support",
        "Shared project manager",
        "Meta Tags Optimization",
      ],
      bg: "from-blue-500 to-blue-700",
    },
    {
      name: "Advance Package",
      price: "$350/month",
      features: [
        "Targeted keywords: 25",
        "Page optimization (10 per month)",
        "Ongoing Link Building",
        "Complete on-page optimization",
        "Monthly report",
        "Product / Service Description (10 per month)",
        "Implementation of Schema Markup",
        "HTML Corrections",
        "Content development",
        "2 Blogs per month",
        "Total 5000 word count / month",
        "Speed optimization every month",
        "Core web vital score optimization",
        "Meta Tags Optimization",
        "1 Competitor Analysis",
      ],
      bg: "from-green-500 to-green-700",
    },
    {
      name: "Business Package",
      price: "$500/month",
      features: [
        "Targeted keywords: 40",
        "Page optimization (15 per month)",
        "On-going link building",
        "Complete on-page optimization",
        "Product/Service Description (15 per month)",
        "Implementation of Schema Markup",
        "LSI optimization",
        "Competitor analysis",
        "Page Speed optimization (2 times a month)",
        "3 blogs per month",
        "Total 7500 word count / month",
        "Search Console Audit",
        "Tracking Implementation",
        "Local Business Listings",
        "Meta Tags Optimization",
      ],
      bg: "from-purple-500 to-purple-700",
    },
    {
      name: "Professional Package",
      price: "$750/month",
      features: [
        "Targeted keywords: 50",
        "Page optimization (20 per month)",
        "On-going link building",
        "Complete on-page optimization",
        "Product / Service Description (20 per month)",
        "Page Speed optimization (unlimited)",
        "Core web vital optimization",
        "GMB optimization (With 2 Posts)",
        "4 blogs per month",
        "Total 10000 word count / month",
        "Search Console Audit",
        "SEO Friendly URL Setup",
        "Website Maintenance",
      ],
      bg: "from-red-500 to-red-700",
      popular: true,
    },
    {
      name: "Enterprise Package",
      price: "$1000/month",
      features: [
        "Targeted keywords: 60",
        "Page optimization (30 per month)",
        "On-going link building",
        "GMB optimization + 4 Posts",
        "6 blogs per month",
        "Total 13000 word count / month",
        "Weekly Work Update",
        "Search Console Audit",
        "SEO Site Checkup Score Optimization",
        "Backlink Profile Audit",
        "Google Penalty Recovery",
        "Website Maintenance",
      ],
      bg: "from-gray-500 to-gray-700",
    },
    {
      name: "Elite Package",
      price: "$1500/month",
      features: [
        "Targeted keywords: 75",
        "Page optimization (40 per month)",
        "On-going link building",
        "GMB optimization + 8 Posts",
        "6 blogs per month",
        "Total 17000 word count / Month",
        "Weekly Work Update",
        "SEO Site Checkup Score Optimization",
        "Backlink Profile Audit",
        "Google Penalty Recovery",
        "Website Maintenance",
      ],
      bg: "from-yellow-500 to-yellow-700",
    },
  ];

  return (
    <>
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white pt-26 pb-14">
        <div className="container mx-auto">
          <h1 className="text-3xl text-center pt-6 font-bold">Your SEO Experts</h1>
        </div>
      </header>

      <main className="container bg-gray-950 mx-auto pt-4 px-4 pb-26">
        <section className="hero mb-12 relative bg-gradient-to-b from-blue-100 to-blue-300 rounded-lg shadow-lg overflow-hidden">
          <div className="relative text-center text-gray-800 py-40 px-6">
            <h2 className="text-5xl font-extrabold mb-4 text-gray-900 drop-shadow-lg">
              Unlock Your Website's Potential
            </h2>
            <p className="text-xl mb-6 text-gray-700">
              We provide comprehensive SEO services to drive organic traffic and improve your online presence.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full hover:shadow-lg transition-transform transform hover:scale-105">
              Get a Free SEO Audit
            </button>
          </div>
        </section>

        <section className="packages mb-12">
          <h2 className="text-4xl font-bold mb-6 text-center text-gray-500">Our Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {seoPackages.map((pkg, index) => (
              <div key={index} className={`relative bg-gradient-to-b ${pkg.bg} text-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300`}>
                {pkg.popular && (
                  <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Most Popular</span>
                )}
                <h3 className="text-2xl font-semibold mb-2 text-center">{pkg.name}</h3>
                <p className="text-3xl font-bold text-center">{pkg.price}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center">✅ <span className="ml-2">{feature}</span></li>
                  ))}
                </ul>
              <Link href='/Contact'>  <button className="mt-6 w-full bg-white text-gray-900 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition-all">
                  Get In Touch
                </button></Link>
              </div>
            ))}

            {/* Custom Package Card */}
            <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 text-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-2 text-center">Custom Package</h3>
              <p className="text-lg text-center text-gray-300 mb-4">Tailored SEO solutions for your unique needs.</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>✅ Fully customized strategy</li>
                <li>✅ Dedicated SEO expert</li>
                <li>✅ Advanced competitor analysis</li>
                <li>✅ Personalized content marketing</li>
                <li>✅ Priority support</li>
              </ul>
             <Link href='/Contact'>
             
             <button className="mt-6 w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition-all">
                Contact Us
              </button></Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
