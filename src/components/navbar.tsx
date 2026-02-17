"use client";
import { MouseEvent, useEffect, useState } from "react";
import Image from "next/image";
import { X, Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

// Updated to match the image plural "Partners"
type NavItem = "Home" | "About" | "Products" | "Services" | "Award & Partners";

const Navbar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const getActiveFromLocation = (): NavItem => {
    // Non-root pages
    if (pathname === "/products") return "Products";
    if (pathname === "/services") return "Services";

    // Root page with hash-based sections
    if (pathname === "/") {
      if (typeof window !== "undefined") {
        const hash = window.location.hash;
        if (hash === "#about") return "About";
        if (hash === "#award-&-partners") return "Award & Partners";
      }
      return "Home";
    }

    // Fallback
    return "Home";
  };

  const [active, setActive] = useState<NavItem>(() => getActiveFromLocation());
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // All menu items
  const navItems: NavItem[] = [
    "Home",
    "About",
    "Products",
    "Services",
    "Award & Partners",
  ];

  // Sync active state with current route (including reloads and direct links)
  useEffect(() => {
    setActive(getActiveFromLocation());
  }, [pathname]);

  // Update active state when only hash changes on root (back/forward, manual anchors)
  useEffect(() => {
    if (pathname !== "/") return;

    const onHashChange = () => {
      setActive(getActiveFromLocation());
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [pathname]);

  const handleLogoClick = () => {
    if (pathname === "/") {
      const el = document.getElementById("home");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      router.push("/");
    }
  };

  const getHref = (item: NavItem) => {
    switch (item) {
      case "Home":
        return "/#home";
      case "About":
        return "/#about";
      case "Products":
        return "/products";
      case "Services":
        return "/services";
      case "Award & Partners":
        return "/services#award-&-partners";
      default:
        return "/";
    }
  };

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      {/* 
         Floating Navbar Container 
         - Pill shape (rounded-full)
         - Dark background
         - White border
      */}
      <div className="w-full max-w-7xl bg-[#0B0F19]/80 backdrop-blur-md border border-white/20 rounded-3xl px-4 py-3 sm:px-6 sm:py-3 flex items-center justify-between shadow-2xl">

        {/* LOGO SECTION */}
        <Link
          href="/#home"
          onClick={handleLogoClick}
          className="flex items-center gap-3 cursor-pointer shrink-0"
        >
          <Image
            src="/footer/whitelogo.svg"
            alt="Syslab Logo"
            width={32}
            height={32}
            className="w-8 h-8 md:w-9 md:h-9"
          />
          <h3 className="text-xl md:text-2xl font-semibold text-white tracking-wide">
            Syslab.<span className="text-blue-500">ai</span>
          </h3>
        </Link>

        {/* DESKTOP MENU - CENTERED */}
        <ul className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = pathname !== "/contact" && active === item;
            return (
              <li key={item}>
                <Link
                  href={getHref(item)}
                  onClick={() => setActive(item)}
                  className={`px-5 py-2 rounded-3xl text-base font-medium transition-all duration-300 block ${isActive
                    ? "bg-white text-black shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* RIGHT ACTION - CONTACT US */}
        <div className="hidden lg:block shrink-0">
          <Link
            href="/contact"
            className="bg-white text-black font-semibold px-6 py-2.5 rounded-3xl text-base shadow-lg hover:bg-gray-100 transition-colors duration-300 inline-block"
          >
            Contact Us
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden p-2 text-white hover:bg-white/10 rounded-3xl transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* MOBILE SIDEBAR OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* MOBILE SIDEBAR MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-[#0B0F19] border-l border-white/10 shadow-2xl transform transition-transform duration-300 ease-in-out z-[70] ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
          <h2 className="text-xl font-semibold text-white">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white p-1"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col p-6 space-y-4">
          {navItems.map((item) => {
            const isActive = pathname !== "/contact" && active === item;
            return (
              <Link
                key={item}
                href={getHref(item)}
                onClick={() => {
                  setActive(item);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all block ${isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
              >
                {item}
              </Link>
            );
          })}

          <div className="pt-4 border-t border-white/10 mt-4">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full bg-white text-black font-semibold py-3 rounded-xl hover:bg-gray-100 transition-colors block text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
