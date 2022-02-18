import "./App.css";
import NavContent from "./components/NavContent";
import Home from "./components/Home";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import Container from "react-bootstrap/esm/Container";

function App() {
  const Wrapper = styled.section`
    // padding: 3em 20em;
    margin: 0 auto;
    background: #fcfdff;
  `;

  // const BodyWrapper = styled.section`
  //   align-items: center;
  // `;

  return (
    <div className="App">
      <BrowserRouter>
        <Wrapper>
          <NavContent></NavContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
