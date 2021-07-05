import React, { FC, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { getTokenFromUrl, tokenType } from './api/authUser';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { RootState } from './app/store';
import Login from './component/Login/Login';
import Player from './component/Player/Player';
import { setToken, setUser } from './features/user/userSlice';

const spotify = new SpotifyWebApi();

const App: FC = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state: RootState) => state.user);

  useEffect(() => {
    const hash: tokenType = getTokenFromUrl(); 
    window.location.hash = "";
    const token = hash.access_token;

    if (token) {
      spotify.setAccessToken(token);
      dispatch(setToken(token));
        
      spotify.getMe().then(user => {
        const { display_name, id, type, uri, images } = user;
        dispatch(setUser({ display_name, id, uri, type, images }));
      })
    }
  }, [dispatch]);

  return (
    <div>
      {
        userData.token
        ? <Player />
        : <Login />
      }
    </div>
  );
}

export default App;
