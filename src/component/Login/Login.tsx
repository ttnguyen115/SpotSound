import React, { FC } from 'react';
import styled from 'styled-components';
import { loginUrl } from '../../api/authUser';

const Login: FC = () => {
    return (
        <LoginContainer>
            <img src="/logo_big_invert.png" alt="logo" />
            <a href={loginUrl}>Login with Spotify</a>
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: black;
    
    a {
        padding: 20px;
        border-radius: 99px;
        background-color: #1db954;
        font-weight: 600;
        color: white;
        text-decoration: none;
    }
`;
