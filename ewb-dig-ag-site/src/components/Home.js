import React from "react";
import CarouselContent from "./CarouselContent";
import Card from "react-bootstrap/Card";
import { CardContainer } from "./shared/Div.styles";

function Home() {
  return (
    <div>
      <CardContainer>
        <CarouselContent />
      </CardContainer>

      <CardContainer>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>What we’re about:</Card.Title>
            <Card.Text>
              Outbreaks of plant diseases, often left undetected, can be
              devastating for a local economy in Sub-Saharan Africa. To aid
              farmers, the Digital Agriculture team that is part of Engineers
              Without Borders at Cornell, is building an airborne drone and a
              ground rover to assess large plots of crop fields real-time. The
              drone will provide a large aerial assessment of overall health
              which will then help the rover survey flagged parts for diseases
              underneath the canopy.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardContainer>
    </div>
  );
}

export default Home;
