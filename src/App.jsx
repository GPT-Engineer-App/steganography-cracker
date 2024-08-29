import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import DateCalculator from "./components/DateCalculator.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/date-calculator" element={<DateCalculator />} />
        <Route path="/steganography" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
