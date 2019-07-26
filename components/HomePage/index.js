import React from 'react';
import { Grid } from '@material-ui/core';
import IntroSession from './Intro';
import Image from './Intro/image';
import styled from 'styled-components';

const StyledGrid = styled((props) => (
    <Grid {...props} />
  ))`
    && {        
        
    }
`;

const SpaceNeedleBackground = styled.div`
    background: url("../static/images/spaceneedle.jpeg") center center no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    filter: brightness(120%) grayscale(100%);
    opacity: .1;
    top: 0;
    z-index: -1;
`;

const HomePage = () => {

    return (
        <StyledGrid
            container 
            spacing={3}
            direction="row"
            alignItems="center"
            justify="center"
            style={{minHeight: '80vh'}}
        >
            <SpaceNeedleBackground/>
            <Grid item md={4}>
                <IntroSession/>
            </Grid>
            <Grid item md={4}>
                <Image/>
            </Grid>
        </StyledGrid>
    )
}

export default HomePage;