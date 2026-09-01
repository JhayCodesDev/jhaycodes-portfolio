import { Link } from "react-router-dom";
import HeroVisual from "./HeroVisual.jsx";

function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        flex
        min-h-[calc(100vh-72px)]
        items-center
        overflow-hidden
        px-5
        py-16
        sm:px-8
        lg:min-h-[calc(100vh-80px)]
        lg:px-10
        lg:py-20
        xl:px-16
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-(--container-max-width)
          items-center
          gap-14
          lg:grid-cols-[1.15fr_0.85fr]
          lg:gap-12
          xl:gap-20
        "
      >
        {/* Hero Content */}
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <p
            className="
              hero-animate
              mb-5
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

            Frontend / Software Developer
          </p>

          {/* Main Heading */}
          <h1
            className="
              hero-animate
              hero-animate-delay-1
              text-(--color-text-primary)
              text-4xl
              font-extrabold
              leading-[0.98]
              tracking-[-0.05em]
              sm:text-5xl
              md:text-6xl
            "
          >
            I BUILD.
            <br />
            I BREAK.
            <br />
            I UNDERSTAND.
            <br />
            <span className="text-(--color-accent)">
              I BUILD BETTER.
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              hero-animate
              hero-animate-delay-2
              mt-7
              max-w-2xl
              text-sm
              leading-7
              text-(--color-text-secondary)
              sm:text-base
              sm:leading-8
            "
          >
            I create responsive web experiences and software projects
            while continuously learning how things work beneath the
            surface.
          </p>

          {/* CTA Buttons */}
          <div
            className="
              hero-animate
              hero-animate-delay-3
              mt-9
              flex
              flex-wrap
              items-center
              gap-4
            "
          >
            <Link
              to="/work"
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
              View My Work
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              to="/#contact"
              className="
                inline-flex
                items-center
                justify-center
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
              Let's Talk
            </Link>
          </div>

          {/* Technology Stack */}
          <div
            className="
              mt-10
              flex
              flex-wrap
              items-center
              gap-x-4
              gap-y-2
              text-[10px]
              font-medium
              uppercase
              tracking-[0.12em]
              text-(--color-text-muted)
            "
          >
            <span>HTML</span>
            <span aria-hidden="true">•</span>
            <span>CSS</span>
            <span aria-hidden="true">•</span>
            <span>JavaScript</span>
            <span aria-hidden="true">•</span>
            <span>React</span>
            <span aria-hidden="true">•</span>
            <span>Tailwind CSS</span>
            <span aria-hidden="true">•</span>
            <span>Python</span>
            <span aria-hidden="true">•</span>
            <span>C</span>
            <span aria-hidden="true">•</span>
            <span>C++</span>
          </div>
        </div>

        {/* Hero Visual */}
        <div
          className="
            hero-animate
            hero-animate-delay-2
            flex
            min-h-[360px]
            items-center
            justify-center
            lg:min-h-[520px]
          "
        >
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

export default Hero;