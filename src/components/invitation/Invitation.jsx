import { useState } from "react";
import { useNavigate } from "react-router-dom";

import InvitationIntro from "./InvitationIntro.jsx";
import Envelope from "./Envelope.jsx";

function Invitation() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleEnter = () => {
  localStorage.setItem("invitationSeen", "true");
  navigate("/");
};

  return (
    <section
      className="
        fixed
        inset-0
        z-[var(--z-modal)]
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-[var(--color-bg)]
        px-6
      "
    >
      <div className="flex w-full max-w-2xl flex-col items-center">
        <InvitationIntro isOpen={isOpen} />

        <Envelope
          isOpen={isOpen}
          onOpen={handleOpen}
          onEnter={handleEnter}
        />
      </div>
    </section>
  );
}

export default Invitation;