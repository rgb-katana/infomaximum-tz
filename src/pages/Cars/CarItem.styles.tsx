import styled from 'styled-components';

import HoveredHeart from '../../assets/heart.svg';
import DarkHeart from '../../assets/darkheart.svg';

export const StyledListItem = styled.li`
  position: relative;
`;

export const StyledCarImage = styled.img`
  border: 1px solid var(--color-gray-2);
  border-radius: 15px 15px 0px 0px;
  margin-bottom: 15px;
`;

export const StyledCarName = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 10px;
`;

export const SharedTextStyles = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  color: var(--color-gray-3);
  display: inline-block;
`;

export const StyledYear = styled(SharedTextStyles)`
  margin-right: 13px;
`;

export const StyledColor = styled(SharedTextStyles)`
  margin-bottom: 13px;
`;

export const StyledPrice = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  margin-bottom: 15px;
`;

export const StyledBuyButton = styled.button`
  background-color: var(--color-purple-default);
  color: var(--color-gray-0);
  width: 254px;
  height: 56px;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  border-radius: 5px;
  margin-right: 15px;

  &:hover {
    background-color: var(--color-purple-hover);
  }

  &:active {
    background-color: var(--color-purple-pressed);
  }
`;

export const Unavailable = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: var(--color-gray-4);
  color: var(--color-gray-0);

  width: 237px;
  height: 59px;
  z-index: 1;

  font-weight: 500;
  font-size: 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 15px;
`;

export const GroupContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

interface GreyFilterProps {
  $grey: boolean;
}

export const GreyFilter = styled.div<GreyFilterProps>`
  position: relative;

  ${props =>
    props.$grey &&
    `
    & > img {
      opacity: 0.4;
      border: 1px solid var(--color-gray-2);
    }

    & > * > button {
      background-color: var(--color-gray-2);
      color: var(--color-gray-4);

      &:hover {
        background-color: var(--color-gray-2); /* Adjust to your desired hover background color */
        color: var(--color-gray-4); /* Adjust to your desired hover text color */
      }

      &:active {
        background-color: var(--color-gray-2); /* Adjust to your desired active background color */
        color: var(--color-gray-4); /* Adjust to your desired active text color */
      }

    }
  `}
`;

export const StyledHeartButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;

  & > img {
    width: 27px;
    height: 24px;
    transition: background-image 0.3s ease;
  }

  &:hover > img {
    content: url(${HoveredHeart});
  }

  &:active > img {
    content: url(${DarkHeart});
  }
`;
