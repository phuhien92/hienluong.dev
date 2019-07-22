import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { page_transition_content_progress } from '../../src/KeyFrames';

const PageTransition = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 9999;
    overflow: hidden;
    transform: scaleX(0);
    transition: transform cubic-bezier(0.19, 1, 0.22, 1) 1s 1s;
    transform-origin: center right; 
    &.active {
        transform: scaleX(1);
        transform-origin: center left;
        transition-delay: 0s;
        .pg-t-swipe {
            transform: translateX(-100%);
            transition: none;
            transition-delay: 0s;
        }
    }
    .relative {
        position: relative;
    }
`;

const PageTPanel = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: #011118;
    z-index: -1;
`;

const PageTSwipe = styled.div`
    position: absolute;
    background: rgba(255, 255, 255, 0.05);
    width: 200%;
    height: 100%;
    top: 0px;
    left: 0px;
    transform: translateX(100%);
    transition: transform cubic-bezier(0.19, 1, 0.22, 1) 3.2s;
    transition-delay: 0.5s;
`;

const PageTContent = styled.div`
    position: absolute;
    top: 45%;
    left: 50%;
    margin-right: auto;
    margin-left: auto;
    width: 1200px;
    transform: translate(-50%,-50%);
    transition: all 0.5s linear;
    opacity: 1;
`;

const TransitionProgress = styled.div`
    background: rgba(255, 255, 255, 0.1);
    height: 1px;
    width: 100%;
    margin-top: 48px;
    overflow: hidden;
    position: relative;

    &::before {
        content: '';
        width: 120px;
        height: 1px;
        display: block;
        position: absolute;
        background: white;
        animation-duration: 2s;
        animation-timing-function: ease;
        animation-iteration-count: infinite;
        animation-name: ${page_transition_content_progress};
    }
`;

const StyledH2 = styled.h2`
    color:#fff;
    font-weight: bold;
    font-family: 'Tiempos Fine';
`;

const StyledH4 = styled.h4`
    color:#fff;
    font-weight: bold;
    opacity: 0.5;
`;

const Transition = (props) => {

    return (
        <PageTransition className={props.triggerTransition ? 'active':''}>
            <PageTPanel/>
            <PageTSwipe className="pg-t-swipe"/>
            <PageTContent>
                <StyledH2>
                    Hien Luong
                </StyledH2>
                <StyledH4>
                    Software Engineer at Greater Seattle Area
                </StyledH4>
                <TransitionProgress/>
            </PageTContent>
        </PageTransition>
    )
}

export default Transition;