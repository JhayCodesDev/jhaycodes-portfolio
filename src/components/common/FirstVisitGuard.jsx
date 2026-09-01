import { Navigate, Outlet } from "react-router-dom";

function FirstVisitGuard() {
  const invitationSeen =
    localStorage.getItem("invitationSeen") === "true";

  if (!invitationSeen) {
    return <Navigate to="/invitation" replace />;
  }

  return <Outlet />;
}

export default FirstVisitGuard;