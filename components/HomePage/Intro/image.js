import React from 'react';
import styled, {css} from 'styled-components';
import { breakPoints, colorOptions } from '../../../src/theme';
import Weather from '../../Weather';

const ImageContainer = styled.div`
    width: 100%;
    max-width: 400px;
    position: relative;
    text-align: center;
    margin: auto;

`;

const AvatarImage = styled.picture`
    width: 100%;
    position: relative;
    display: block;

    img {
        position: relative;
        width: 100%;
        width: inherit;
    }

`;



const Image = () => {

    let background = "static/images/sun_w_1.jpg";

    return (
        <ImageContainer className="active">
            <Weather>
                <AvatarImage>
                    <img src="static/images/avatar.png" alt="avatar"></img>
                </AvatarImage>
            </Weather>
            
        </ImageContainer>
    )
}

export default Image;