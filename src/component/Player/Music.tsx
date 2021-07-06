import React, { FC } from 'react'
import styled from 'styled-components';
import Header from './Header';

const Music: FC = () => {
    return (
        <MusicContainer>
            <Header />

            <PlaylistInfo>
                <img src="" alt="" />

                <InfoText>
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>description...</p>
                </InfoText>
            </PlaylistInfo>
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