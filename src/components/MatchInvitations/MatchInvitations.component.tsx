import { FunctionComponent } from 'react';

import {
  MatchInvitationsWrapper,
  MatchInvitationsCardWrapper,
  MatchInvitationsCardImage,
  MatchInvitationsInfo,
  MatchInvitationsName,
  MatchInvitationsDescription,
  MatchInvitationsSideOption,
  OptionButton,
} from './matchInvitations.styles';

import { MatchInvitationsProps } from './types';

const MatchInvitations: FunctionComponent<MatchInvitationsProps> = ({
  visible,
}) => {
  return (
    <MatchInvitationsWrapper visible={visible}>
      <MatchInvitationsCardWrapper>
        <MatchInvitationsCardImage
          src="https://steamuserimages-a.akamaihd.net/ugc/266097029408943884/3DB807FE76A975C166339B722AC0CBB2BBED42D2/"
          alt="team"
        />

        <MatchInvitationsInfo>
          <MatchInvitationsName>Ninjas in Pijamas</MatchInvitationsName>
          <MatchInvitationsDescription>
            Partida em mapas diversos
          </MatchInvitationsDescription>
          <MatchInvitationsDescription>
            20.03.2021 8:00 PM
          </MatchInvitationsDescription>
        </MatchInvitationsInfo>

        <MatchInvitationsSideOption backgroundColor="#4767F9">
          <OptionButton>
            <svg
              width="25"
              height="20"
              viewBox="0 0 25 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.57297 19.6147C9.33433 19.862 9.00874 20 8.67053 20C8.33232 20 8.00673 19.862 7.76809 19.6147L0.560957 12.1881C-0.186986 11.4175 -0.186986 10.168 0.560957 9.39882L1.4634 8.46881C2.21157 7.69822 3.42301 7.69822 4.17095 8.46881L8.67053 13.1049L20.829 0.577944C21.5772 -0.192648 22.7898 -0.192648 23.5366 0.577944L24.439 1.50795C25.187 2.27855 25.187 3.52787 24.439 4.29726L9.57297 19.6147Z"
                fill="#6DDB86"
              />
            </svg>
          </OptionButton>
          <OptionButton>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="21"
                y1="3.70444"
                x2="3.83392"
                y2="20.8705"
                stroke="#ED5353"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="3.83237"
                y1="3.65186"
                x2="20.9984"
                y2="20.8179"
                stroke="#ED5353"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </OptionButton>
        </MatchInvitationsSideOption>
      </MatchInvitationsCardWrapper>
    </MatchInvitationsWrapper>
  );
};

export default MatchInvitations;
