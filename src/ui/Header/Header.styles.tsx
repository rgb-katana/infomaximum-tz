import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import DarkHeart from '../../assets/darkheart.svg';

export const StyledHeader = styled.header`
  border-bottom: 1px solid var(--color-gray-2);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: var(--color-gray-0);
`;

export const Container = styled.div`
  display: flex;
  max-width: 1920px;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin: 0 auto;
`;

export const LeftSide = styled.div`
  display: flex;
  gap: 21px;
  align-items: center;
`;

export const StyledCatalogButton = styled.button`
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

export const StyledFavourite = styled.div`
  width: 126px;
  height: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const RightSide = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledAdress = styled.p`
  margin-right: 31px;
  font-weight: 500;
`;

export const StyledNumber = styled.p`
  margin-right: 136px;
  font-weight: 500;
`;

export const HeartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;

  & > img {
    width: 27px;
    height: 24px;
    transition: background-image 0.3s ease;
  }

  &:active > img {
    content: url(${DarkHeart});
  }
`;

export const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    color: var(--color-gray-4);
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-gray-4);
  }
`;
