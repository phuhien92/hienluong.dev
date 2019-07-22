import React from 'react';
import { Grid } from '@material-ui/core';
import HoverEffectText from '../../src/HoverEffectText';
import { lightTheme } from '../../src/theme';
import styled from 'styled-components';

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

const AboutPage = () => {
    
    return (
        <Grid
            container 
            spacing={0}
            direction="row"
            justify="center"
            alignItems="flex-start"
            style={{paddingTop: '150px', backgroundColor: `${lightTheme.SECONDARY_BACKGROUND_COLOR}`}}
        >
            <Grid item md={6} xs>
                <StyledHead>
                    <strong>I am Hien Luong.</strong><br/>
                    Full Stack Software Engineer in Greater Seattle Area, WA with strong preference for UI development. 
                    I work at Zones Inc in the role of Lead UI Engineer. Follow me on <a href="https://medium.com/@phuhien"><HoverEffectText active={true}>my blog</HoverEffectText></a> to hear my thoughs on technology, web development. 
                    View my resume on <a href="https://www.linkedin.com/in/hienphuluong"><HoverEffectText active={true}>Linkedin</HoverEffectText></a>. See my latest projects on <a href="https://github.com/phuhien92?tab=repositories"><HoverEffectText active={true}>Github</HoverEffectText></a>. 
                </StyledHead>
            </Grid>
            <Grid item md={2}>

            </Grid>
        </Grid>
    )
}

export default AboutPage