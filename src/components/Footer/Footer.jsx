function Footer() {
  return (
    <footer
      className="
        border-t
        border-(--color-border)
        px-5
        py-10
        sm:px-8
        lg:px-10
        lg:py-12
        xl:px-16
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-(--container-max-width)
          flex-col
          gap-8
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        {/* Brand */}
        <div>
          <p
            className="
              text-sm
              font-bold
              tracking-tight
              text-(--color-text-primary)
            "
          >
            JhayCodes
          </p>

          <p
            className="
              mt-1
              text-xs
              text-(--color-text-muted)
            "
          >
            Build with purpose. Learn with curiosity.
          </p>
        </div>

        {/* Social Links */}
        <div
          className="
            flex
            flex-wrap
            items-center
            gap-5
            text-xs
            font-medium
            uppercase
            tracking-[0.1em]
            text-(--color-text-muted)
          "
        >
          <a
            href="https://www.twitter.com/JhayCodes"
            target="_blank"
            rel="noreferrer"
            className="
              transition-colors
              duration-(--duration-fast)
              hover:text-(--color-accent)
            "
          >
            X
          </a>

          <a
            href="https://www.instagram.com/jhaycodes_"
            target="_blank"
            rel="noreferrer"
            className="
              transition-colors
              duration-(--duration-fast)
              hover:text-(--color-accent)
            "
          >
            Instagram
          </a>

          <a
            href="https://www.linkedin.com/in/joshua-odusanya/"
            target="_blank"
            rel="noreferrer"
            className="
              transition-colors
              duration-(--duration-fast)
              hover:text-(--color-accent)
            "
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/JhayCodesDev"
            target="_blank"
            rel="noreferrer"
            className="
              transition-colors
              duration-(--duration-fast)
              hover:text-(--color-accent)
            "
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="
          mx-auto
          mt-8
          w-full
          max-w-(--container-max-width)
          border-t
          border-(--color-border)
          pt-6
        "
      >
        <p
          className="
            text-[10px]
            uppercase
            tracking-[0.12em]
            text-(--color-text-muted)
          "
        >
          © {new Date().getFullYear()} JhayCodes. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;