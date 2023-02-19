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
            <Card.Title>Our Mission:</Card.Title>
            <Card.Text>
              Undetected outbreaks of disease in crops can be devastating for
              local economies in Sub-Saharan Africa. Northern Leaf Blight (NLB)
              is an example of one of these diseases that is caused by a
              specific type of fungus. NLB spreads rapidly from plant to plant,
              rendering large portions of maize crops useless. To aid farmers,
              Engineers Without Borders at Cornell is currently building a drone
              and ground rover in order to assess large plots of crop fields
              for NLB in real-time. The drone will detect infrared radiation to
              provide a large aerial assessment of overall field health, which
              will direct the rover to survey flagged sections of the field for
              diseases underneath the canopy.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardContainer>
    </div>
  );
}

export default Home;
