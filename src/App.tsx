import React, { FC, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { getTokenFromUrl, tokenType } from './api/authUser';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { RootState } from './app/store';
import Login from './component/Login/Login';
import Player from './component/Player/Player';
import { setPlaylist, setPlaylists } from './features/playlist/playlistSlice';
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
      });

      spotify.getUserPlaylists().then(playlists => {
        playlists.items.forEach(item => {
          const { id, name, href, description, images } = item;
          dispatch(setPlaylists({ id, name, href, description, images }));
        })
      });

      spotify.getPlaylist("5ZIh5XRUgpTZzo4UdDxhhM").then(playlist => {
        const { id, name, tracks, description, images } = playlist;
        dispatch(setPlaylist({ id, name, tracks, description, images }));
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
