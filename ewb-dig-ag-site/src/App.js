import "./App.css";
import NavContent from "./components/NavContent";
import "bootstrap/dist/css/bootstrap.min.css";
import AccordionContent from "./components/AccordionContent";
import styled from "styled-components";

function App() {
  // Trying out some styled components here
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #86a1d1;
    padding-bottom: 2em;
  `;
  const Wrapper = styled.section`
    padding: 3em;
    background: #f7faff;
  `;

  return (
    <div className="App">
      <NavContent></NavContent>
      <Wrapper>
        <Title>This is a styled section made with Styled Components!</Title>
        <AccordionContent></AccordionContent>
      </Wrapper>
    </div>
  );
}

export default App;
