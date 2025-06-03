// components/Layout.js
import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-secondary text-accent">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-primary">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <Image src="/logo.png" alt="AR Fitness" width={50} height={50} />
            <span className="ml-3 text-2xl font-bold">AR Fitness</span>
          </div>
        </Link>
        <div className="space-x-6">
          <Link href="/">
            <a className="hover:text-primary-dark">Home</a>
          </Link>
          <Link href="/history">
            <a className="hover:text-primary-dark">History</a>
          </Link>
          <Link href="/about">
            <a className="hover:text-primary-dark">About</a>
          </Link>
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
