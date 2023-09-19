import CreateSubjects from "./pages/CreateSubjects";
import MainPage from "./pages/MainPage";
// import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";

import AddLanguages from "./pages/AddLanguages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/subjects" element={<CreateSubjects />} />
      <Route path="/language" element={<AddLanguages />} />
    </Routes>
  );
}

export default App;
