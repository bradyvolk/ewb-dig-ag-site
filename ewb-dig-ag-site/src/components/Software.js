import React from "react";
import rover_photo from "../assets/rover.png";
import nasa_rover from "../assets/MRNASA.jpg";
import step4_rover from "../assets/step4_rover.png";
import rover_image_2 from "../assets/roverSide.jpg";
import pi from "../assets/pi.jpg";
import styled from "styled-components";
import Image from "react-bootstrap/Image";
import step3_path_drawing from "../assets/step3_path_drawing.png";

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

function Software() {
  return (
    <div>
      <Container>
        <CoverImage className="d-block w-100" src={rover_photo} />
        <Overlay>
          <Title> Software Documentation </Title>
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
              <PrimaryTitle> Purpose </PrimaryTitle>
            </ContentContainer>
          </Column>
        </Row>
        <TextContainer>
        The software application provides three separate functionalities, each used in a specific step of the system. Broadly speaking, the combination of these features guides the user in pinpointing specific geo-coordinates in the farm field with a very high likelihood of NLB. 
        </TextContainer>
      </EvenSection>
      <EvenSection>
        <Row>
          <Column>
            <ContentContainer>
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              
            </ContentContainer>
          </Column>
        </Row>
      </EvenSection>
      <OddSection>
        <Row>
          <Column>
            <ContentContainer>
              <TextContainer>
                INSERT TEXT HERE
              </TextContainer>
            </ContentContainer>
          </Column>
          <ContentContainer>
              <PrimaryTitle> Functionality 1 </PrimaryTitle>
            </ContentContainer>
          <Column>
            <ContentContainer>
              
            </ContentContainer>
          </Column>
        </Row>
      </OddSection>
      <EvenSection>
        <Row>
          <Column>
            <ContentContainer>
              <TextContainer>
                INSERT TEXT HERE
              </TextContainer>
            </ContentContainer>
          </Column>
          <ContentContainer>
              <PrimaryTitle> Functionality 2 </PrimaryTitle>
            </ContentContainer>
          <Column>
            <ContentContainer>
            <Image width={400} height={250} src={step3_path_drawing}></Image>
            </ContentContainer>
          </Column>
        </Row>
      </EvenSection>
      <OddSection>
        <Row>
          <Column>
            <ContentContainer>
              <TextContainer>
                INSERT TEXT HERE
              </TextContainer>
            </ContentContainer>
          </Column>
          <ContentContainer>
              <PrimaryTitle> Functionality 3 </PrimaryTitle>
            </ContentContainer>
          <Column>
            <ContentContainer>
    
            </ContentContainer>
          </Column>
        </Row>
      </OddSection>
    </div>
  );
}

export default Software;
