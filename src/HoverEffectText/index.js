import React from 'react';
import styled from 'styled-components';
import { colorOptions } from '../theme';

const Wrapper = styled.span`
    display: inline-block;
    position: relative;
    transition: color 0.5s ease-in-out;
    z-index: 1;
    &::before {
        content: '';
        position: absolute;
        height: 50%;
        width: 0%;
        background-color: ${props => props.backgroundColor};
        font-size: inherit;
        opacity: 0;
        bottom: 0%;
        left: -15px;
        transition: width 0.5s ease-in-out;
        z-index: -1;
    }

    &:hover, &.active {
        color: ${props => props.textColor};
        font-size: ${props => props.fontSize};
        &::before {
            opacity: 1;
            width: calc(100% + 30px);
        }
    }
`;

const HoverEffectText = ({children, textColor, fontSize, backgroundColor, active }) => {
    return (
        <Wrapper fontSize={fontSize} textColor={textColor} backgroundColor={backgroundColor} className={active ? 'active':''}>
            {children}
        </Wrapper>
    )
}

HoverEffectText.defaultProps = {
    textColor: `#fff`,
    fontSize: 'auto',
    backgroundColor: `${colorOptions.red.PRIMARY_COLOR_BOLD}`,
    active: false
}


export default HoverEffectText;