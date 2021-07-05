import React, { FC } from 'react'
import styled from 'styled-components'

const Footer: FC = () => {
    return (
        <FooterContainer>
            Footer
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 65px;
    background: #282828;
    padding: 20px;
`;
