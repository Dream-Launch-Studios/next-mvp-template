// import Image from "next/image";
import Link from "next/link";
import { LinkedinIcon, TwitterIcon } from "lucide-react";


export default async function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm">
                As an AI-first company, DreamLaunch collaborates with industry leaders to uncover innovation opportunities by developing and disrupting products that drive significant business impact.
              </p>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-gray-400 uppercase text-sm mb-4">Links</h3>
            <div className="space-y-2">
              <Link href="/careers" className="block text-sm hover:text-blue-500">Careers</Link>
              <Link href="/contact-us" className="block text-sm hover:text-blue-500">Contact us</Link>
              <Link href="/privacy-policy" className="block text-sm hover:text-blue-500">Privacy Policy</Link>
            </div>
          </div>

          {/* Practices Section */}
          <div>
            <h3 className="text-gray-400 uppercase text-sm mb-4">Practices</h3>
            <div className="space-y-2">
              <Link href="/consulting" className="block text-sm hover:text-blue-500">Consulting</Link>
              <Link href="/research" className="block text-sm hover:text-blue-500">Research</Link>
              <Link href="/design" className="block text-sm hover:text-blue-500">Design</Link>
              <Link href="/engineering" className="block text-sm hover:text-blue-500">Engineering</Link>
              <Link href="/analytics" className="block text-sm hover:text-blue-500">Analytics</Link>
            </div>
          </div>

          {/* Our Presence Section */}
          <div>
            <h3 className="text-gray-400 uppercase text-sm mb-4">Our Presence</h3>
            <div className="space-y-2">
              <p className="block text-sm hover:text-blue-500">USA</p>
              <p className="block text-sm hover:text-blue-500">Dubai</p>
              <p className="block text-sm hover:text-blue-500">India</p>
            </div>
            <div className="mt-8 gap-2">
              <p className="text-sm">Say hello</p>
              <a href="mailto:connect@dreamlaunch.studio" className="text-md text-blue-500 hover:text-blue-400 mt-2">connect@dreamlaunch.studio</a>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">To be updated with our latest insights join us</h2>
          <form className="flex gap-2 max-w-md">
            <input
              type="email"
              placeholder="Your Email ID"
              className="flex-1 bg-transparent border border-gray-600 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-white text-[#0A0F24] px-6 py-2 rounded hover:bg-gray-200 transition-colors"
            >
              →
            </button>
          </form>
        </div>

        {/* Copyright Section */}
        <div className="flex flex-row justify-between  w-full mt-12 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()}. All Rights Reserved</p>
          <div className="flex gap-4">
            <Link href="https://www.x.com/dreamlaunchhq">
            <TwitterIcon className="w-6 h-6 text-gray-400" />
            </Link>
            <Link href="https://www.linkedin.com/company/dream-launch-studios">
            <LinkedinIcon className="w-6 h-6 text-gray-400" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
