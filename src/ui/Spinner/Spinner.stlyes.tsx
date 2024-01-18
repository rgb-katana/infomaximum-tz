import styled from 'styled-components';

export const SpinnerOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1/-1;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid var(--color-gray-2);
  border-radius: 50%;
  border-top-color: var(--color-purple-light);
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
