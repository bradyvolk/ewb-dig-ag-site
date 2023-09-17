import React from "react";
import tanzania_photo from "../assets/tanzania_drone_pic3.jpg";
import nlb_photo from "../assets/nlb.jpg";
import dig_ag_classic from "../assets/dig_ag_classic.png";
import styled from "styled-components";
import Image from "react-bootstrap/Image";
import styles from './css/nlb.module.css';
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

function NLB() {
  return (
    <div>
      <Container>
        <CoverImage className="d-block w-100" src={tanzania_photo} />
        <Overlay>
          <Title> Northern Leaf Blight Disease (NLB) </Title>
        </Overlay>
      </Container>
      <OddSection>
        <Row className={styles.body}>
          <Column>
            <ContentContainer>
              <PrimaryTitle>The Problem of NLB</PrimaryTitle>
              <TextContainer>
                Globally, an average of 8% of maize crops are lost to diseases
                (Oerke, 2006). In 2015, one-fourth of all estimated yield losses
                from disease were attributed to Northern Leaf Blight (NLB),
                resulting in an estimated $1.9 billion economic loss. NLB
                presents itself as cigar-shaped lesions on the leaves of maize
                crops. Growing bottom-up from the plants, the disease reduces
                maize yield by spreading to nearby plants. Typically, these
                lesions are visually identified by trained individuals to
                determine where to deploy fungicides to prevent further NLB
                spread. However, this identification process is lengthy in large
                fields and subject to observer biases.
              </TextContainer>
              <TextContainer>
                <h6>References</h6>
                <h6 style ={{ fontSize: 12 }}>https://www.genomes2fields.org/docs/publications/tppj-2-1-190006.pdf
                Oerke, E.-C. (2006). Centenary review: Crop losses to pests.
                Journal of Agricultural Science. 144: 31-43.</h6>
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
    </div>
  );
}

export default NLB;
