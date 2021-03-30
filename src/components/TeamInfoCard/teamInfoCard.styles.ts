import styled from 'styled-components';

export const TeamInfoWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const TeamImage = styled.img`
  width: 40%;
  height: 100%;
  object-fit: cover;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const TeamInfoContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  padding: 36px;

  @media only screen and (max-width: 600px) {
    padding: 36px 15px;
  }
`;

export const TeamName = styled.h1`
  font-weight: bold;
  font-size: 26px;
  color: ${(props) => props.theme.colors.text.light};

  margin-bottom: 36px;
`;

export const TeamAbout = styled.h2`
  max-width: 80%;

  font-weight: 600;
  font-size: 20px;
  color: ${(props) => props.theme.colors.text.light};

  margin-bottom: 20px;
`;

export const TeamDescription = styled.span`
  max-width: 80%;

  font-size: 16px;
  color: ${(props) => props.theme.colors.text.light};

  margin-bottom: 20px;
`;
