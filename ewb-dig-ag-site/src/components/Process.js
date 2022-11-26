import React from "react";
import tanzania_photo from "../assets/tanzania_drone_pic3.jpg";
import nlb_photo from "../assets/nlb.jpg";
import dig_ag_classic from "../assets/dig_ag_classic.png";
import Step1_drone from "../assets/Step1_drone.png";
import step2_NDVI_Formula from "../assets/step2_NDVI_Formula.png";
import Step2_NDVI from "../assets/Step2_NDVI.png";
import step3_path_input from "../assets/step3_path_input.png";
import step3_path_drawing from "../assets/step3_path_drawing.png";
import step4_rover from "../assets/step4_rover.png";
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

function Process() {
  return (
    <div>
      <Container>
        <CoverImage className="d-block w-100" src={tanzania_photo} />
        <Overlay>
          <Title> Process </Title>
        </Overlay>
      </Container>
      <OddSection>
        <Row>
          <Column>
            <ContentContainer>
              <PrimaryTitle> Step 1 </PrimaryTitle>
              <TextContainer>
                The drone (UAV), while flying above the crop field, takes
                high-throughput, multi-spectral, “bird's eye view” images. The
                GPS coordinates (latitude and longitude) of the drone when
                taking each image is also noted.
              </TextContainer>
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <Image width={500} height={250} src={Step1_drone}></Image>
            </ContentContainer>
          </Column>
        </Row>
      </OddSection>
      <EvenSection>
        <Row>
          <Column>
            <ContentContainer>
              <PrimaryTitle> Step 2 </PrimaryTitle>
              <TextContainer>
                The drone images are then uploaded to the Digital Agriculture
                application. This application has a feature that analyzes each
                infrared image according to the NDVI index and marks ones that
                may contain maize crops suffering from NLB.
              </TextContainer>
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <Image width={500} height={250} src={Step2_NDVI}></Image>
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <Image width={500} height={250} src={step2_NDVI_Formula}></Image>
            </ContentContainer>
          </Column>
        </Row>
      </EvenSection>
      <OddSection>
        <Row>
          <Column>
            <ContentContainer>
              <PrimaryTitle> Step 3 </PrimaryTitle>
              <TextContainer>
                For each marked drone image, the Digital Agriculture application
                highlights the area where NLB may exist. The user can then draw
                paths on the image which depict the path of the rover in the
                crop fields. The GPS coordinates of the paths are attained using
                geometric calculations involving the GPS coordinates of the
                drone when the image was taken and other camera parameters. The
                longitude and latitude of the paths are then returned to the
                user.
              </TextContainer>
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <Image width={400} height={250} src={step3_path_input}></Image>
            </ContentContainer>
          </Column>
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
              <PrimaryTitle> Step 4 </PrimaryTitle>
              <TextContainer>
                The user then directs the rover in the crop field following the
                drawn paths and the GPS coordinates from the application.
                Throughout its travel, the rover takes up-close images of the
                maize crop leaves and combines them into a dataset. The
                geo-coordinate of the rover when each image is taken is also
                noted.
              </TextContainer>
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <Image width={500} height={250} src={step4_rover}></Image>
            </ContentContainer>
          </Column>
        </Row>
      </EvenSection>
      <OddSection>
        <Row>
          <Column>
            <ContentContainer>
              <PrimaryTitle> Step 5 </PrimaryTitle>
              <TextContainer>
                The up-close image dataset is uploaded to the Digital
                Agriculture application. The application runs these images
                through a computer vision machine learning model which detects
                NLB disease lesions on maize crop leaves. The application then
                outputs the GPS coordinates of the images that contain NLB
                lesions to the user.
              </TextContainer>
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <Image width={400} height={200} src={step5}></Image>
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <Image
                width={400}
                height={200}
                src={step5_NLB_annotations}
              ></Image>
            </ContentContainer>
          </Column>
        </Row>
      </OddSection>
      <EvenSection>
        <Row>
          <Column>
            <ContentContainer>
              <PrimaryTitle> Step 6 </PrimaryTitle>
              <TextContainer>
                The user can then travel to the specific places in the crop
                field with infected maize and apply fungicides and other
                pesticides to prevent spread of NLB.
              </TextContainer>
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <Image width={500} height={250} src={step6_fungicide}></Image>
            </ContentContainer>
          </Column>
        </Row>
      </EvenSection>
    </div>
  );
}

export default Process;
