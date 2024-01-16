import styled from "styled-components";

const Container = styled.div`
  padding: 0 20px;
  margin: 0 auto;
  margin-top: 35px;
  max-width: 1920px;
`;

const Favourite: React.FunctionComponent = () => {
  return (
    <Container>
      <h1>Favourite works</h1>
    </Container>
  );
};

export default Favourite;
