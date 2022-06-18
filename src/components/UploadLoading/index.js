import { Container } from "../Container";
import { Title } from "../H1";
import { Progress } from "../ProgressBar";

export const UploadLoading = () => (
  <Container>
    <Title>Uploading...</Title>
    <Progress />
  </Container>
);
