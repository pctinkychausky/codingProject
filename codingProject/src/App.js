import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Carhire from "./pages/Carhire";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carhire" element={<Carhire />} />
      </Routes>
    </div>
  );
}

export default App;
