import React, { FC } from 'react'
import styled from 'styled-components';
import SidebarOption from './SidebarOption';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined';

let homeIcon: JSX.Element = <HomeOutlinedIcon />
let searchIcon: JSX.Element = <SearchOutlinedIcon />
let libraryIcon: JSX.Element = <LibraryMusicOutlinedIcon />

const Sidebar: FC = () => {
    

    return (
        <SidebarContainer>
            <img src="/logo_big_invert.png" alt="" />

            <SidebarOption icon={homeIcon} option="Home" />
            <SidebarOption icon={searchIcon} option="Search" />
            <SidebarOption icon={libraryIcon} option="Library" />

            <br />
            <PlaylistTitleStyle>PLAYLISTS</PlaylistTitleStyle>
            <hr />


        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
    height: 100vh;
    flex: 0.2;
    background: #040404;
    color: white;
    min-width: 230px;
    padding: 0 10px;
    
    img {
        display: flex;
        justify-content: center;
        margin: 0 auto;
    }

    hr {
        border: 1px solid #282828;
        width: 90%;
        margin: 10px auto;
    }
`;

const PlaylistTitleStyle = styled.strong`
    margin-left: 10px;
    padding: 5px;
    font-size: 12px;
    letter-spacing: 2px;
    font-weight: 500;
`;