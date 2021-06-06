import { FunctionComponent, useContext, useEffect, useState } from 'react';

import { MainWrapper } from '../styles/shared/Wrapper/Wrapper.styles';
import Navbar from '../components/Navbar/Navbar.component';

import { GlobalContext } from '../context/GlobalContext.';
import { useRouter } from 'next/router';

import { Player } from '../types/player/Player.type';

import { api } from '../config/api';

import { ProfileWrapper } from '../styles/pages/profile/profile.styles';

import Loading from '../components/Loading/Loading.component';

import PlayerProfileWrapper from '../components/PlayerProfileWrapper/PlayerProfileWrapper.component';
import PlayerTeamProfileWrapper from '../components/PlayerTeamProfileWrapper/PlayerTeamProfileWrapper.component';
import ProfileTeamInvites from '../components/ProfileTeamInvites/ProfileTeamInvites.component';

const Profile: FunctionComponent = () => {
  const { userContext, notificationContext } = useContext(GlobalContext);
  const { setNotificationStatus, setNewNotification } = notificationContext;
  const { user } = userContext;
  const router = useRouter();

  const [isLoading, setIsloading] = useState(true);
  const [shouldLoad, setShouldLoad] = useState(true);
  const [player, setPlayer] = useState<Player>({
    name: '',
    email: '',
    description: '',
  } as Player);

  useEffect(() => {
    if (user.token && shouldLoad) {
      api
        .get('player', {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((res) => {
          setPlayer(res.data);
          setShouldLoad(false);
          setIsloading(false);
        })
        .catch((error) => {
          setNotificationStatus(true);
          setNewNotification({
            type: 'error',
            title: 'Whoops!',
            message: error.message,
          });
        });
    } else {
      const userInfo = window.localStorage.getItem('user');
      if (!userInfo) {
        router.push('/');
      }
    }
  }, [user]);

  return (
    <MainWrapper>
      <Navbar />

      {!isLoading ? (
        <>
          <ProfileWrapper>
            <PlayerProfileWrapper initialPlayer={player} />
            {player.team ? (
              <PlayerTeamProfileWrapper
                isCaptain={user.captain}
                initialTeam={player.team}
              />
            ) : null}
          </ProfileWrapper>
          {player.invites.length > 0 ? (
            <ProfileTeamInvites invites={player.invites} />
          ) : null}
        </>
      ) : (
        <Loading fullPage />
      )}
    </MainWrapper>
  );
};

export default Profile;
