import React from 'react';
import styled from 'styled-components';
import { colorOptions } from '../theme';

const Wrapper = styled.span`
    display: inline-block;
    position: relative;
    transition: color 0.2s ease-in-out;
    z-index: 1;
    &::before {
        content: '';
        position: absolute;
        height: 50%;
        width: 0%;
        background-color: ${props => props.backgroundColor};
        opacity: 0;
        bottom: 0%;
        left: -15px;
        transition: width 0.3s ease-in-out;
        z-index: -1;
    }

    &:hover, &.active {
        color: ${props => props.textColor};
        &::before {
            opacity: 1;
            width: calc(100% + 30px);
        }
    }
`;

const HoverEffectText = ({children, textColor, backgroundColor, active }) => {
    return (
        <Wrapper textColor={textColor} backgroundColor={backgroundColor} className={active ? 'active':''}>
            {children}
        </Wrapper>
    )
}

HoverEffectText.defaultProps = {
    textColor: `#fff`,
    backgroundColor: `${colorOptions.red.PRIMARY_COLOR_BOLD}`,
    active: false
}


export default HoverEffectText;