function Contact() {
  return (
    <section
      id="contact"
      className="
        border-t
        border-(--color-border)
        px-5
        py-20
        sm:px-8
        sm:py-24
        lg:px-10
        lg:py-32
        xl:px-16
      "
    >
      <div className="mx-auto w-full max-w-(--container-max-width)">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <p
            className="
              mb-4
              flex
              items-center
              gap-3
              text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              text-(--color-accent)
            "
          >
            <span
              className="
                h-px
                w-8
                bg-(--color-accent)
              "
              aria-hidden="true"
            />

            Get In Touch
          </p>

          <h2
            className="
              text-3xl
              font-extrabold
              leading-[1.05]
              tracking-[-0.04em]
              text-(--color-text-primary)
              sm:text-4xl
              lg:text-5xl
            "
          >
            Have a project in mind?
            <br />
            <span className="text-(--color-accent)">
              Let's build something.
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-(--color-text-secondary)
              sm:text-base
              sm:leading-8
            "
          >
            Whether you have a project, an idea, or simply want to talk
            about technology and development, I'd be happy to hear from you.
          </p>
        </div>

        {/* Contact Actions */}
        <div
          className="
            mt-10
            flex
            flex-wrap
            items-center
            gap-4
          "
        >
          {/* Email */}
          <a
            href="mailto:jhaycodes.dev@gmail.com"
            className="
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-(--radius-sm)
              bg-(--color-accent)
              px-6
              py-3.5
              text-xs
              font-semibold
              uppercase
              tracking-[0.12em]
              text-(--color-text-on-accent)
              transition-all
              duration-(--duration-fast)
              hover:-translate-y-0.5
              hover:shadow-(--shadow-md)
            "
          >
            Email Me
            <span aria-hidden="true">→</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/JhayCodesDev"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-(--radius-sm)
              border
              border-(--color-border)
              px-6
              py-3.5
              text-xs
              font-semibold
              uppercase
              tracking-[0.12em]
              text-(--color-text-primary)
              transition-all
              duration-(--duration-fast)
              hover:border-(--color-accent)
              hover:text-(--color-accent)
            "
          >
            GitHub
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Contact Details */}
        <div
          className="
            mt-16
            grid
            gap-5
            border-t
            border-(--color-border)
            pt-8
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {/* Email */}
          <div>
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-(--color-text-muted)
              "
            >
              Email
            </p>

            <a
              href="mailto:jhaycodes.dev@gmail.com"
              className="
                mt-2
                inline-block
                text-sm
                text-(--color-text-primary)
                transition-colors
                duration-(--duration-fast)
                hover:text-(--color-accent)
              "
            >
              jhaycodes.dev@gmail.com
            </a>
          </div>

          {/* GitHub */}
          <div>
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-(--color-text-muted)
              "
            >
              GitHub
            </p>

            <a
              href="https://github.com/JhayCodesDev"
              target="_blank"
              rel="noreferrer"
              className="
                mt-2
                inline-block
                text-sm
                text-(--color-text-primary)
                transition-colors
                duration-(--duration-fast)
                hover:text-(--color-accent)
              "
            >
              @JhayCodesDev
            </a>
          </div>

          {/* Socials */}
          <div>
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-(--color-text-muted)
              "
            >
              Socials
            </p>

            <div
              className="
                mt-2
                flex
                flex-wrap
                gap-4
                text-sm
              "
            >
              <a
                href="https://www.twitter.com/JhayCodes"
                target="_blank"
                rel="noreferrer"
                className="
                  text-(--color-text-primary)
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
                  text-(--color-text-primary)
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
                  text-(--color-text-primary)
                  transition-colors
                  duration-(--duration-fast)
                  hover:text-(--color-accent)
                "
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;