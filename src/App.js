import styled from "styled-components";
import { UploadedFile } from "./components/UploadedFile";
import { UploadFile } from "./components/UploadFile";
import { UploadLoading } from "./components/UploadLoading";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;
function App() {
  return (
    <div className="App">
      <Wrapper>
        <UploadedFile />
      </Wrapper>
    </div>
  );
}

export default App;
