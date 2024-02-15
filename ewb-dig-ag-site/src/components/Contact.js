import React from "react";
import tanzania_photo from "../assets/tanzania_drone_pic3.jpg";
import nlb_photo from "../assets/nlb.jpg";
import styled from "styled-components";
import Image from "react-bootstrap/Image";
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
import { Title, PrimaryTitle } from "./shared/Title.styles";
import { OddSection, EvenSection } from "./shared/Section.styles";

const CoverImage = styled(Image)`
  height: 400px;
  object-fit: cover;
  object-position: 20% 10%;
`;

function Contact() {
  return (
    <div>
      <Container>
        <CoverImage className="d-block w-100" src={tanzania_photo} />
        <Overlay>
          <Title> Contact Us!</Title>
        </Overlay>
      </Container>

      <CardContainer>
        <Card className="text-center">
          <Card.Body>
            <Card.Text>
              We want to hear your questions, comments and concerns! Please do
              not hesitate to contact us at ewb@cornell.edu
            </Card.Text>
          </Card.Body>
        </Card>
      </CardContainer>
    </div>
  );
}

export default Contact;
