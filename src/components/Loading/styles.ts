import styled from 'styled-components';

export const LoaderStyled = styled.div`
  position: relative;
  background-color: var(--gray);
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background: conic-gradient(var(--black), var(--gray));
  animation: rotate 1s linear infinite;
  margin: 0 auto;
  &:before,
  &:after {
    content: '';
    position: absolute;
    border-radius: 50%;
  }
  &:before {
    width: 120px;
    height: 120px;
    top: 15px;
    left: 15px;
    background-color: var(--white);
  }
  &:after {
    height: 15px;
    width: 15px;
    background-color: var(--gray);
    top: 0;
    left: 68px;
  }
  @keyframes rotate {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
