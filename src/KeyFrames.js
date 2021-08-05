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

export const keyframe_fadein = keyframes`
    0%{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;

export const keyframe_fadeout = keyframes`
    0%{
        opacity: 1;
    }
    to{
        opacity: 0;
    }
`;

export const keyframe_spin = keyframes`
    100% { transform: rotate(360deg); }
`;

export const keyframe_flip = keyframes`
    from {transform: rotateY(0deg);}
    to {transform: rotateY(359deg);}
`

export const keyframe_cloud = keyframes`
    0% { opacity: 0; }
    50% { opacity: 0.3; }
    100% {
      opacity: 0;
      transform: scale(0.5) translate(-200%, -3em);
    }
`;
  
export const keyframe_rain = keyframes`
    0% {
      background: #0cf;
      box-shadow:
        0.625em 0.875em 0 -0.125em rgba(255,255,255,0.2),
        -0.875em 1.125em 0 -0.125em rgba(255,255,255,0.2),
        -1.375em -0.125em 0 #0cf;
    }
    25% {
      box-shadow:
        0.625em 0.875em 0 -0.125em rgba(255,255,255,0.2),
        -0.875em 1.125em 0 -0.125em #0cf,
        -1.375em -0.125em 0 rgba(255,255,255,0.2);
    }
    50% {
      background: rgba(255,255,255,0.3);
      box-shadow:
        0.625em 0.875em 0 -0.125em #0cf,
        -0.875em 1.125em 0 -0.125em rgba(255,255,255,0.2),
        -1.375em -0.125em 0 rgba(255,255,255,0.2);
    }
    100% {
      box-shadow:
        0.625em 0.875em 0 -0.125em rgba(255,255,255,0.2),
        -0.875em 1.125em 0 -0.125em rgba(255,255,255,0.2),
        -1.375em -0.125em 0 #0cf;
    }
`;
  
export const keyframe_lightning = keyframes`
    45% {
      color: #fff;
      background: #fff;
      opacity: 0.2;
    }
    50% {
      color: #0cf;
      background: #0cf;
      opacity: 1;
    }
    55% {
      color: #fff;
      background: #fff;
      opacity: 0.2;
    }
`;