import React from 'react';
import styled from 'styled-components';
import { breakPoints } from '../../../src/theme';

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
    width: 100%;
    @media screen (max-width: ${breakPoints.md}px ) {
        width: 70%;   
    }
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