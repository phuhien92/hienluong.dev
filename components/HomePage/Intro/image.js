import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
    height: 400px;
    position: relative;
    text-align: center;
`;

const AvatarImage = styled.img`
    max-width: 350px;
    height: auto;
    border-radius: 50%;
    z-index: 2;
`;

const AnimateBg = styled.div`
    background: url(https://aaronmcguire.co/anim-bg.cbdf2315.svg) no-repeat;
    background-size: contain;
    height: 100%;
    width: 100%;
    position: absolute;
    top: -5%;
    z-index: -1;
`;

const TinkerBg = styled.div`
    background: url(https://aaronmcguire.co/tinker-bg.f5aec05c.svg) no-repeat;
    background-size: contain;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 7%;
    left: 1%;
    z-index: -1;
`;

const ExploreBg = styled.div`
    background: url(https://aaronmcguire.co/explore-bg.20c5fe2c.svg) no-repeat;
    background-size: contain;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 6%;
    right: -22%;
    z-index: -1;
`;

const Image = () => {
    return (
        <ImageContainer>
            
            {/* <AnimateBg/>
            <TinkerBg/>
            <ExploreBg/> */}
            <AvatarImage
                src="static/images/avatar.png"
                alt="avatar"
            />
            
        </ImageContainer>
    )
}

export default Image;