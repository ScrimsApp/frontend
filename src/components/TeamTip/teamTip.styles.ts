import styled from 'styled-components';

export const TeamTipWrapper = styled.section`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 56px;

  border-radius: ${(props) => props.theme.misc.borderRadius};
  overflow: hidden;

  @media only screen and (max-width: 1050px) {
    height: 400px;
  }

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const CreateTeam = styled.div`
  position: relative;
  width: 50%;
  height: 100%;

  transition: transform 200ms ease-out;
  overflow: hidden;
  border-radius: 12px 0px 0px 12px;

  &&:hover {
    /* transform: scale(1.2); */
  }

  @media only screen and (max-width: 800px) {
    border-radius: 12px;
    width: 100%;
    margin-bottom: 36px;
  }
`;

export const JoinTeam = styled.div`
  position: relative;
  width: 50%;
  height: 100%;

  overflow: hidden;
  border-radius: 0px 12px 12px 0px;

  @media only screen and (max-width: 800px) {
    border-radius: 12px;
    width: 100%;
  }
`;

interface BannerLayerProps {
  imageUrl: string;
}

export const BannerLayer = styled.div<BannerLayerProps>`
  width: 100%;
  height: 100%;

  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;

  transition: all 400ms ease-out;

  filter: grayscale(50%);

  &&:hover {
    transform: scale(1.05);
    filter: grayscale(0%);
  }
`;

export const OptionLink = styled.a`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;

  text-decoration: none;

  font-size: 28px;
  color: ${(props) => props.theme.colors.text.light};
  font-weight: bold;
`;

export const OptionTitle = styled.h2`
  position: absolute;
  bottom: 36px;
  left: 36px;
`;
