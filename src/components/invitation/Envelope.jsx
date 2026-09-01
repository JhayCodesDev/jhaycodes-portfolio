function Envelope({ isOpen, onOpen, onEnter }) {
  return (
    <div className="relative flex h-[470px] w-full flex-col items-center justify-center">
      <div className="relative h-[420px] w-[320px]">
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
              overflow-hidden
              rounded-md
              border
              border-(--color-border)
              bg-(--color-surface)
              shadow-(--shadow-lg)
            "
          />
          {/* Bottom Envelope Folds */}
          <div
            className={`
            absolute
            inset-0
            z-20
            bg-(--color-surface)
            [clip-path:polygon(0_0,50%_58%,100%_0,100%_100%,0_100%)]
            transition-opacity
            duration-300
            ${isOpen ? "opacity-0" : "opacity-100"}
          `}
          />

          {/* Envelope Flap */}
          <div
            className={`
            absolute
            left-0
            top-0
            z-15
            h-[120px]
            w-full
            origin-top
            bg-(--color-surface)
            border-b
            border-(--color-border)
            [clip-path:polygon(0_0,100%_0,50%_100%)]
            transition-transform
            duration-[800ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${isOpen ? "[transform:rotateX(180deg)]" : "[transform:rotateX(0deg)]"}
          `}
          />

          {/* V Shape Outline */}
          <svg
            className={`
            pointer-events-none
            absolute
            inset-0
            z-45
            h-full
            w-full
            transition-opacity
            duration-300
            ${isOpen ? "opacity-0" : "opacity-100"}
          `}
          >
            <path
              d="M 0 0 L 150 120 L 300 0"
              fill="none"
              stroke="var(--color-border)"
              strokeWidth="1"
            />
          </svg>

          {/* Seal */}
          <button
            type="button"
            onClick={onOpen}
            disabled={isOpen}
            aria-label="Open invitation"
            className={`
              absolute
              left-1/2
              top-[120px]
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

        {/* Interaction Hint */}
        <div
          className={`
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2
            whitespace-nowrap
            text-[9px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-(--color-text-muted)
            transition-all
            duration-500
            ${isOpen ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100"}
          `}
        >
          Click the seal to open
        </div>
      </div>
    </div>
  );
}

export default Envelope;
