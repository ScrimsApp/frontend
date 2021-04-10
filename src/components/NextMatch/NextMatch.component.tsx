import { FunctionComponent } from 'react';

import { NextMatchProps } from './types';

import TeamInfoCard from '../../components/TeamInfoCard/TeamInfoCard.component';
import { NextMatchCardWrapper, NextMatchWrapper } from './nextMatch.styles';
import CreateMatch from '../CreateMatch/CreateMatch.component';

const NextMatch: FunctionComponent<NextMatchProps> = ({ data }) => {
  return (
    <NextMatchWrapper>
      <NextMatchCardWrapper>
        <TeamInfoCard
          teamImage="https://wallpaperaccess.com/full/542569.png"
          teamName="Ninjas in Pyjamas"
          about="Partidas em mapas diversos"
          description={`April 15, 2021`}
          description2={``}
          description3={``}
          isCaptain={true}
          isMatch={true}
        />
      </NextMatchCardWrapper>

      <CreateMatch isCaptain={true} />
    </NextMatchWrapper>
  );
};

export default NextMatch;
