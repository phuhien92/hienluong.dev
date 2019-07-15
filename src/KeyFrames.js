import styled, { keyframes } from 'styled-components';

export const keyframe_roating_clockwise = keyframes`
    0%{
        transform:rotate(0deg)
    }
    to{
        transform:rotate(1turn)
    }
`;

export const keyframe_roating_counterclockwise = keyframes`
    from{
        transform:rotate(360deg)
    }
    to{
        transform:rotate(0deg)
    }
`;

export const keyframe_heart_beating = keyframes`
    0% {
        transform: scale(2);
    }
    15% {
        transform: scale(1);
    }
    30% {
        transform: scale(2);
    }
    45% {
        transform: scale(1);
    }
    100% {
        transform: scale(1);
    }
`;

export const page_transition_content_progress = keyframes`
    0% {transform: translateX(-120px);}
    100%  {transform: translateX(1320px);}
`;