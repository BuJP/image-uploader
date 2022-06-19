import styled from "styled-components";
import { ButtonStyle } from "../Button";

const Container = styled.div`
  padding: 2px;
  border: 2px solid #f2f2f2;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  ${ButtonStyle}
  border:0;
  white-space: nowrap;
`;

const Link = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 10px;
`;

export const CopyToClipboard = () => (
  <Container>
    <Link>hughughuygzadfazzfafzafjbbhibhbdazhbduabdhab/djb</Link>
    <Button>Copy Link</Button>
  </Container>
);
