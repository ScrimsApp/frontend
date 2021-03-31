import { FunctionComponent } from 'react';
import Link from 'next/link';

import {
  CreateTeam,
  JoinTeam,
  TeamTipWrapper,
  OptionLink,
  OptionTitle,
  BannerLayer,
} from './teamTip.styles';

const TeamTip: FunctionComponent = () => {
  return (
    <TeamTipWrapper>
      <CreateTeam>
        <BannerLayer imageUrl="https://elements-cover-images-0.imgix.net/7518a833-de24-41e6-b494-bc0d52976337?auto=compress%2Cformat&fit=max&w=710&s=2b9425b97b603eb354f5e44f3901f22e">
          <Link href="/create-team" passHref>
            <OptionLink>
              <OptionTitle>Create your team </OptionTitle>
            </OptionLink>
          </Link>
        </BannerLayer>
      </CreateTeam>

      <JoinTeam>
        <BannerLayer imageUrl="https://i.pinimg.com/originals/12/fc/ba/12fcba783b1f27cfc4b09cbf6d8beb3c.jpg">
          <Link href="/teams" passHref>
            <OptionLink>
              <OptionTitle>Join a team</OptionTitle>
            </OptionLink>
          </Link>
        </BannerLayer>
      </JoinTeam>
    </TeamTipWrapper>
  );
};

export default TeamTip;
