function Skills() {
  const frontendSkills = [
    {
      name: "HTML",
      description: "Semantic structure and accessible web foundations.",
    },
    {
      name: "CSS",
      description: "Responsive layouts, styling, and visual systems.",
    },
    {
      name: "JavaScript",
      description: "Interactive interfaces and application logic.",
    },
    {
      name: "React",
      description: "Component-based interfaces and frontend applications.",
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first styling and responsive UI development.",
    },
  ];

  const programmingSkills = [
    {
      name: "Python",
      description: "Programming fundamentals, automation, and application logic.",
    },
    {
      name: "C",
      description: "Low-level programming fundamentals and problem solving.",
    },
    {
      name: "C++",
      description: "Object-oriented programming and software fundamentals.",
    },
  ];

  const tools = ["Git", "GitHub", "Vite", "VS Code"];

  return (
    <section
      id="skills"
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
              className="h-px w-8 bg-(--color-accent)"
              aria-hidden="true"
            />

            Skills
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
            Tools I use to turn
            <span className="text-(--color-accent)">
              {" "}ideas into software.
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
            A growing toolkit built through hands-on projects, continuous
            learning, and a focus on understanding the fundamentals behind
            the technology.
          </p>
        </div>

        {/* Skill Groups */}
        <div
          className="
            mt-12
            grid
            gap-5
            lg:grid-cols-2
          "
        >

          {/* Frontend */}
          <SkillGroup
            title="Frontend"
            skills={frontendSkills}
          />

          {/* Programming */}
          <SkillGroup
            title="Programming"
            skills={programmingSkills}
          />

        </div>

        {/* Tools */}
        <div
          className="
            mt-5
            rounded-(--radius-md)
            border
            border-(--color-border)
            bg-(--color-surface)
            p-6
            sm:p-7
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
            Tools & Workflow
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="
                  rounded-(--radius-sm)
                  border
                  border-(--color-border)
                  px-4
                  py-2
                  text-xs
                  font-medium
                  text-(--color-text-secondary)
                  transition-colors
                  duration-(--duration-fast)
                  hover:border-(--color-accent)
                  hover:text-(--color-accent)
                "
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


/* ========================================
   SKILL GROUP
   ======================================== */

function SkillGroup({ title, skills }) {
  return (
    <div
      className="
        rounded-(--radius-md)
        border
        border-(--color-border)
        bg-(--color-surface)
        p-6
        sm:p-7
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
        {title}
      </p>

      <div className="mt-6 divide-y divide-(--color-border)">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="
              group
              flex
              items-start
              justify-between
              gap-6
              py-4
              first:pt-0
              last:pb-0
            "
          >
            <div>
              <h3
                className="
                  text-sm
                  font-semibold
                  text-(--color-text-primary)
                  transition-colors
                  duration-(--duration-fast)
                  group-hover:text-(--color-accent)
                "
              >
                {skill.name}
              </h3>

              <p
                className="
                  mt-1
                  text-xs
                  leading-5
                  text-(--color-text-muted)
                "
              >
                {skill.description}
              </p>
            </div>

            <span
              className="
                mt-0.5
                text-xs
                text-(--color-text-muted)
                transition-transform
                duration-(--duration-fast)
                group-hover:translate-x-1
                group-hover:text-(--color-accent)
              "
              aria-hidden="true"
            >
              →
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;