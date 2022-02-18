import React from "react";
import styled from "styled-components";
import AccordionContent from "./AccordionContent";
import CarouselContent from "./CarouselContent";

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

function Home() {
  return (
    <div>
      <WideWrapper>
        <Title>This is a styled section made with Styled Components!</Title>
        <AccordionContent />
      </WideWrapper>
      <CarouselContent />
    </div>
  );
}

export default Home;
