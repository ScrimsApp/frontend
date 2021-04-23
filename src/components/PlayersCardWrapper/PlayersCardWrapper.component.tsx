import { FunctionComponent } from 'react';

import { PlayersCardWrapperProps } from './types';

const PlayersCardWrapper: FunctionComponent<PlayersCardWrapperProps> = ({
  players,
}) => {
  console.log(players);

  return (
    <div>
      <h1>hey</h1>
    </div>
  );
};

export default PlayersCardWrapper;
