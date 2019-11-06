import React from 'react';
import styled from 'styled-components';
import { breakPoints, colorOptions } from '../../../src/theme';

const ImageContainer = styled.div`
    height: 400px;
    width: 400px;
    position: relative;
    text-align: center;
    background: ${colorOptions.orange.PRIMARY_COLOR_LIGHT};
    border: 15px solid ${colorOptions.orange.PRIMARY_COLOR};
    border-radius: 50%;
    margin: auto;
`;

const AvatarImage = styled.img`
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