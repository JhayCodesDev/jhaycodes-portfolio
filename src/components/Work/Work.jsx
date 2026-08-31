const projects = [
  {
    title: "JHAYHUB",
    category: "React E-Commerce",
    image: "/images/projects/jhayhub.png",
    description:
      "A modern, responsive e-commerce application built with React, featuring product discovery, search, category browsing, product details, cart management, theme switching, and external API integration.",
    technologies: [
      "React 19",
      "JavaScript",
      "Tailwind CSS",
      "React Router",
      "Context API",
      "Fake Store API",
    ],
    href: "https://jhay-hub.vercel.app",
    github: "https://github.com/JhayCodesDev/react-ecommerce-jhayhub",
  },

  {
    title: "JhayBank",
    category: "Digital Banking Simulation",
    image: "/images/projects/jhaybank.png",
    description:
      "An interactive digital banking simulation built with JavaScript, featuring account creation, authentication, transactions, session management, Local Storage persistence, and dynamic dashboard interactions.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Local Storage",
      "Intersection Observer API",
    ],
    href: "https://jhaycodesdev.github.io/JhayBank/",
    github: "https://github.com/JhayCodesDev/JhayBank",
  },
];

function Work() {
  return (
    <section
      id="work"
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
        <div
          className="
            flex
            flex-col
            gap-6
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div className="max-w-2xl">

            {/* Eyebrow */}
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

              Selected Projects
            </p>

            {/* Heading */}
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
              Things I've
              <span className="text-(--color-accent)"> built.</span>
            </h2>

            {/* Description */}
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
              A selection of projects built through experimentation,
              problem solving, and a constant curiosity about how
              software works.
            </p>
          </div>

          {/* GitHub Link */}
          <a
            href="https://github.com/JhayCodesDev"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              w-fit
              items-center
              gap-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.12em]
              text-(--color-text-primary)
              transition-colors
              duration-(--duration-fast)
              hover:text-(--color-accent)
            "
          >
            View GitHub
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Featured Projects */}
        <div
          className="
            mt-14
            grid
            gap-6
            lg:grid-cols-2
          "
        >
          {projects.map((project) => (
            <article
              key={project.title}
              className="
                group
                overflow-hidden
                rounded-(--radius-md)
                border
                border-(--color-border)
                bg-(--color-surface)
                transition-all
                duration-(--duration-normal)
                hover:-translate-y-1
                hover:border-(--color-accent)
                hover:shadow-(--shadow-md)
              "
            >

              {/* Project Image */}
              <div
                className="
                  relative
                  aspect-video
                  overflow-hidden
                  border-b
                  border-(--color-border)
                  bg-(--color-surface-elevated)
                "
              >
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-[1.02]
                  "
                />

                {/* Image Overlay */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/20
                    via-transparent
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                  aria-hidden="true"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-8">

                {/* Project Header */}
                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-5
                  "
                >
                  <div>
                    <p
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-(--color-accent)
                      "
                    >
                      {project.category}
                    </p>

                    <h3
                      className="
                        mt-2
                        text-xl
                        font-bold
                        tracking-tight
                        text-(--color-text-primary)
                        sm:text-2xl
                      "
                    >
                      {project.title}
                    </h3>
                  </div>

                  <span
                    className="
                      text-sm
                      text-(--color-text-muted)
                      transition-all
                      duration-(--duration-fast)
                      group-hover:translate-x-1
                      group-hover:text-(--color-accent)
                    "
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>

                {/* Description */}
                <p
                  className="
                    mt-5
                    text-sm
                    leading-7
                    text-(--color-text-secondary)
                  "
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div
                  className="
                    mt-6
                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-(--radius-sm)
                        border
                        border-(--color-border)
                        px-3
                        py-1.5
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.08em]
                        text-(--color-text-muted)
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Project Actions */}
                <div
                  className="
                    mt-7
                    flex
                    flex-wrap
                    items-center
                    gap-5
                  "
                >
                  {/* Live Project */}
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      text-(--color-text-primary)
                      transition-colors
                      duration-(--duration-fast)
                      hover:text-(--color-accent)
                    "
                  >
                    View Project
                    <span aria-hidden="true">→</span>
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      text-(--color-text-muted)
                      transition-colors
                      duration-(--duration-fast)
                      hover:text-(--color-accent)
                    "
                  >
                    Source Code
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div
          className="
            mt-6
            flex
            flex-col
            items-start
            justify-between
            gap-5
            rounded-(--radius-md)
            border
            border-(--color-border)
            bg-(--color-surface)
            p-6
            sm:flex-row
            sm:items-center
            sm:p-7
          "
        >
          <div>
            <p
              className="
                text-sm
                font-semibold
                text-(--color-text-primary)
              "
            >
              Want to see more?
            </p>

            <p
              className="
                mt-1
                text-xs
                leading-5
                text-(--color-text-muted)
              "
            >
              Explore more of my projects and experiments on GitHub.
            </p>
          </div>

          <a
            href="https://github.com/JHayCodesDev"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              shrink-0
              items-center
              gap-2
              rounded-(--radius-sm)
              bg-(--color-accent)
              px-5
              py-3
              text-xs
              font-semibold
              uppercase
              tracking-[0.1em]
              text-(--color-text-on-accent)
              transition-all
              duration-(--duration-fast)
              hover:-translate-y-0.5
              hover:shadow-(--shadow-md)
            "
          >
            Explore GitHub
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Work;