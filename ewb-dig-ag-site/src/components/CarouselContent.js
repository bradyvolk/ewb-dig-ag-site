import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import tanzania_photo from "../assets/tanzania_drone_pic3.jpg";
import dig_ag_classic_photo from "../assets/dig_ag_classic.png";
import rover_photo from "../assets/rover.png";
import feild_photo from "../assets/roverdronefeild.jpg";
import maize_blight_photo from "../assets/maizeblight.webp";
import styled from "styled-components";
import Image from "react-bootstrap/Image";
const photo_interval = 5000;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledCarouselItem = styled(Carousel.Item)`
  width: 100%;
  height: 500px;
  overflow: hidden;
`;

export default function CarouselContent() {
  return (
    <Container>
      <Carousel>
        <StyledCarouselItem interval={photo_interval}>
          <StyledImage
            className="d-block w-100"
            src={feild_photo}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </StyledCarouselItem>
        <StyledCarouselItem interval={photo_interval}>
          <StyledImage
            className="d-block w-100"
            src={rover_photo}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ips m dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </StyledCarouselItem>
        <StyledCarouselItem interval={photo_interval}>
          <StyledImage
            className="d-block w-100"
            src={maize_blight_photo}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </StyledCarouselItem>
      </Carousel>
    </Container>
  );
}
