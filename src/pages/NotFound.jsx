function NotFound() {
  return (
    <main
      className="
     flex
     min-h-[calc(100vh-72px)]
     items-center
     px-5
     py-20
     sm:px-8
     lg:min-h-[calc(100vh-80px)]
     lg:px-10
     lg:py-32
     xl:px-16
   "
    >
      {" "}
      <section
        className="
       mx-auto
       w-full
       max-w-(--container-max-width)
     "
        aria-labelledby="not-found-title"
      >
        {" "}
        <div className="max-w-2xl">
          {/* Error Label */}{" "}
          <p
            className="
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
            {" "}
            <span
              className="
             h-px
             w-8
             bg-(--color-accent)
           "
              aria-hidden="true"
            />
          </p>
          {/* Heading */}
          <h1
            id="not-found-title"
            className="
          text-5xl
          font-extrabold
          leading-[0.98]
          tracking-[-0.05em]
          text-(--color-text-primary)
          sm:text-6xl
          lg:text-8xl
        "
          >
            Page not found.
          </h1>
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
            The page you're looking for doesn't exist or may have moved. Let's
            get you back to the portfolio.
          </p>
          {/* Action */}
          <div className="mt-9">
            <a
              href="/"
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
              Back Home
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default NotFound;
