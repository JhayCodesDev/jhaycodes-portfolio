function Journey() {
  const milestones = [
    {
      year: "01",
      title: "Learning the Fundamentals",
      description:
        "Started by building a strong foundation in web development, focusing on HTML, CSS, JavaScript, and understanding how the browser works beneath the surface.",
    },
    {
      year: "02",
      title: "Building Real Projects",
      description:
        "Moved beyond tutorials and began creating practical applications to turn concepts into working software and develop stronger problem-solving skills.",
    },
    {
      year: "03",
      title: "Exploring Modern Frontend",
      description:
        "Expanded into React, Tailwind CSS, routing, state management, APIs, and reusable component architecture while building increasingly complex interfaces.",
    },
    {
      year: "04",
      title: "Going Deeper",
      description:
        "Started exploring Python, C, C++, backend concepts, software architecture, and the principles behind how applications work beyond the interface.",
    },
    {
      year: "05",
      title: "Building What's Next",
      description:
        "Continuing toward full-stack development by combining frontend experience with deeper programming knowledge, backend technologies, and practical software engineering.",
    },
  ];

  return (
    <section
      id="journey"
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
        <div className="max-w-2xl">
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

            The Journey
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
            Still learning.
            <br />
            <span className="text-(--color-accent)">
              Still building.
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-xl
              text-sm
              leading-7
              text-(--color-text-secondary)
              sm:text-base
              sm:leading-8
            "
          >
            I don't see development as a destination. Every project exposes
            something new to understand, and every problem is an opportunity
            to go deeper.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-14 lg:mt-20">
          <div className="relative">
            {/* Timeline Line */}
            <div
              className="
                absolute
                bottom-0
                left-[7px]
                top-0
                w-px
                bg-(--color-border)
                sm:left-[9px]
              "
              aria-hidden="true"
            />

            <div className="space-y-10 sm:space-y-12">
              {milestones.map((milestone, index) => (
                <article
                  key={milestone.year}
                  className="
                    relative
                    grid
                    grid-cols-[18px_1fr]
                    gap-6
                    sm:grid-cols-[20px_100px_1fr]
                    sm:gap-8
                  "
                >
                  {/* Timeline Marker */}
                  <div
                    className="
                      relative
                      z-10
                      mt-1.5
                      h-[15px]
                      w-[15px]
                      rounded-full
                      border
                      border-(--color-accent)
                      bg-(--color-bg)
                      sm:h-[19px]
                      sm:w-[19px]
                    "
                  >
                    <div
                      className="
                        absolute
                        left-1/2
                        top-1/2
                        h-1.5
                        w-1.5
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-(--color-accent)
                        sm:h-2
                        sm:w-2
                      "
                      aria-hidden="true"
                    />
                  </div>

                  {/* Step Number */}
                  <p
                    className="
                      hidden
                      pt-0.5
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      text-(--color-text-muted)
                      sm:block
                    "
                  >
                    {milestone.year}
                  </p>

                  {/* Content */}
                  <div>
                    <p
                      className="
                        mb-2
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.14em]
                        text-(--color-accent)
                        sm:hidden
                      "
                    >
                      {milestone.year}
                    </p>

                    <h3
                      className="
                        text-lg
                        font-bold
                        tracking-tight
                        text-(--color-text-primary)
                        sm:text-xl
                      "
                    >
                      {milestone.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        max-w-2xl
                        text-sm
                        leading-7
                        text-(--color-text-secondary)
                      "
                    >
                      {milestone.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div
          className="
            mt-16
            border-t
            border-(--color-border)
            pt-8
            sm:mt-20
            sm:pt-10
          "
        >
          <p
            className="
              max-w-3xl
              text-sm
              leading-7
              text-(--color-text-muted)
              sm:text-base
              sm:leading-8
            "
          >
            The goal isn't to know everything. It's to understand more than I
            did yesterday—and build better because of it.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Journey;