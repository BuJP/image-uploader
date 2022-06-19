import styled from "styled-components";
import { ButtonStyle } from "../Button";
import { Container } from "../Container";
import { DropZone } from "../DropZone";
import { Title } from "../H1";
import { P } from "../P";

const UploadFileContainer = styled(Container)`
  text-align: center;
`;

const Subtitle = styled(P)`
  margin-bottom: 2rem;
  color: #828282;
`;

const Text = styled(P)`
  margin: 2rem 0;
`;

const FileInput = styled.input`
  display: none;
`;

const FileLabel = styled.label`
  ${ButtonStyle}
`;

export const UploadFile = () => (
  <UploadFileContainer>
    <Title>Upload your image</Title>
    <Subtitle>File should be Jpeg, Png,...</Subtitle>
    <DropZone />
    <Text>Or</Text>
    <FileLabel>
      <FileInput type="file" />
      Choose a file
    </FileLabel>
  </UploadFileContainer>
);
