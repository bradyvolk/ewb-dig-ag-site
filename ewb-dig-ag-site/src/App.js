import "./App.css";
import NavContent from "./components/NavContent";
import Home from "./components/Home";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { OddSection } from "./components/shared/Section.styles";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <OddSection>
          <NavContent></NavContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
        </OddSection>
      </BrowserRouter>
    </div>
  );
}

export default App;
