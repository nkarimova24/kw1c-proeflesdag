import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ExercisePage from "./pages/ExercisePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/opdracht" element={<ExercisePage />} />
      </Routes>
    </Router>
  );
}

export default App;
