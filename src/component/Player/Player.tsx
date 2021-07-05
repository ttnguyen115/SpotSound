import React, { FC } from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Music from './Music';
import Sidebar from './Sidebar';

const Player: FC = () => {
    return (
        <div>
            <MainContainer>
                <Sidebar />
                <Music />
            </MainContainer>

            <Footer />
        </div>
    )
}

export default Player

const MainContainer = styled.div`
    display: flex;
`;
