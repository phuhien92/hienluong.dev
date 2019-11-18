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

const HomePage = (props) => {

    return (
        <StyledGrid
            container 
            spacing={3}
            direction="row"
            alignItems="center"
            justify="center"
            style={{minHeight: '80vh'}}
        >
            {/* <SpaceNeedleBackground/> */}
            <Grid item md={5} sm={11} xs={11}>
                <IntroSession/>
            </Grid>
            <Grid item md={4} sm={11} xs={11}>
                <Image/>
            </Grid>
        </StyledGrid>
    )
}

export default HomePage;