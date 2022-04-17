import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 2rem 12%;
`;

export const Container = styled.div`
  position: relative;
`;

export const ContentContainer = styled.div`
  position: relative;
  padding: 3rem;
`;

export const TextContainer = styled.div`
  position: relative;
  padding: 1rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0px;
  height: 400px;
  background: rgba(0, 0, 0, 0.65);
  color: #f1f1f1;
  width: 100%;
  line-height: 200px;
  text-align: center;
`;
