import Link from "next/link";

export default async function Navbar() {
  return (
    <nav className="bg-black py-8 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">MVP Name</h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-white hover:text-gray-300 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/sign-in" className="text-white hover:text-gray-300 transition">
              Sign In
            </Link>
          </li>
          <li>
            <Link href="/sign-up" className="text-white hover:text-gray-300 transition">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
