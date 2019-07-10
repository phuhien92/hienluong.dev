import styled from 'styled-components';
import { keyframe_roating_clockwise } from './KeyFrames';

export const SCLink = styled.a`
    font-size: 2rem;
    color: #000;
    font-weight: 700;
    position: relative;
    text-decoration: none;
    display: inline-block;
    margin: 20px;
    &::after, &.sc-active {
        content: "";
        position:absolute;
        width: 0%;
        left: -10%;
        bottom: 10%;
        height: 15px;
        background: transparent;
        transition: all 0.2s linear;
        z-index: -1;
    }
    &:hover {
        &::after {
            width: 120%;
            background: linear-gradient(#4da6fe,#197bdb,#147ee7);
        }
    }
`;