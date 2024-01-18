import styled from 'styled-components';

export const StyledListElement = styled.li`
  width: 100%;
  display: flex;
  gap: 20px;
  &:not(:last-child) {
    padding-bottom: 24px;
    border-bottom: 1px solid var(--color-gray-2);
    margin-bottom: 36px;
  }
`;

export const ImagePart = styled.div``;

export const DetailsPart = styled.div``;

export const StyledCarImage = styled.img`
  height: 308px;
  width: 443px;
  border-radius: 12px;
  border: 1px solid var(--color-gray-2);
`;

export const StyledCarName = styled.p`
  font-size: 36px;
  font-weight: 700;
  line-height: 42px;
  margin-bottom: 16px;
`;

export const SharedTextStyles = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
`;

export const StyledDescription = styled(SharedTextStyles)`
  margin-bottom: 16px;
  max-width: 810px;
`;

export const StyledYear = styled(SharedTextStyles)`
  margin-bottom: 16px;
`;

export const StyledColor = styled(SharedTextStyles)`
  margin-bottom: 33px;
`;

export const StyledPrice = styled(SharedTextStyles)`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
`;

export const StyledButton = styled.button`
  width: 259px;
  height: 56px;
  border-radius: 5px;
  padding: 19px 34px;

  background-color: var(--color-purple-default);
  color: var(--color-gray-0);
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  border-radius: 5px;

  &:hover {
    background-color: var(--color-purple-hover);
  }

  &:active {
    background-color: var(--color-purple-pressed);
  }
`;

export const StyledDeleteButton = styled.button`
  background-color: transparent;

  &:hover svg {
    fill: var(--color-red-1);
  }

  &:hover svg path {
    fill: #fff;
  }

  &:active svg {
    fill: var(--color-red-2);
  }

  &:active svg rect {
    stroke: #b72121;
  }

  &:active svg path {
    fill: #fff;
  }
`;
