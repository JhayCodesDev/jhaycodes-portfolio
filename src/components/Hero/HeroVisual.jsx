import { useState } from "react";

function HeroVisual() {
  const [rotation, setRotation] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 6;
    const rotateX = ((centerY - y) / centerY) * 6;

    setRotation({
      x: rotateX,
      y: rotateY,
    });
  };

  const handleMouseLeave = () => {
    setRotation({
      x: 0,
      y: 0,
    });
  };

  return (
    <div className="relative flex w-full max-w-md items-center justify-center">

      {/* Decorative Frame */}
      <div
        className="
          hero-animate
          absolute
          h-[320px]
          w-[260px]
          rounded-(--radius-lg)
          border
          border-(--color-border)
          sm:h-[400px]
          sm:w-[320px]
          lg:h-[480px]
          lg:w-[380px]
        "
        aria-hidden="true"
      />

      {/* Profile Image Container */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="
          hero-animate
          hero-animate-delay-1
          relative
          z-10
          h-[300px]
          w-[240px]
          overflow-hidden
          rounded-(--radius-lg)
          border
          border-(--color-border)
          bg-(--color-surface)
          shadow-(--shadow-lg)
          transition-transform
          duration-200
          ease-out
          sm:h-[380px]
          sm:w-[300px]
          lg:h-[460px]
          lg:w-[360px]
        "
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        <img
          src="/images/profile/profile.jpg"
          alt="JhayCodes"
          className="
            h-full
            w-full
            object-cover
            object-center
          "
        />

        {/* Image Overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/30
            via-transparent
            to-transparent
          "
          aria-hidden="true"
        />
      </div>

      {/* Small Brand Label */}
      <div
        className="
          hero-animate
          hero-animate-delay-2
          absolute
          -bottom-5
          -left-3
          z-20
          rounded-(--radius-sm)
          border
          border-(--color-border)
          bg-(--color-surface)
          px-4
          py-2
          shadow-(--shadow-sm)
          sm:-bottom-6
          sm:-left-5
        "
      >
        <p
          className="
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-(--color-text-muted)
          "
        >
          JhayCodes
        </p>

        <p
          className="
            mt-0.5
            text-[10px]
            font-medium
            text-(--color-accent)
          "
        >
          Build • Learn • Improve
        </p>
      </div>

    </div>
  );
}

export default HeroVisual;