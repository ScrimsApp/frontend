import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 260px;
  height: 320px;

  display: flex;
  flex-flow: column;

  margin: 0px auto 36px auto;

  border-radius: ${(props) => props.theme.misc.borderRadius};
  overflow: hidden;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 40%;
  object-fit: cover;
`;

export const CardInfo = styled.div`
  width: 100%;
  height: 60%;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column;

  background-color: ${(props) => props.theme.colors.semiDark};

  padding: 15px 15px 15px 36px;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text.light};

  padding-bottom: 15px;
`;

export const CardDescription = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.text.light};

  padding-bottom: 15px;
`;

export const CardHashtagWrapper = styled.div`
  display: flex;
`;

export const CardHashtag = styled.span`
  font-size: 10px;
  color: ${(props) => props.theme.colors.text.light};
  text-transform: uppercase;

  margin-right: 10px;
`;

export const CardAssignWrapper = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-flow: column;

  padding: 15px;

  background-color: ${(props) => props.theme.colors.secondary};

  overflow: hidden;

  transform: translateX(-90%);
  transition: transform 200ms ease-in-out;
  z-index: 2;
  box-sizing: border-box;

  &&:hover {
    transform: translateX(0);
  }
`;

export const CardAssignDetailsWrapper = styled.div``;

export const CardAssignDetail = styled.span`
  display: block;
  font-size: 16px;
  color: ${(props) => props.theme.colors.text.light};

  padding-bottom: 15px;
`;
