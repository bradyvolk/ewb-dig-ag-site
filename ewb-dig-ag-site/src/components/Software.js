import React from "react";
import rover_photo from "../assets/rover.png";
import nasa_rover from "../assets/MRNASA.jpg";
import step4_rover from "../assets/step4_rover.png";
import rover_image_2 from "../assets/roverSide.jpg";
import pi from "../assets/pi.jpg";
import { CardContainer } from "./shared/Div.styles";
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
            <ContentContainer>
              <PrimaryTitle> Purpose </PrimaryTitle>
            </ContentContainer>
        <ContentContainer>
        The software application provides three separate functionalities, each used in a specific step of the system. Broadly speaking, the combination of these features guides the user in pinpointing specific geo-coordinates in the farm field with a very high likelihood of NLB. 
        </ContentContainer>
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
              </TextContainer>
              <TextContainer>
              As input, the user must upload the multispectral drone image of the farm field. 
              The application will proceed to use the NDVI index to recognize regions that could potentially exhibit signs of Northern Leaf Blight (NLB) and the platform subsequently generates a modified image that highlights the identified regions. 
              The output is this modified image.
              </TextContainer>
            </ContentContainer>
          </Column>
          <ContentContainer>
              <PrimaryTitle> Functionality 1: NDVI Index 
             </PrimaryTitle>
            </ContentContainer>
          <Column>
            <ContentContainer>
            <Image width={400} height={250} src={step3_path_drawing}></Image>
            </ContentContainer>
          </Column>
        </Row>
      </OddSection>
      <EvenSection>
        <Row>
          <Column>
            <ContentContainer>
            <TextContainer>
              </TextContainer>
              <TextContainer>
              As input, the user uploads the modified drone image with highlighted regions from the output of feature 1. The user can then leverage the “draw path” functionality to construct a path that the rover will eventually follow in the farm field. Once the user is done constructing the path, they can select the “Run” button which saves the geo-coordinates of the Rover’s path to a text file. The output is this modified image. 
              </TextContainer>
            </ContentContainer>
          </Column>
          <ContentContainer>
              <PrimaryTitle> Functionality 2: Route Planning  </PrimaryTitle>
            </ContentContainer>
          <Column>
          <TextContainer>
              </TextContainer>
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
              </TextContainer>
              <TextContainer>
              As input, the user uploads a dataset of maize crop images obtained by the Rover. The application processes each image of the dataset through a Computer Vision Model which will tag images of maize crop that seems to contain NLB. Once the computation is complete, the application will produce and save a list of geo-coordinates pinpointing the exact locations where NLB is detected. The output is this list of geo-coordinates where NLB is detected. Note these geo-coordinates are exact locations, at the crop level, in the farm field. 
              </TextContainer>
            </ContentContainer>
          </Column>
          <ContentContainer>
              <PrimaryTitle> Functionality 3: ML Model </PrimaryTitle>
            </ContentContainer>
          <Column>
            <ContentContainer>
            <Image width={400} height={250} src={step3_path_drawing}></Image>
            </ContentContainer>
          </Column>
        </Row>
      </OddSection>
    </div>
  );
}

export default Software;
