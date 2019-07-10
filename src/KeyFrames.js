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
    0%{
        transform:rotate(360deg)
    }
    to{
        transform:rotate(0deg)
    }
`;