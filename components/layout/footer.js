import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { keyframe_heart_beating } from '../../src/KeyFrames';
import LightButton from '../../src/Button/LightButton';

const StyledFooter = styled.footer`
    background: #011118;
    color: white;
    padding: 120px 0px;
    position: relative;
`;

const StyledFooterTitle = styled.h2`
    margin-bottom: 48px;
    strong {
        color: #fff;
    }
`;

const Credit = styled.p`
    line-height: 30px;
    margin-top: 150px;
    i {
        margin: 0 12px;
        top: 5px;
        position: relative;
        font-size: 1.5em;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        &.icon-heart {
            color: red;
        }
        &.icon-code {
            color: yellow;
        }
        &:hover {
            
            &.icon-code {
                transform: scale(2);
            }
            &.icon-heart {
                animation: ${keyframe_heart_beating} 2s linear infinite;
            }
        }
    }
`;

const Footer = () => {

    return (
        <StyledFooter>
            <Grid 
                container 
                spacing={0}
                direction="row"
                justify="center"
            >
                <Grid
                    item
                    md={5}
                >
                    <StyledFooterTitle className="gray-c">
                        <strong>Say Hi!</strong>
                        <br/>
                        I'd love to grab tea to talk about anything. Shoot me an email and we can work something out.
                    </StyledFooterTitle>
                    <LightButton 
                        value="Get in touch"
                        size="large"
                        bold={true}
                        ></LightButton>
                    
                    <Credit className="gray-c">
                        Made with <i className="material-icons icon-code">code</i>
                        and Lots of
                        <i className="material-icons icon-heart">favorite</i>
                        in Kent, WA
                    </Credit>
                </Grid>
                <Grid
                    item
                    md={3}
                >

                </Grid>
            </Grid>
        </StyledFooter>
    )
}

export default Footer;