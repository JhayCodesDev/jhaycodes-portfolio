import { Link } from "react-router-dom";

const navLinks = [
  {
    number: "01",
    label: "Work",
    href: "/work",
  },
  {
    number: "02",
    label: "About",
    href: "/#about",
  },
  {
    number: "03",
    label: "Skills",
    href: "/#skills",
  },
  {
    number: "04",
    label: "Journey",
    href: "/#journey",
  },
  {
    number: "05",
    label: "Contact",
    href: "/#contact",
  },
];

function MobileNav({ isOpen, onClose }) {
  return (
    <div
      id="mobile-navigation"
      className={`
        fixed
        inset-x-0
        top-[72px]
        z-[var(--z-overlay)]
        border-b
        border-[var(--color-border)]
        bg-[var(--color-bg)]
        md:hidden
        transition-all
        duration-[var(--duration-slow)]
        ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0"
        }
      `}
    >
      <nav
        aria-label="Mobile navigation"
        className="px-5 py-8"
      >
        <ul className="space-y-2">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                onClick={onClose}
                className="
                  group
                  flex
                  items-baseline
                  gap-4
                  py-3
                  text-3xl
                  font-semibold
                  tracking-tight
                  text-[var(--color-text-primary)]
                "
              >
                <span
                  className="
                    text-xs
                    font-medium
                    text-[var(--color-text-muted)]
                  "
                >
                  {link.number}
                </span>

                <span
                  className="
                    transition-transform
                    duration-[var(--duration-normal)]
                    group-hover:translate-x-2
                  "
                >
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default MobileNav;``