import { Routes, Route } from "react-router-dom";

import Invitation from "./components/invitation/Invitation.jsx";
import Layout from "./Layouts/Layout.jsx";
import ScrollToHash from "./components/common/ScrollToHash.jsx";
import FirstVisitGuard from "./components/common/FirstVisitGuard.jsx";
import { Home } from "./pages/Home.jsx";
import Work from "./components/Work/Work.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <>
      <ScrollToHash />

      <Routes>
        {/* Invitation */}
        <Route path="/invitation" element={<Invitation />} />

        {/* First Visit Protection */}
        <Route element={<FirstVisitGuard />}>
          {/* Portfolio */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;