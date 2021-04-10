import styled from 'styled-components';

export const CreateMatchWrapper = styled.div`
  width: 35%;
  height: 100%;
  max-width: 450px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  padding: 36px;

  border-radius: 12px;
  background-color: #212636;
  box-sizing: border-box;

  @media only screen and (max-width: 980px) {
    max-width: 100%;
    width: 100%;
  }
`;

export const CreateMatchTitle = styled.h3`
  max-width: 60%;

  font-weight: bold;
  font-size: 26px;
  color: #ffffff;
  margin-bottom: 36px;
`;

export const CreateMatchFormWrapper = styled.div`
  width: 100%;
  height: auto;

  overflow: hidden;
`;

interface CreateMatchFormProps {
  active: boolean;
}

export const CreateMatchForm = styled.form<CreateMatchFormProps>`
  width: 100%;
  height: ${(props) => (props.active ? 'auto' : '0px')};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  transform: ${(props) =>
    props.active ? 'translateY(0%)' : 'translateY(-100%)'};

  transition: all 200ms ease-in-out;

  margin-bottom: 36px;

  overflow: hidden;
`;
