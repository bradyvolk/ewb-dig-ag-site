import React from "react";
import tanzania_photo from "../assets/tanzania_drone_pic3.jpg";
import nlb_photo from "../assets/nlb.jpg";
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

function About() {
  return (
    <div>
      <Container>
        <CoverImage className="d-block w-100" src={tanzania_photo} />
        <Overlay>
          <Title>About Us</Title>
        </Overlay>
      </Container>
      <OddSection>
        <Row>
          <Column>
            <ContentContainer>
              <PrimaryTitle>The Problem of NLB</PrimaryTitle>
              <TextContainer>
                Outbreaks of plant diseases, often left undetected, can be
                devastating for a local economy in Sub-Saharan Africa. To aid
                farmers, Engineers Without Borders at Cornell is building an
                airborne drone and a ground rover to assess large plots of crop
                fields real-time. The drone will provide a large aerial
                assessment of overall health which will then help the rover
                survey flagged parts for diseases underneath the canopy.
              </TextContainer>
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <Image src={nlb_photo}></Image>
            </ContentContainer>
          </Column>
        </Row>
      </OddSection>
      <EvenSection>
        <Row>
          <Column>
            <ContentContainer>
              <PrimaryTitle>The Problem of NLB</PrimaryTitle>
              <TextContainer>
                Outbreaks of plant diseases, often left undetected, can be
                devastating for a local economy in Sub-Saharan Africa. To aid
                farmers, Engineers Without Borders at Cornell is building an
                airborne drone and a ground rover to assess large plots of crop
                fields real-time. The drone will provide a large aerial
                assessment of overall health which will then help the rover
                survey flagged parts for diseases underneath the canopy.
              </TextContainer>
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <Image src={nlb_photo}></Image>
            </ContentContainer>
          </Column>
        </Row>
      </EvenSection>
    </div>
  );
}

export default About;
