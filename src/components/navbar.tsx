"use client";
import { MouseEvent, useEffect, useState } from "react";
import Image from "next/image";
import { X, Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

type NavItem = "Home" | "About" | "Products" | "Services" | "Award & Partner";

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
        if (hash === "#award-&-partner") return "Award & Partner";
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
    "Award & Partner",
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

  const scrollOrNavigateToSection = (item: NavItem) => {
    const isRootSection =
      item === "Home" || item === "About" || item === "Award & Partner";

    if (isRootSection) {
      const sectionId =
        item === "Home"
          ? "home"
          : item === "About"
          ? "about"
          : "award-&-partner";

      if (pathname !== "/") {
        // From services/products/contact → go to root first with hash
        router.push(`/#${sectionId}`);
        return;
      }

      // Already on root → smooth scroll
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    // Non-root pages: navigate to dedicated routes
    if (item === "Products") {
      router.push("/products");
      return;
    }

    if (item === "Services") {
      router.push("/services");
      return;
    }
  };

  const handleNavClick = (e: MouseEvent, item: NavItem) => {
    e.preventDefault();
    setActive(item);
    scrollOrNavigateToSection(item);
  };

  const handleLogoClick = () => {
    if (pathname !== "/") {
      router.push("/#home");
      return;
    }
    const el = document.getElementById("home");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* LOGO */}
        <button
          type="button"
          onClick={handleLogoClick}
          className="flex items-center gap-3 cursor-pointer"
        >
          <Image
            src="/footer/logo.svg"
            alt="Company Logo"
            width={32}
            height={32}
          />
          <h3 className="text-2xl font-semibold text-white">
            SysLab.<strong className="text-blue-600">ai</strong>
          </h3>
        </button>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <button
                type="button"
                onClick={(e) => handleNavClick(e, item)}
                className={`relative px-4 py-2 rounded-md text-lg font-medium transition-all duration-300 ${
                  pathname !== "/contact" && active === item
                    ? "text-white after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-sky-400 after:to-blue-500 after:rounded-full bg-white/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* CONTACT US BUTTON → PAGE ROUTE */}
        <button
          type="button"
          onClick={() => router.push("/contact")}
          className={`hidden md:block font-medium px-5 py-2 rounded-md transition-all duration-300 ${
            pathname === "/contact"
              ? "bg-blue-700 text-white shadow-[0_0_25px_rgba(37,99,235,0.6)]"
              : "bg-white hover:bg-blue-700 hover:text-white text-black"
          }`}
        >
          Contact Us
        </button>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:bg-white/10 focus:outline-none"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 shadow-xl transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #0b2f7a 0%, #0A1A3E 100%)",
        }}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h2 className="text-lg font-semibold text-white">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <ul className="flex flex-col mt-6 space-y-3 px-4">
          {navItems.map((item) => (
            <li key={item}>
              <button
                type="button"
                onClick={(e) => {
                  handleNavClick(e, item);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                  pathname !== "/contact" && active === item
                    ? "bg-blue-700 text-white"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => {
            router.push("/contact");
            setIsOpen(false);
          }}
          className="mt-8 px-4 w-full bg-white hover:bg-blue-700 hover:text-white text-black font-medium py-2 rounded-md transition-all duration-300"
        >
          Contact Us
        </button>
      </div>

      {/* OVERLAY */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
