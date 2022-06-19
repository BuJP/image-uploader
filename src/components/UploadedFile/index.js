import styled from "styled-components";
import { Container, ImageContainerStyle } from "../Container";
import { CopyToClipboard } from "../CopyToClipboard";
import { Title } from "../H1";
import checkCircle from "../../images/check-circle.svg";

const Image = styled.img`
  ${ImageContainerStyle}
  padding:0;
  margin-bottom: 2rem;
`;
const UploadedFileContainer = styled(Container)`
  text-align: center;
  box-sizing: border-box;
`;

const CheckImage = styled.img`
  width: 12%;
`;

export const UploadedFile = () => (
  <UploadedFileContainer>
    <CheckImage src={checkCircle} />
    <Title>Uploaded Successfully!</Title>
    <Image src="https://via.placeholder.com/400x200" />
    <CopyToClipboard />
  </UploadedFileContainer>
);
