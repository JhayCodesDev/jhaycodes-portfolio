import { Routes, Route } from "react-router-dom";

import Invitation from "./components/invitation/Invitation.jsx";
import Layout from "./layouts/layout.jsx";
import ScrollToHash from "./components/common/ScrollToHash.jsx";
import { Home } from "./pages/Home.jsx";
import Work from "./components/Work/Work.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <>
      <ScrollToHash />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Invitation */}
        <Route path="/invitation" element={<Invitation />} />
      </Routes>
    </>
  );
}

export default App;