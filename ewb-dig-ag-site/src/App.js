import "./App.css";
import NavContent from "./components/NavContent";
import Home from "./components/Home";
import Overview from "./components/Overview";
import Team from "./components/Team";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {} from "./components/shared/Section.styles";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavContent></NavContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="overview" element={<Overview />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
