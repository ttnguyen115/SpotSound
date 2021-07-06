import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import RepeatIcon from '@material-ui/icons/Repeat';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import React, { FC } from 'react';
import styled from 'styled-components';

const Footer: FC = () => {
    return (
        <FooterContainer>
            <DetailContainer>
                <SongImage src="" alt="" />

                <div className="">
                    <h4>Song name</h4>

                    <p>Song desc</p>
                </div>
            </DetailContainer>

            <ControlContainer>
                <ShuffleIcon className="control__icon" style={{ color: 'green' }} />
                <SkipPreviousIcon className="control__icon" />
                <PlayCircleOutlineIcon className="control__icon" fontSize="large" />
                <SkipNextIcon className="control__icon" />
                <RepeatIcon className="control__icon" style={{ color: 'green' }} />
            </ControlContainer>

            <VolumeContainer>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>

                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>

                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </VolumeContainer>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    bottom: 0;
    width: 97%;
    height: 65px;
    background: #282828;
    padding: 20px;
`;

const DetailContainer = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    width: 300px;
    color: white;
`;

const ControlContainer = styled.div`
    flex: 0.4;
    padding: 0 100px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 300px;

    .control__icon {
        margin: 0 10px;

        &:hover {
            transition: transform .2s ease-in-out;
            transform: scale(1.2) !important;
            cursor: pointer;
        }
    }
`;

const VolumeContainer = styled.div`
    flex: 0.3;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & * .MuiSlider-root {
        color: green;
    }
`;

const SongImage = styled.img`
    height: 60px;
    width: 60px;
    margin-right: 20px;
    object-fit: contain;

    h4 {
        margin-bottom: 5px;
    }

    p {
        font-size: 12px;
    }
`;
