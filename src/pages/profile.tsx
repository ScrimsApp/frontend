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
      setShouldLoad(false);
      router.back();
    }
  }, [user]);

  return (
    <MainWrapper>
      <Navbar />

      {!isLoading ? (
        <ProfileWrapper>
          <PlayerProfileWrapper initialPlayer={player} />
        </ProfileWrapper>
      ) : (
        <Loading fullPage />
      )}
    </MainWrapper>
  );
};

export default Profile;
