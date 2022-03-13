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

function Home() {
  return (
    <div>
      <CarouselContent />
      <Title>What we’re about:</Title>
      <p>
        Outbreaks of plant diseases, often left undetected, can be devastating
        for a local economy in Sub-Saharan Africa. To aid farmers, Engineers
        Without Borders at Cornell is building an airborne drone and a ground
        rover to assess large plots of crop fields real-time. The drone will
        provide a large aerial assessment of overall health which will then help
        the rover survey flagged parts for diseases underneath the canopy.
      </p>
    </div>
  );
}

export default Home;
