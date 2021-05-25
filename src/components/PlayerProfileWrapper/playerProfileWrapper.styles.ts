import styled from 'styled-components';

export const PlayerWrapper = styled.div`
  width: 50%;
  position: relative;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  background-color: #262a3b;

  @media only screen and (max-width: 840px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: 350px;
  min-height: 350px;

  object-fit: cover;
`;

export const IconWrapper = styled.div`
  width: 70px;
  height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 36px;
  top: 36%;

  background-color: #cccccc22;

  cursor: pointer;
  border-radius: 12px;
  transition: background-color 200ms ease-in-out;

  &&:hover {
    background-color: #cccccc44;
  }
`;

export const Form = styled.form`
  width: 100%;

  box-sizing: border-box;
  padding: 36px 36px 0px 36px;

  @media only screen and (max-width: 390px) {
    padding: 15px 15px 0px 15px;
  }
`;

export const FileInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: hidden;
  outline: none;

  z-index: 50;
  cursor: pointer;
  color: transparent;

  &&::-webkit-file-upload-button {
    visibility: hidden;
  }
`;
