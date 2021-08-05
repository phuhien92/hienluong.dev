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
    z-index: 1;
    &::before, &.sc-active {
        content: "";
        position:absolute;
        width: 0%;
        left: -10%;
        bottom: 10%;
        height: 15px;
        background: transparent;
        transition: all 0.3s linear;
        z-index: -1;
    }
    &:hover {
        &::before {
            width: 120%;
            background: #e31e0d;
            opacity: 0.4;
        }
        color: #e31e0d;
    }
`;