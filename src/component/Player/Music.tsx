import React, { FC } from 'react'
import styled from 'styled-components';

const Music: FC = () => {
    return (
        <MusicContainer>
            Music
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
