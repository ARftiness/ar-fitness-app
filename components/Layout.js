// components/Layout.js
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png"; //C:\Users\Austin Richard\OneDrive - GFP Enterprises\Desktop\ar FITNESS.jpg

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-accent">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-secondary">
        <Link href="/">
          <a className="flex items-center">
            <Image src={logo} alt="AR Fitness" width={40} height={40} />
            <span className="ml-2 text-xl font-bold text-primary">AR Fitness</span>
          </a>
        </Link>
        <div className="space-x-4">
          <Link href="/"><a className="hover:text-primary">Home</a></Link>
          <Link href="/history"><a className="hover:text-primary">History</a></Link>
          <Link href="/about"><a className="hover:text-primary">About</a></Link>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="text-center py-4 bg-secondary">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} AR Fitness. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
