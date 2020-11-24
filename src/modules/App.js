import styled from "styled-components";
import Registration from "modules/auth/Registration";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

function App() {
  return (
    <Wrapper>
      <Registration />
    </Wrapper>
  );
}

export default App;
