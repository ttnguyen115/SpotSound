import React, { FC, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { getTokenFromUrl, tokenType } from './api/authUser';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { RootState } from './app/store';
import Login from './component/Login/Login';
import Player from './component/Player/Player';
import { fetchPlaylistListByUser } from './features/playlist/playlistSlice';
import { fetchUserByToken, setToken } from './features/user/userSlice';

const spotify = new SpotifyWebApi();

const App: FC = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state: RootState) => state.user);
  
  useEffect(() => {
    const userToken = localStorage.getItem('token');
    const hash: tokenType = getTokenFromUrl(); 
    window.location.hash = "";
    const token = !userToken ? hash.access_token : userToken;

    if (token) {
      localStorage.setItem('token', token);
      spotify.setAccessToken(token);
      dispatch(setToken(token));

      dispatch(fetchUserByToken());

      dispatch(fetchPlaylistListByUser());
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
