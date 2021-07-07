import React from 'react'
import styled from 'styled-components'

const SongItem = (props: { track: any }) => {
    return (
        <TrackContainer>
            <img src={props.track.album.images[0].url} alt="song-img" style={{ height: '40px', width: '40px' }} />

            <TrackInfo>
                <h1>{props.track.name}</h1>

                <p>{props.track.artists.map((artist: any) => artist.name).join(',')} -{" "}
                    {props.track.album.name}
                </p>
            </TrackInfo>
        </TrackContainer>
    )
}

export default SongItem;

const TrackContainer = styled.div`
    margin-left: 20px;
    padding: 20px;
    display: flex;
    align-items: center;
    color: white;

    &:hover {
        cursor: pointer;
        background-color: #000;
        opacity: 0.8;
    }
`;

const TrackInfo = styled.div`
    margin-left: 20px;

    h1 {
        font-size: 16px;
    }

    p {
        font-size: 14px;
        margin-top: 3px;
        color: grey;
    }
`;
