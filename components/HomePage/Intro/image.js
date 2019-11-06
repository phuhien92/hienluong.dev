import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { breakPoints, colorOptions } from '../../../src/theme';

const ImageContainer = styled.div`
    max-height: 400px;
    max-width: 400px;
    position: relative;
    text-align: center;
    margin: auto;
`;

const AvatarImage = styled.img`
    width: 100%;
    background: ${colorOptions.orange.PRIMARY_COLOR_LIGHT};
    border: 15px solid ${colorOptions.orange.PRIMARY_COLOR};
    border-radius: 50%;
    width: 100%;

    @media (max-width: ${breakPoints.md}px) {
        width: 80%;
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