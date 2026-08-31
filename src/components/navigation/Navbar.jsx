import { useState } from "react";

import DesktopNav from "./DesktopNav.jsx";
import MobileNav from "./MobileNav.jsx";
import ThemeToggle from "../common/ThemeToggle.jsx";
import Logo from "../common/Logo.jsx";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-(--z-sticky) w-full">
      {/* Navbar Bar */}
      <div
        className="
          border-b
          border-(--color-border)
          bg-(--color-bg)/80
          backdrop-blur-md
        "
      >
        <div
          className="
            mx-auto
            flex
            h-[72px]
            w-full
            max-w-(--container-max-width)
            items-center
            justify-between
            px-3
            sm:px-5
            md:h-20
            md:px-6
            xl:px-8
          "
        >
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation — 768px and above */}
          <div className="hidden items-center gap-5 md:flex">
            <DesktopNav />

            <div
              className="
                ml-2
                border-l
                border-(--color-border)
                pl-5
              "
            >
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Controls — below 768px */}
          <div
            className="
              flex
              shrink-0
              items-center
              gap-1
              md:hidden
            "
          >
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Hamburger */}
            <button
              type="button"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                text-(--color-text-secondary)
                transition-colors
                duration-(--duration-fast)
                hover:bg-(--color-surface)
                hover:text-(--color-text-primary)
              "
            >
              <span
                className="text-xl leading-none"
                aria-hidden="true"
              >
                {isMenuOpen ? "×" : "☰"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMenuOpen}
        onClose={closeMenu}
      />
    </header>
  );
}

export default Navbar;