// components/Layout.js
// components/Layout.js
import Image from "next/image";
import Link from "next/link";


export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-accent">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-secondary">
        <Link href="/">
          <a className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="AR Fitness"
              width={40}
              height={40}
            />
            <span className="ml-2 text-xl font-bold text-primary">
              AR Fitness
            </span>
          </a>
        </Link>
        {/* …rest of nav links… */}
      </nav>
      {/* …rest of layout… */}
    </div>
  );
}


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
