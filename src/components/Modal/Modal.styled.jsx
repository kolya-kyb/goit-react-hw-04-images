import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  max-width: calc(100vw - 110px);
  max-height: calc(100vh - 68px);
  /* padding: 20px;
  border-radius: 20px;
  background-color: #fff;
  min-height: 200px;
  min-width: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
`;

export const Close = styled.span`
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  color: red;
  font-size: 18px;
  font-weight: bold;
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
`;
