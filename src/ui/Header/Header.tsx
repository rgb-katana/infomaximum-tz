import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.svg?react';
import Burger from '../../assets/burger.svg?react';
import Heart from '../../assets/heart.svg';

import {
  Container,
  HeartButton,
  LeftSide,
  RightSide,
  StyledAdress,
  StyledCatalogButton,
  StyledFavourite,
  StyledHeader,
  StyledNavLink,
  StyledNumber,
} from './Header.styles';

function Header() {
  const navigate = useNavigate();
  const handleNavigate = () => navigate('/favourite');

  return (
    <StyledHeader>
      <Container>
        <LeftSide>
          <NavLink to="/">
            <Logo />
          </NavLink>
          <StyledCatalogButton>
            <Burger style={{ scale: '1.2' }} />
            <span style={{ fontWeight: '500' }}>Каталог</span>
          </StyledCatalogButton>
        </LeftSide>
        <RightSide>
          <StyledAdress>Москва, Волгоградский пр-кт, 43, стр 1</StyledAdress>
          <StyledNumber>+7 800 555 35 35</StyledNumber>
          <StyledFavourite>
            <HeartButton onClick={() => handleNavigate()}>
              <img src={Heart} />
            </HeartButton>
            <StyledNavLink to="/favourite">
              <span style={{ fontWeight: '500' }}>Избранное</span>
            </StyledNavLink>
          </StyledFavourite>
        </RightSide>
      </Container>
    </StyledHeader>
  );
}

export default Header;
