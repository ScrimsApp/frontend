import {
  ChangeEvent,
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from 'react';

import { MainWrapper } from '../styles/shared/Wrapper/Wrapper.styles';
import Navbar from '../components/Navbar/Navbar.component';

import { GlobalContext } from '../context/GlobalContext.';
import { useRouter } from 'next/router';

import { Player } from '../types/player/Player.type';

import { api } from '../config/api';

import {
  ProfileWrapper,
  PlayerWrapper,
  Image,
  Form,
} from '../styles/pages/profile/profile.styles';

import SignInput from '../components/SignInput/SignInput.component';
import {
  Button,
  ButtonOverlay,
  ButtonWrapper,
} from '../styles/shared/Button/Button.styles';
import Loading from '../components/Loading/Loading.component';

const Profile: FunctionComponent = () => {
  const { userContext, notificationContext } = useContext(GlobalContext);
  const { setNotificationStatus, setNewNotification } = notificationContext;
  const { user } = userContext;
  const router = useRouter();

  const [isLoading, setIsloading] = useState(true);
  const [player, setPlayer] = useState<Player>({
    name: '',
    email: '',
  } as Player);

  useEffect(() => {
    if (!user.token) router.back();

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
  }, []);

  return (
    <MainWrapper>
      <Navbar />

      {!isLoading ? (
        <ProfileWrapper>
          <PlayerWrapper>
            <Image
              src={`https://avatars.dicebear.com/api/micah/${player.image}`}
              alt={player.name}
            />

            <Form>
              <SignInput
                name="name"
                minWidth="100%"
                colorType="primary"
                label="Name"
                type="text"
                margin={['0px', '0px', '36px', '0px']}
                value={player.name}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPlayer({ ...player, name: e.target.value })
                }
                initialValue={'player'}
              />

              <SignInput
                name="email"
                minWidth="100%"
                colorType="primary"
                label="E-mail"
                type="email"
                margin={['0px', '0px', '36px', '0px']}
                value={player.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPlayer({ ...player, email: e.target.value })
                }
                initialValue={'player'}
              />

              <ButtonWrapper
                minWidth="100%"
                margin={['0px', '0px', '36px', '0px']}
              >
                <ButtonOverlay className="overlay" type="secondary" />
                <Button type="submit">Update</Button>
              </ButtonWrapper>
            </Form>
          </PlayerWrapper>
        </ProfileWrapper>
      ) : (
        <Loading fullPage />
      )}
    </MainWrapper>
  );
};

export default Profile;
