import React from "react";
import tanzania_photo from "../assets/tanzania_drone_pic3.jpg";
import nathan_article_image from "../assets/Nathan_Research_Drone.png";
import styled from "styled-components";
import Image from "react-bootstrap/Image";
import sunnyImage from "../assets/Sunny-modified.png";
import alexImage from "../assets/Alex-modified.png";
import alishaImage from "../assets/Alisha-modified.png";
import bradyImage from "../assets/Brady-modified.png";
import corbanImage from "../assets/Corban-modified.png";
import crystalImage from "../assets/Crystal-modified.png";
import jasonImage from "../assets/Jason-modified.png";
import jessicaImage from "../assets/Jessica-modified.png";
import juhiImage from "../assets/Juhi-modified.png";
import nathanImage from "../assets/Nathan-modified.png";
import mattImage from "../assets/Matt-modified.png";
import nicholasImage from "../assets/Nicholas-modified.png";
import nithinImage from "../assets/Nithin-modified.png";
import raginiImage from "../assets/Ragini-modified.png";
import unknownImage from "../assets/Unknown-modified.png";
import ShivaniImage from "../assets/Shivani-modified.png";
import AsliImage from "../assets/AsliC-modified.png";
import NancyImage from "../assets/nancyImage.png";
import EshaanImage from "../assets/Eshaan-modified.png";
import lawrenceImage from "../assets/Lawrence-modified.png";
import abigailImage from "../assets/Abigail-modified.png";
import domenicImage from "../assets/Domenic-modified.png";
import audreyImage from "../assets/Audrey-modified.png";
import Figure from "react-bootstrap/Figure";

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
        <CoverImage className="d-block w-100" src={tanzania_photo} />
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
                project team affiliated with the national Engineers Without
                Borders Organization.
              </TextContainer>
              <TextContainer>
                The Digital Agriculture team is split into two subteams:
                hardware and software. The hardware team focuses on the
                construction and operation of the rover and drone, and the
                software team focuses on the machine learning algorithms, this
                website, and applications for interfacing with the hardware and
                datasets.
              </TextContainer>
              <TextContainer>
                The idea to use digital agriculture tools to identify northern
                leaf blight disease in maize crop was first explored on campus
                by undergraduate Nathan Zheng (‘21), postdoctoral researcher
                Ethan Stewart and Professor Michael Gore in the summer of 2019.
                After a strong research proposal paper, the project received a
                grant from the Shen Fund for Social Impact. It was then adopted
                by Engineers Without Borders at Cornell and became known as the
                Digital Agriculture sub-team.
              </TextContainer>
              <TextContainer>
                <h6>References</h6>
                <h6 style={{ fontSize: 12 }}>
                  "By Land and Air, Students to Detect Crop Diseases with Tech."
                  Cornell Chronicle,
                  news.cornell.edu/stories/2019/07/land-and-air-students-detect-crop-diseases-tech.
                </h6>
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
      <EvenSection>
        <Row>
          <p></p>
        </Row>
        <Row>
          <p></p>
        </Row>
        <Row>
          <Column>
            <PrimaryTitle> Team Members </PrimaryTitle>
          </Column>
        </Row>
        <Row>
          <Column>
            <ContentContainer>
              <img
                src={nathanImage}
                alt="missing"
                class="figure-img img-fluid rounded-circle"
              />
              <figcaption class="figure-caption text-center">
                Nathan Zhang
              </figcaption>
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <img
                src={alexImage}
                alt="missing"
                class="figure-img img-fluid rounded-circle"
              />
              <figcaption class="figure-caption text-center">
                Alex LoCicero
              </figcaption>
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <img
                src={alishaImage}
                alt="missing"
                class="figure-img img-fluid rounded-circle"
              />
              <figcaption class="figure-caption text-center">
                Alisha Kewalramani
              </figcaption>{" "}
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <img
                src={bradyImage}
                alt="missing"
                class="figure-img img-fluid rounded-circle"
              />
              <figcaption class="figure-caption text-center">
                Brady Volkman
              </figcaption>
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <img
                src={nicholasImage}
                alt="missing"
                class="figure-img img-fluid rounded-circle"
              />
              <figcaption class="figure-caption text-center">
                Nicholas George
              </figcaption>
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <img
                src={nithinImage}
                alt="missing"
                class="figure-img img-fluid rounded-circle"
              />
              <figcaption class="figure-caption text-center">
                Nithin Dass
              </figcaption>
            </ContentContainer>
          </Column>
        </Row>
        <Row>
          <Column>
            <ContentContainer>
              <img
                src={raginiImage}
                alt="missing"
                class="figure-img img-fluid rounded-circle"
              />
              <figcaption class="figure-caption text-center">
                Ragini Balachandran
              </figcaption>
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <img
                src={jasonImage}
                alt="missing"
                class="figure-img img-fluid rounded-circle"
              />
              <figcaption class="figure-caption text-center">
                Jason Pan
              </figcaption>
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <img
                src={sunnyImage}
                alt="missing"
                class="figure-img img-fluid rounded-circle"
              />
              <figcaption class="figure-caption text-center">
                Sunny Chavan
              </figcaption>
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <img
                src={jessicaImage}
                alt="missing"
                class="figure-img img-fluid rounded-circle"
              />
              <figcaption class="figure-caption text-center">
                Jessica Henson
              </figcaption>
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <img
                src={juhiImage}
                alt="missing"
                class="figure-img img-fluid rounded-circle"
              />
              <figcaption class="figure-caption text-center">
                Juhi Shyamsukha
              </figcaption>
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <img
                src={corbanImage}
                alt="missing"
                class="figure-img img-fluid rounded-circle"
              />
              <figcaption class="figure-caption text-center">
                Corban Chiu
              </figcaption>
            </ContentContainer>
          </Column>
        </Row>
        <Row>
          <Column>
            <ContentContainer>
              <img
                src={crystalImage}
                alt="missing"
                class="figure-img img-fluid rounded-circle"
              />
              <figcaption class="figure-caption text-center">
                Crystal Shi
              </figcaption>
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <img
                src={mattImage}
                alt="missing"
                class="figure-img img-fluid rounded-circle"
              />
              <figcaption class="figure-caption text-center">
                Matthew Sadowski
              </figcaption>
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <img
                src={ShivaniImage}
                alt="missing"
                class="figure-img img-fluid rounded-circle"
              />
              <figcaption class="figure-caption text-center">
                Shivani Lal
              </figcaption>{" "}
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <img
                src={NancyImage}
                alt="missing"
                class="figure-img img-fluid rounded-circle"
              />
              <figcaption class="figure-caption text-center">
                Nancy Khosla
              </figcaption>{" "}
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <img
                src={unknownImage}
                alt="missing"
                class="figure-img img-fluid rounded-circle"
              />
              <figcaption class="figure-caption text-center">Name</figcaption>{" "}
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <img
                src={AsliImage}
                alt="missing"
                class="figure-img img-fluid rounded-circle"
              />
              <figcaption class="figure-caption text-center">
                Asli Cihangir
              </figcaption>{" "}
            </ContentContainer>
          </Column>
        </Row>
        <Row>
          <Column>
            <ContentContainer>
              <img
                src={EshaanImage}
                alt="missing"
                class="figure-img img-fluid rounded-circle"
              />
              <figcaption class="figure-caption text-center">Eshaan Sharma</figcaption>
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <img
                src={lawrenceImage}
                alt="missing"
                class="figure-img img-fluid rounded-circle"
              />
              <figcaption class="figure-caption text-center">Lawrence Granda</figcaption>
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <img
                src={abigailImage}
                alt="missing"
                class="figure-img img-fluid rounded-circle"
              />
              <figcaption class="figure-caption text-center">Abigail Miller</figcaption>{" "}
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <img
                src={domenicImage}
                alt="missing"
                class="figure-img img-fluid rounded-circle"
              />
              <figcaption class="figure-caption text-center">Domenic Fioravanti</figcaption>{" "}
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <img
                src={audreyImage}
                alt="missing"
                class="figure-img img-fluid rounded-circle"
              />
              <figcaption class="figure-caption text-center">Audrey Garon</figcaption>{" "}
            </ContentContainer>
          </Column>
          <Column>
            <ContentContainer>
              <img
                src={unknownImage}
                alt="missing"
                class="figure-img img-fluid rounded-circle"
              />
              <figcaption class="figure-caption text-center">Name</figcaption>{" "}
            </ContentContainer>
          </Column>
        </Row>
      </EvenSection>
    </div>
  );
}

export default Team;
