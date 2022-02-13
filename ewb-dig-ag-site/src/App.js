import "./App.css";
import NavContent from "./components/NavContent";
import "bootstrap/dist/css/bootstrap.min.css";
import AccordionContent from "./components/AccordionContent";
import styled from "styled-components";
import CarouselContent from "./components/CarouselContent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Container from "react-bootstrap/esm/Container";

function App() {
  // Trying out some styled components here
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #86a1d1;
    padding-bottom: 2em;
  `;
  const WideWrapper = styled.section`
    padding: 3em;
    background: #fcfdff;
  `;

  const Wrapper = styled.section`
    // padding: 3em 20em;
    margin: 0 auto;
    background: #fcfdff;
  `;

  const BodyWrapper = styled.section`
    align-items: center;
  `;

  return (
    <div className="App">
      <Wrapper>
        <NavContent></NavContent>
        <WideWrapper>
          <Title>This is a styled section made with Styled Components!</Title>
          <AccordionContent />
        </WideWrapper>
        <CarouselContent />
      </Wrapper>
    </div>
  );
}

export default App;
