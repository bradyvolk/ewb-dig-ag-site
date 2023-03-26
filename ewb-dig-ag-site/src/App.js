import "./App.css";
import NavContent from "./components/NavContent";
import Home from "./components/Home";
import NLB from "./components/NLB";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Solution from "./components/Solution";
import Hardware from "./components/Hardware";
import Software from "./components/Software"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {} from "./components/shared/Section.styles";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavContent></NavContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="nlb" element={<NLB />} />
          <Route path="solution" element={<Solution />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
          <Route path="hardware" element={<Hardware />} />
          <Route path="software" element={<Software />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
