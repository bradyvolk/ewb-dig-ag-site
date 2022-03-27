import React from "react";
import tanzania_photo from "../assets/tanzania_drone_pic3.jpg";
import styled from "styled-components";
import Image from "react-bootstrap/Image";

const StyledImage = styled(Image)`
  height: 400px;
  object-fit: cover;
  object-position: 20% 10%;
`;

const Container = styled.div`
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0px;
  height: 400px;
  background: rgba(13, 110, 253, 0.3); /* Black see-through */
  color: #f1f1f1;
  width: 100%;
  line-height: 200px;
  text-align: center;
`;

const Title = styled.span`
  position: relative;
  opacity: 1;
  color: white;
  font-size: 24px;
  font-weight: bold;
  display: block;
  line-height: 400px;
`;

function About() {
  return (
    <div>
      <Container>
        <StyledImage className="d-block w-100" src={tanzania_photo} />
        <Overlay>
          <Title>About Us</Title>
        </Overlay>
      </Container>
    </div>
  );
}

export default About;
