import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header/Header';

const StyledAppLayout = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: auto 1fr;
`;

const StyledMain = styled.main`
  background-color: var(--color-gray-0);
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledAppLayout>
  );
}

export default AppLayout;
