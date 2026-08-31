import { Link } from "react-router-dom";

const navLinks = [
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Skills",
    href: "/#skills",
  },
  {
    label: "Journey",
    href: "/#journey",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
];

function DesktopNav() {
  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-5">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              to={link.href}
              className="
                group
                relative
                flex
                items-center
                gap-2
                py-2
                text-xs
                font-medium
                uppercase
                tracking-[0.04em]
                text-(--color-text-secondary)
                transition-colors
                duration-(--duration-fast)
                hover:text-(--color-text-primary)
              "
            >
              {/* Hover indicator */}
              <span
                aria-hidden="true"
                className="
                  h-1.5
                  w-1.5
                  scale-0
                  rounded-full
                  bg-(--color-accent)
                  opacity-0
                  transition-all
                  duration-(--duration-fast)
                  group-hover:scale-100
                  group-hover:opacity-100
                "
              />

              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default DesktopNav;