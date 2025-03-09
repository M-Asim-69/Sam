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
            <div className="mt-4 flex space-x-4">
              <SocialIcon href="https://facebook.com" label="Facebook">
                <FacebookIcon />
              </SocialIcon>
              <SocialIcon href="https://twitter.com" label="Twitter">
                <TwitterIcon />
              </SocialIcon>
              <SocialIcon href="https://linkedin.com" label="LinkedIn">
                <LinkedinIcon />
              </SocialIcon>
              <SocialIcon href="https://github.com" label="GitHub">
                <GithubIcon />
              </SocialIcon>
            </div>
          </div>

          {/* Quick Links Section (Right Side) */}
          <div className="md:w-1/3">
            <h2 className="text-2xl font-semibold text-white">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/About">About</FooterLink>
                <FooterLink href="/Contact">Contact</FooterLink>
            </ul>
          </div>
          
        </div>

  
      </div>

      {/* Bottom Section */}
      <div className="mt-12 text-center border-t border-gray-700 pt-6">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
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

// Reusable Social Media Icon Component
const SocialIcon = ({ href, label, children }) => (
  <Link href={href} target="_blank" aria-label={label} className="hover:scale-110 transition-transform duration-300">
    {children}
  </Link>
);

// Social Media SVG Icons
const FacebookIcon = () => (
  <svg className="w-8 h-8 fill-current text-gray-400 hover:text-white transition" viewBox="0 0 24 24">
    <path d="M22,12A10,10 0 1,0 12,22V14H9V11H12V8.5C12,6 13.5,5 15.5,5A19,19 0 0,1 18,5.2V8H16.5C15.5,8 15,8.5 15,9.5V11H18L17.5,14H15V22A10,10 0 0,0 22,12Z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-8 h-8 fill-current text-gray-400 hover:text-white transition" viewBox="0 0 24 24">
    <path d="M22,5.9A8.3,8.3 0 0,1 19.8,6.7A4.2,4.2 0 0,0 21.4,3.9A8.3,8.3 0 0,1 18.6,5A4.2,4.2 0 0,0 12,9.1A12,12 0 0,1 3.4,5A4.2,4.2 0 0,0 5.4,10A4.1,4.1 0 0,1 2,9.2V9.3A4.2,4.2 0 0,0 5.4,13.3A4.3,4.3 0 0,1 2.9,13.6A4.2,4.2 0 0,0 6.2,17.1A8.5,8.5 0 0,1 2,18A12,12 0 0,0 10.4,20C16.1,20 19.7,14.9 19.7,10.2V9.7A7.5,7.5 0 0,0 22,5.9Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-8 h-8 fill-current text-gray-400 hover:text-white transition" viewBox="0 0 24 24">
    <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M8.1,17H5.7V10H8.1V17M6.9,8.7C6,8.7 5.3,8 5.3,7.1C5.3,6.2 6,5.5 6.9,5.5C7.8,5.5 8.5,6.2 8.5,7.1C8.5,8 7.8,8.7 6.9,8.7M18,17H15.6V13C15.6,12 14.9,11.3 14,11.3C13.1,11.3 12.4,12 12.4,13V17H10V10H12.3V11.1C12.8,10.3 13.8,9.8 14.7,9.8C16.6,9.8 18,11.2 18,13V17Z" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-8 h-8 fill-current text-gray-400 hover:text-white transition" viewBox="0 0 24 24">
    <path d="M12,2A10,10 0 0,0 2,12C2,17 5.4,20.9 10,22V18C7.9,18.3 7.3,17.3 6.6,16.8C6.3,16.6 5.8,16.2 5.5,16.2C5,16.2 4.8,16.6 4.8,16.8C4.8,17 4.8,17.4 5.1,17.8C5.3,18.2 5.9,18.5 6.3,18.7C7,19.1 7.5,19.6 7.9,20.3C8.3,21 9.1,21.5 10.2,21.5C11.3,21.5 12.1,21 12.5,20.3C12.9,19.6 13.4,19.1 14.1,18.7C14.5,18.5 15.1,18.2 15.3,17.8C15.6,17.4 15.6,17 15.6,16.8Z" />
  </svg>
);
