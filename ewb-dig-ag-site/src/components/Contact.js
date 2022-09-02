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

function Contact() {
  return (
    <div>
      <Container>
        <CoverImage className="d-block w-100" src={tanzania_photo} />
        <Overlay>
          <Title>Contact Us</Title>
        </Overlay>
      </Container>
      <div className="container">
        <form action="/action_page.php">
          <div className="smallInputFN">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
            ></input>
          </div>
          <div className="smallInputLN">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            ></input>
          </div>

          <div className="smallInputEmail">
            <label htmlFor="email">Your Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email.."
            ></input>
            <div>
              <label htmlFor="country">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject.."
              ></input>

              <label htmlFor="subject">Message</label>
              {/* <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style="height:200px"
            ></textarea> */}

              <input type="submit" value="Submit"></input>
            </div>

            <footer id="colophon" className="site-footer" role="contentinfo">
              <div className="social-wrapper">
                <div className="icon-wrapper">
                  <ul>
                    <li>
                      <a
                        href="https://www.instagram.com/ewbcornell/?hl=en"
                        target="_blank"
                      >
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/EWBCornell/"
                        target="_blank"
                      >
                        <i className="fa fa-facebook-square"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/ewb-cornell/"
                        target="_blank"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="" target="_blank">
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footerText">
                Engineers Without Borders - Cornell University{" "}
              </div>
            </footer>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
