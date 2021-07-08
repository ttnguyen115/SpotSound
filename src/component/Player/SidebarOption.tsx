import React from 'react';
import styled from 'styled-components';

interface Props {
    option: string;
    icon?: JSX.Element;
    handleActivePlaylist?: (id: string) => void;
    playlistId?: string;
}

const SidebarOption = (props: Props) => {
    return (
        <OptionContainer onClick={() => props.handleActivePlaylist(props.playlistId)}>
            { props.icon && <IconStyle>{props.icon}</IconStyle>}
            { props.icon ? <h4>{props.option}</h4> : <TitleStyle>{props.option}</TitleStyle> }
        </OptionContainer>
    )
}

export default SidebarOption;

const OptionContainer = styled.div`
    display: flex;
    align-items: center;
    color: grey;
    height: 40px;
    cursor: pointer;
    transition: .2s all ease-in;

    &:hover {
        color: white;
    }
`;

const IconStyle = styled.p`
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 5px;
`;

const TitleStyle = styled.p`
    margin-top: 10px;
    margin-left: 20px;
    font-size: 14px;
`;
