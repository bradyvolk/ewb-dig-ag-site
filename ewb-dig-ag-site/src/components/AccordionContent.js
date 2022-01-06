import React from "react";

import Counter from "./Counter";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import AccordionItem from "react-bootstrap/esm/AccordionItem";

export default function AccordionContent() {
  const accordionItemContent = [
    `This is the body of accordian item #1.`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat
  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
  sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    <Counter />,
  ];

  const accordianItems = accordionItemContent.map((content, index) => (
    <AccordionItem eventKey={index} key={index}>
      <Accordion.Header>Bootstrap Accordion Item #{index + 1}</Accordion.Header>
      <Accordion.Body>{content}</Accordion.Body>
    </AccordionItem>
  ));

  return (
    <Container>
      <Accordion> {accordianItems}</Accordion>
    </Container>
  );
}
