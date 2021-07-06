import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';

const Header = () => {
    const userData = useAppSelector((state: RootState) => state.user.data);

    return (
        <HeaderContainer>
            <SearchContainer>
                <SearchIcon />

                <input type="text" placeholder="Search for Artists, Songs, or Playlists..." />
            </SearchContainer>

            <UserContainer>
                <Avatar alt={userData?.display_name} src={userData?.images[0]?.url}>
                    {userData?.images?.length === 0 ? `${userData?.display_name?.charAt(0)}` : ''}
                </Avatar>

                <h4>{userData?.display_name}</h4>
            </UserContainer>
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`;

const SearchContainer = styled.div`
    flex: 0.5;
    min-width: 70px;
    background-color: white;
    color: grey;
    border-radius: 30px;
    display: flex;
    align-items: center;
    padding: 10px;

    input {
        border: none;
        outline: none;
        width: 100%;
    }
`;

const UserContainer = styled.div`
    display: flex;
    align-items: center;

    h4 {
        margin-left: 10px;
    }
`;
