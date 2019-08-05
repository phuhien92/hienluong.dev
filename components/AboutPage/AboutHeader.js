import React from 'react'
import { Grid } from '@material-ui/core';
import HoverEffectText from '../../src/HoverEffectText';
import { lightTheme, colorOptions, base, breakPoints } from '../../src/theme';
import styled from 'styled-components';

const StyledGrid = styled((props) => (
    <Grid {...props} />
  ))`
    && {        
        min-height: 100vh;
        padding-top: 100px; 
        padding-bottom: 100px;
        background-color: ${lightTheme.SECONDARY_BACKGROUND_COLOR};
    }
`;

const StyledHead = styled.h2`
    color: rgba(255, 255, 255, 0.6);
    
    strong {
        color: #fff;
        font-size: 1.2em;
    }

    a {
        margin-left: 15px;
        margin-right: 15px;
    }
`;

const Year = styled.ul`
    padding: 0;
    text-align: center;
    font-weight: bold;
    font-size: 17em;
    line-height: 1em;
    color: #fff;
    position: absolute;
    z-index:1;
    margin: 0 0 0 150px;

    @media screen and (max-width: ${breakPoints.md}px) {
        display: none;   
    }

    li {
        list-style: none;
        text-shadow: 6px 10px 0px ${colorOptions.red.PRIMARY_COLOR_BOLD};
    }
`;

const LicenscePlate = styled.div`
    padding: 10px;
    border-radius: 10px;
    background-color: #fff;
    width: 100%;
    min-width: 250px;
    background-image: url('/static/images/mount_rainier.jpg');
    background-position: bottom center;
    background-size: contain;
    background-repeat: no-repeat;
    border: 2px solid #aaa;
    box-shadow: 2px 0px 0px #f5f5f5;
    p {
        font-size: ${base.FONT_SIZE_MASSIVE}px;
        color: ${lightTheme.SECONDARY_BACKGROUND_COLOR};
        text-shadow: none;
        margin: 0;
        text-align: left;
    }
    .redtxt {
        color: ${colorOptions.red.PRIMARY_COLOR_BOLD};
    }
    .text-center {
        text-align: center;
    }
    .smalltxt {
        font-size: ${base.FONT_SIZE_MEDIUM}px;
    }
    .text-shadow {
        text-shadow: 2px 2px 0px #fff;
    }
`;

const AboutHeader = () => {

    return (
        <StyledGrid
            container 
            direction="row"
            justify="center"
            alignItems="flex-start"
        >
            <Grid 
                item 
                xs={10} 
                sm={11} 
                md={6}
            >
                <StyledHead>
                    <strong>I am Hien Luong.</strong><br/>
                    Full Stack Software Engineer in Greater Seattle Area, WA with strong preference for UI development. 
                    I work at Zones Inc in the role of Lead UI Engineer. Follow me on <a href="https://medium.com/@phuhien"><HoverEffectText active={true}>my blog</HoverEffectText></a> to hear my thoughs on technology, web development. 
                    View my resume on <a href="https://www.linkedin.com/in/hienphuluong"><HoverEffectText active={true}>Linkedin</HoverEffectText></a>. See my latest projects on <a href="https://github.com/phuhien92?tab=repositories"><HoverEffectText active={true}>Github</HoverEffectText></a>. 
                </StyledHead> 
            </Grid>
            <Grid item xs={10} sm={11} md={2}>
                <Year>
                    <li>
                        <LicenscePlate>
                            <p className="redtxt smalltxt text-shadow">WASHINGTON</p>
                            <p className="text-center text-shadow">BUILT IN</p>
                            <p className="redtxt smalltxt text-center text-shadow">EVER GREEN STATE</p>
                        </LicenscePlate>
                    </li>
                    <li>2</li>
                    <li>0</li>
                    <li>1</li>  
                    <li>9</li>    
                </Year>
            </Grid>
        </StyledGrid>
    )
}

export default AboutHeader