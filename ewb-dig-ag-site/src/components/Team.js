import React from "react";
import feild_photo from "../assets/roverdronefeild.jpg";
import nlb_photo from "../assets/nlb.jpg";
import dig_ag_classic from "../assets/dig_ag_classic.png";
import nathan_article_image from "../assets/Nathan_Research_Drone.png";
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

function Team() {
  return (
    <div>
      <Container>
        <CoverImage className="d-block w-100" src={feild_photo} />
        <Overlay>
          <Title> The Team </Title>
        </Overlay>
      </Container>
      <OddSection>
        <Row>
          <Column>
            <ContentContainer>
              <PrimaryTitle> Background and History </PrimaryTitle>
              <TextContainer>
                Cornell Engineers Without Borders is a Cornell University
                project team affiliated with the National Engineers Without
                Borders Organization. The Digital Agriculture Team, led by
                undergraduate student Jessica Henson, is a part of Cornell's EWB
                chapter.
              </TextContainer>
              <TextContainer>
                The Digital Agriculture team is split into two subteams:
                hardware and software. The hardware team focuses on the
                construction and operation of the rover and drone, and the
                software team focuses on machine learning, this website, and
                applications for interfacing with the hardware.
              </TextContainer>
              <TextContainer>
                The idea to use digital agriculture tools to identify northern
                leaf blight (NLB) disease in maize crop was first explored on
                campus by undergraduate Nathan Zheng ('21), postdoctoral
                researcher Ethan Stewart and Professor Michael Gore in the
                summer of 2019. After a strong research proposal paper, the
                project received grant money. In need of contributors, the
                project was quickly adopted by Engineers Without Borders at
                Cornell and was established as the Digital Agriculture Subteam.
                As semesters have past, older members graduate and new members
                join, the common goal has not changed -- to help farmers
                identifty NLB early on at unprecedented efficiency and
                simplicity
              </TextContainer>
              <TextContainer>
                <h6>References</h6>
                "By Land and Air, Students to Detect Crop Diseases with Tech."
                Cornell Chronicle,
                news.cornell.edu/stories/2019/07/land-and-air-students-detect-crop-diseases-tech.
              </TextContainer>
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <Image
                width={700}
                height={450}
                src={nathan_article_image}
              ></Image>
            </ContentContainer>
          </Column>
        </Row>
      </OddSection>
    </div>
  );
}

export default Team;
