import React from "react";
import CarouselContent from "./CarouselContent";
import Card from "react-bootstrap/Card";
import { CardContainer } from "./shared/Div.styles";
import {
  Row,
  Column,
  Container,
  TextContainer,
  Overlay,
  ContentContainer,
} from "./shared/Div.styles";

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
              
              <Card.Text>
              The Digital Agriculture Project will design and implement an
                autonomous system consisting of a high-throughput Unmanned
                Aerial Vehicle (UAV) and an Unmanned Ground Vehicle (UGV) that
                will work side-by-side with farmers to assess levels of crop
                disease. With early detection of crop diseases, we can aid
                farmers with disease-resistant breeding, monitoring of crops for
                new outbreaks, and strategic control of fungicide deployment.
                Our goal is to build a non-commercialized, open-source system
                that can employ deep learning algorithms to detect disease
                symptoms before the disease spreads.
            </Card.Text>

            <Card.Text>
                Initially, the drone (UAV) scans the field taking infrared
                photos. These infrared “birds eye view” photos will indicate
                areas of possible outbreaks. At each of these locations, the
                rover (UGV) will take close up images of the maize crop leaves.
                These images are then run through a machine learning algorithm
                to detect NLB lesions. Finally, the data from the rover is sent
                to an interface which will help the user pinpoint where NLB
                exists in the field at the individual crop level. The user can
                then proceed to appropriately address the threat.
            </Card.Text>

            <Card.Text>
                Initially, the drone (UAV) scans the field taking infrared
                photos. These infrared “birds eye view” photos will indicate
                areas of possible outbreaks. At each of these locations, the
                rover (UGV) will take close up images of the maize crop leaves.
                These images are then run through a machine learning algorithm
                to detect NLB lesions. Finally, the data from the rover is sent
                to an interface which will help the user pinpoint where NLB
                exists in the field at the individual crop level. The user can
                then proceed to appropriately address the threat.
                
            </Card.Text>

              We believe that once implemented, our proposed system will be
                the first innovative system to utilize UGVs in parallel with
                UAVs to detect plant disease, providing an early warning
                detection system for researchers and farmers.

          </Card.Body>
        </Card>
      </CardContainer>

    </div>
  );
}

export default Home;
