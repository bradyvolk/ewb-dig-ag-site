import React from "react";
import tanzania_photo from "../assets/tanzania_drone_pic3.jpg";
import rover_photo from "../assets/rover.png";
import nlb_photo from "../assets/nlb.jpg";
import dig_ag_classic from "../assets/dig_ag_classic.png";
import Step1_drone from "../assets/Step1_drone.png";
import step2_NDVI_Formula from "../assets/step2_NDVI_Formula.png";
import Step2_NDVI from "../assets/Step2_NDVI.png";
import step3_path_input from "../assets/step3_path_input.png";
import step3_path_drawing from "../assets/step3_path_drawing.png";
import pi from "../assets/pi.jpg";
import nasa_rover from "../assets/MRNASA.jpg";
import step4_rover from "../assets/step4_rover.png";
import rover_image_2 from "../assets/newRoverImage.png";
import step5 from "../assets/step5.png";
import step5_NLB_annotations from "../assets/step5_NLB_annotations.png";
import step6_fungicide from "../assets/step6_fungicide.jpg";

import styled from "styled-components";
import Image from "react-bootstrap/Image";
import {
  Row,
  Column,
  Container,
  TextContainer,
  Overlay,
  ContentContainer,
} from "./shared/Div.styles";
import { Title, PrimaryTitle } from "./shared/Title.styles";
import { OddSection, EvenSection } from "./shared/Section.styles";

const CoverImage = styled(Image)`
  height: 400px;
  object-fit: cover;
  object-position: 20% 10%;
`;

function Hardware() {
  return (
    <div>
      <Container>
        <CoverImage className="d-block w-100" src={rover_photo} />
        <Overlay>
          <Title> Hardware </Title>
        </Overlay>
      </Container>

      {/* <Container>
        <CoverImage className="d-block w-100" src={tanzania_photo} />
        <Overlay>
          <Title> Our Solution (step-by-step) </Title>
        </Overlay>
      </Container> */}
      <EvenSection>
        <Row>
          <Column>
            <ContentContainer>
              <PrimaryTitle> Overview </PrimaryTitle>
            </ContentContainer>
          </Column>
        </Row>
      </EvenSection>
      <EvenSection>
        <Row>
          <Column>
            <ContentContainer>
              <TextContainer>
                The rover build for this project is based off of the NASA Jet
                Propulsion Laboratory Open Source Rover (NASA JPL OSR), for
                which the code and build information can be found for free
                online here. We chose to use this open-source design as it is
                professional, well-maintained, documented, easily accessible,
                and designed for use on uneven terrain. Since this is basically
                the design for a Mars rover, it is robust and adaptable to a
                wide range of conditions, which is important so that this
                technology can be useful to a wide range of people.
              </TextContainer>
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <Image width={500} height={250} src={nasa_rover}></Image>
            </ContentContainer>
          </Column>
        </Row>
      </EvenSection>
      <OddSection>
        <Row>
          <Column>
            <ContentContainer>
              <TextContainer>
                To assemble our rover, we mostly followed the instructions for
                the mechanical and electrical build written on the NASA JPL OSR
                github. However, we removed the LED screen and the Arduino, as
                these components are not necessary to our project, and added an
                adjustable arm to the top of the rover in order to mount the
                camera. Details about the arm design and assembly will be
                provided below.
              </TextContainer>
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <Image width={500} height={250} src={pi}></Image>
            </ContentContainer>
          </Column>
        </Row>
      </OddSection>
      <EvenSection>
        <Row>
          <Column>
            <ContentContainer>
              <TextContainer>
                After assembling the rover and completing the electrical wiring,
                we set up the ROS Noetic operating system on the Raspberry Pi
                and downloaded the OSR rover code. Make sure that you have the
                exact correct Raspberry Pi model (Raspberry Pi 3 Model B), as we
                ran into many issues when we tried to use a very similar model
                (Raspberry Pi 3 Model B+) that were all resolved when we
                switched to the correct model.
              </TextContainer>
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <Image width={500} height={250} src={step3_path_drawing}></Image>
            </ContentContainer>
          </Column>
        </Row>
      </EvenSection>
      <OddSection>
        <Row>
          <Column>
            <ContentContainer>
              <TextContainer>
                After making sure the OS was working correctly, we followed the
                instructions for tuning the parameters on each of the Roboclaw
                motors. Then, we connected all our sensors and ran sample code
                to ensure they were all working correctly. After you have
                ensured basic functionality of all parts of the rover, you can
                begin testing the NLB detection code.
              </TextContainer>
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <Image width={500} height={250} src={step4_rover}></Image>
            </ContentContainer>
          </Column>
        </Row>
      </OddSection>
    </div>
  );
}

export default Hardware;
