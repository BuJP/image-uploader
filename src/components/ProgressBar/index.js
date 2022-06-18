import styled, { keyframes } from "styled-components";

const ProgressBarWrapper = styled.div`
  position: relative;
  height: 8px;
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  background-color: #f2f2f2;
`;
const loader = keyframes`
  0% {
    left: -35%;
    right: 100%;
  }
  60% {
    left: 100%;
    right: -90%;
  }
  100% {
    left: 100%;
    right: -90%;
  }
`;

const ProgressBar = styled.span`
  position: absolute;
  left: 0;
  bottom: 0px;
  top: 0px;
  transition: transform 0.2s linear 0s;
  background-color: rgb(25, 118, 210);
  animation: ${loader} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) 0s infinite;
`;

export const Progress = () => (
  <ProgressBarWrapper>
    <ProgressBar />
  </ProgressBarWrapper>
);
