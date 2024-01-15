import styled from 'styled-components';
import Logo from '../assets/logo.svg?react';
import Burger from '../assets/burger.svg?react';
import Heart from '../assets/heart.svg?react';

const StyledHeader = styled.header`
  border-bottom: 1px solid var(--color-gray-2);
  margin-bottom: 35px;
`;

const Container = styled.div`
  display: flex;
  max-width: 1920px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin: 0 auto;
`;

const LeftSide = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const StyledCatalogButton = styled.button`
  width: 135px;
  height: 36px;
  border-radius: 5px;
  padding: 9px 26px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  background-color: var(--color-purple-default);
  color: var(--color-gray-0);

  &:hover {
    background-color: var(--color-purple-hover);
  }

  &:active {
    background-color: var(--color-purple-pressed);
  }
`;

const StyledFavourite = styled.div`
  width: 126px;
  height: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const RightSide = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledAdress = styled.p`
  margin-right: 25px;
  font-weight: 500;
`;

const StyledNumber = styled.p`
  margin-right: 100px;
  font-weight: 500;
`;

const HeartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    filter: grayscale(30%);
  }

  background-color: transparent;
`;

function Header() {
  return (
    <StyledHeader>
      <Container>
        <LeftSide>
          <Logo />
          <StyledCatalogButton>
            <Burger style={{ scale: '1.2' }} />
            <span style={{ fontWeight: '500' }}>Каталог</span>
          </StyledCatalogButton>
        </LeftSide>
        <RightSide>
          <StyledAdress>Москва, Волгоградский пр-кт, 43, стр 1</StyledAdress>
          <StyledNumber>+7 800 555 35 35</StyledNumber>
          <StyledFavourite>
            <HeartButton onClick={e => e.preventDefault()}>
              <Heart />
            </HeartButton>
            <span style={{ fontWeight: '500' }}>Избранное</span>
          </StyledFavourite>
        </RightSide>
      </Container>
    </StyledHeader>
  );
}

export default Header;
