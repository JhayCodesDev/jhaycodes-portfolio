function About() {
  return (
    <section
      id="about"
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
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-(--container-max-width)
          gap-12
          lg:grid-cols-[0.8fr_1.2fr]
          lg:gap-20
        "
      >
        {/* Section Heading */}
        <div>
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

            About
          </p>

          <h2
            className="
              max-w-md
              text-3xl
              font-extrabold
              leading-[1.05]
              tracking-[-0.04em]
              text-(--color-text-primary)
              sm:text-4xl
              lg:text-5xl
            "
          >
            I don't just want to use technology.
            <span className="text-(--color-accent)">
              {" "}I want to understand it.
            </span>
          </h2>
        </div>

        {/* About Content */}
        <div className="max-w-2xl">
          <p
            className="
              text-base
              leading-8
              text-(--color-text-secondary)
              sm:text-lg
            "
          >
            I'm a frontend and software developer who enjoys building
            practical digital experiences while understanding the
            technology behind them.
          </p>

          <p
            className="
              mt-6
              text-sm
              leading-7
              text-(--color-text-secondary)
              sm:text-base
              sm:leading-8
            "
          >
            My journey started with the fundamentals of web development
            and has grown through JavaScript, React, Tailwind CSS,
            Python, C, and C++. I enjoy taking an idea, breaking it
            down into smaller problems, and turning those problems
            into working software.
          </p>

          <p
            className="
              mt-6
              text-sm
              leading-7
              text-(--color-text-secondary)
              sm:text-base
              sm:leading-8
            "
          >
            I'm still learning, experimenting, and improving with every
            project. For me, building something isn't only about making
            it work — it's also about understanding why it works and
            finding better ways to build it.
          </p>

          {/* Principles */}
          <div
            className="
              mt-10
              grid
              gap-4
              sm:grid-cols-2
            "
          >
            <div
              className="
                rounded-(--radius-md)
                border
                border-(--color-border)
                bg-(--color-surface)
                p-5
              "
            >
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-(--color-accent)
                "
              >
                Build
              </p>

              <p
                className="
                  mt-3
                  text-sm
                  leading-6
                  text-(--color-text-secondary)
                "
              >
                Turn ideas into practical, responsive, and usable
                digital experiences.
              </p>
            </div>

            <div
              className="
                rounded-(--radius-md)
                border
                border-(--color-border)
                bg-(--color-surface)
                p-5
              "
            >
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-(--color-accent)
                "
              >
                Understand
              </p>

              <p
                className="
                  mt-3
                  text-sm
                  leading-6
                  text-(--color-text-secondary)
                "
              >
                Go beneath the surface, learn the fundamentals, and
                understand how the pieces work together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;