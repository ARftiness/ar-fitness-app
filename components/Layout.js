// components/Layout.js
import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-secondary text-accent">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-primary">
        {/* Logo + Home Link */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="AR Fitness" width={50} height={50} />
          <span className="ml-3 text-2xl font-bold">AR Fitness</span>
        </Link>

        {/* Nav Links */}
        <div className="space-x-6">
          <Link href="/" className="hover:text-primary-dark">Home</Link>
          <Link href="/history" className="hover:text-primary-dark">History</Link>
          <Link href="/about" className="hover:text-primary-dark">About</Link>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="text-center py-4 bg-primary">
        <p className="text-sm">
          © {new Date().getFullYear()} AR Fitness. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
