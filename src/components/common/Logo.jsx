import useTheme from "../../hooks/useTheme.js";

function Logo() {
  const { theme } = useTheme();

  const logoSrc =
    theme === "dark"
      ? "/images/logo/jhaycodes-dark-logo.png"
      : "/images/logo/jhaycodes-light-logo.png";

  return (
    <a
      href="/"
      aria-label="JhayCodes home"
      className="shrink-0"
    >
      <img
        src={logoSrc}
        alt="JhayCodes"
        className="logo h-7 w-auto max-w-[150px]"
      />
    </a>
  );
}

export default Logo;