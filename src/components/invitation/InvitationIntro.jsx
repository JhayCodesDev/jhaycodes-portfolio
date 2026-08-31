function InvitationIntro({ isOpen }) {
  return (
    <div
      className={`
        absolute
        mb-10
        text-center
        transition-all
        duration-(--duration-slow)
        ${
          isOpen
            ? "translate-y-5 opacity-0"
            : "translate-y-0 opacity-100"
        }
      `}
    >
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-(--color-text-muted)">
        JhayCodes
      </p>

      <h1 className="text-4xl font-semibold tracking-tight text-(--color-text-primary) sm:text-5xl">
        You're invited.
      </h1>

      <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-(--color-text-secondary) sm:text-base">
        Step inside and explore the projects, skills, and ideas
        behind the work I build.
      </p>
    </div>
  );
}

export default InvitationIntro;