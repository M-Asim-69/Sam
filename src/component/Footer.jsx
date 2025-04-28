import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-6">
        {/* Top Section: About Us & Quick Links Side by Side */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* About Section (Left Side) */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-white">About Us</h2>
            <p className="mt-4 text-gray-400">
              We are committed to delivering high-quality solutions, offering
              services that help businesses grow in the digital world.
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-white">Address</h1>
            <p className="mt-2 text-gray-400">
              1265 North St, Fremont, OH 43420
            </p>
          </div>

          {/* Quick Links Section (Right Side) */}
          <div className="md:w-1/3">
            <h2 className="text-2xl font-semibold text-white">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/About">About</FooterLink>
              <FooterLink href="/Contact">Contact US</FooterLink>
              <FooterLink href="/Refund">Refund & Policy</FooterLink>
              <FooterLink href="/Terms&Condition">Term & Condition</FooterLink>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 text-center border-t border-gray-700 pt-6">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} SAM INVESTING SERVICE LLC. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}

// Reusable Footer Link Component
const FooterLink = ({ href, children }) => (
  <li>
    <Link href={href} className="hover:text-gray-300 transition duration-300">
      {children}
    </Link>
  </li>
);
