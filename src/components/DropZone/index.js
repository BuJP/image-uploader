import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import background from "../../images/uploader-background.svg";
import { ImageContainerStyle } from "../Container";
import { P } from "../P";

const Container = styled.div`
  ${ImageContainerStyle}
  padding: 3rem 0 3rem 0;
  background: #f6f8fb;
  text-align: center;
  border: 2px dashed #bdbdbd;
  border-color: ${({ isDragActive }) => (isDragActive ? "#a4c6f5" : "#bdbdbd")};
`;

const Image = styled.img`
  width: 40%;
`;

export const DropZone = () => {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <Container {...getRootProps()} isDragActive={isDragActive}>
      <input {...getInputProps()} />
      <Image src={background} />
      <P>Drag & Drop your image here</P>
    </Container>
  );
};
