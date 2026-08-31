function Envelope({ isOpen, onOpen, onEnter }) {
  return (
    <div className="relative flex h-[420px] w-full items-center justify-center">
      <div className="relative h-full w-[320px]">

        {/* Invitation Card */}
        <div
          className={`
            absolute
            left-1/2
            top-[110px]
            z-10
            w-[260px]
            -translate-x-1/2
            rounded-md
            border
            border-(--color-border)
            bg-(--color-surface)
            p-6
            text-center
            shadow-(--shadow-lg)
            transition-all
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              isOpen
                ? "z-30 -translate-y-[90px] opacity-100"
                : "translate-y-[70px] opacity-0"
            }
          `}
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-(--color-text-muted)">
            JhayCodes
          </p>

          <div className="mx-auto my-3 h-px w-10 bg-(--color-border)" />

          <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-(--color-text-muted)">
            You're invited
          </p>

          <h2 className="mt-2 text-xl font-semibold tracking-tight text-(--color-text-primary)">
            Come see what I build.
          </h2>

          <p className="mt-2 text-xs leading-5 text-(--color-text-secondary)">
            Explore the projects, skills, and ideas behind my work.
          </p>

          <p className="mt-4 text-[9px] font-medium uppercase tracking-[0.15em] text-(--color-accent)">
            Frontend Developer
          </p>

          <button
            type="button"
            onClick={onEnter}
            className="
              pointer-events-auto
              mt-5
              inline-flex
              items-center
              gap-2
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.15em]
              text-(--color-text-primary)
              transition-colors
              duration-[var(--duration-fast)]
              hover:text-(--color-accent)
            "
          >
            Enter Portfolio
            <span aria-hidden="true">→</span>
          </button>
        </div>

        {/* Envelope */}
        <div
          className="
            absolute
            bottom-[40px]
            left-1/2
            z-20
            h-[200px]
            w-[300px]
            -translate-x-1/2
            [perspective:1000px]
            [transform-style:preserve-3d]
          "
        >

          {/* Envelope Body */}
          <div
            className="
              absolute
              inset-0
              rounded-md
              border
              border-(--color-border)
              bg-(--color-surface)
              shadow-(--shadow-lg)
            "
          />

          {/* Left Fold */}
          <div
            className="
              absolute
              bottom-0
              left-0
              z-20
              h-full
              w-1/2
              origin-bottom-left
              bg-(--color-surface)
              [clip-path:polygon(0_0,100%_100%,0_100%)]
            "
          />

          {/* Right Fold */}
          <div
            className="
              absolute
              bottom-0
              right-0
              z-20
              h-full
              w-1/2
              origin-bottom-right
              bg-(--color-surface)
              [clip-path:polygon(100%_0,100%_100%,0_100%)]
            "
          />

          {/* Envelope Flap */}
          <div
            className={`
              absolute
              left-0
              top-0
              z-40
              h-[100px]
              w-full
              origin-top
              border-b
              border-(--color-border)
              bg-(--color-surface)
              [transform-style:preserve-3d]
              [backface-visibility:hidden] 
              [clip-path:polygon(0_0,100%_0,50%_100%)]
              transition-transform
              duration-[800ms]
              delay-[250ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                isOpen
                  ? "rotate-x-[-180deg]"
                  : "rotate-x-0"
              }
            `}
          />

          {/* Seal */}
          <button
            type="button"
            onClick={onOpen}
            disabled={isOpen}
            aria-label="Open invitation"
            className={`
              absolute
              left-1/2
              top-1/2
              z-50
              flex
              h-12
              w-12
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-(--color-accent)
              text-xs
              font-semibold
              tracking-wider
              text-white
              shadow-md
              transition-all
              duration-500
              hover:scale-105
              ${
                isOpen
                  ? "pointer-events-none scale-0 opacity-0"
                  : "scale-100 opacity-100"
              }
            `}
          >
            JC
          </button>
        </div>

      </div>
    </div>
  );
}

export default Envelope;