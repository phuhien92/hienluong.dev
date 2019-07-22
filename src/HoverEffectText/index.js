import React from 'react';
import styled from 'styled-components';
import { colorOptions } from '../theme';

const Wrapper = styled.span`
    display: inline-block;
    position: relative;
    transition: color 0.2s ease-in-out;

    &::before {
        content: '';
        position: absolute;
        height: 50%;
        width: 0%;
        background-color: ${props => props.backgroundColor};
        opacity: 0;
        bottom: 0%;
        left: -10%;
        transition: width 0.3s ease-in-out;
        z-index: -1;
    }

    &:hover {
        color: ${props => props.textColor};
        text-shadow: 0px 1px 0px #000;
        &::before {
            opacity: 1;
            width: 120%;
        }
    }
`;

const HoverEffectText = ({children, textColor, backgroundColor }) => {
    return (
        <Wrapper textColor={textColor} backgroundColor={backgroundColor}>
            {children}
        </Wrapper>
    )
}

HoverEffectText.defaultProps = {
    textColor: `#fff`,
    backgroundColor: `${colorOptions.red.PRIMARY_COLOR_BOLD}`
}


export default HoverEffectText;