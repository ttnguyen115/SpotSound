import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import React, { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import Header from './Header';
import SongItem from './SongItem';

const Music: FC = () => {
    const activePlaylist = useAppSelector((state: RootState) => state.playlist.active);

    return (
        <MusicContainer>
            <Header />

            <PlaylistInfo>
                <img src={activePlaylist?.images[0]?.url} alt="" />

                <InfoText>
                    <strong>PLAYLIST</strong>
                    <h2>{activePlaylist?.name}</h2>
                    <p>{activePlaylist?.description}</p>
                </InfoText>
            </PlaylistInfo>

            <SongContainer>
                <MusicControl>
                    <PlayCircleFilledIcon className="play__icon" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </MusicControl>

                {
                    activePlaylist?.tracks?.items.map((item) => (
                        <SongItem key={item?.track?.id} track={item?.track} />
                    ))
                }
            </SongContainer>
        </MusicContainer>
    )
}

export default Music

const MusicContainer = styled.div`
    padding: 30px;
    flex: 0.8;
    height: 100vh;
    background: linear-gradient(rgb(91,87,115), rgba(0,0,0,1));
    color: white;
    overflow-y: overlay;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const PlaylistInfo = styled.div`
    display: flex;
    align-items: flex-end;
    padding: 10px;

    img {
        height: 20vw;
        margin: 0 20px;
        box-shadow: 0 4px 60px rgba(0,0,0,.5);
    }
`;

const InfoText = styled.div`
    flex: 1;

    h2 {
        font-size: 48px;
        margin-bottom: 10px;
    }

    p {
        font-size: 14px;
    }
`;

const SongContainer = styled.div`
    margin: 20px -30px;
`;

const MusicControl = styled.div`
    display: flex;
    align-items: center;

    .play__icon {
        font-size: 80px !important;
        margin: 20px 0 20px 50px;
        cursor: pointer;

        &:hover {
            transform: .1s transform ease-in;
            transform: scale(1.08);
        }
    }

    .MuiSvgIcon-root {
        margin-right: 20px;
    }
`;
