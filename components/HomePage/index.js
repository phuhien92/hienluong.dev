import React from 'react';
import { Grid } from '@material-ui/core';
import IntroSession from './Intro';
import Image from './Intro/image';
import styled from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor'

const StyledGrid = styled((props) => (
    <Grid {...props} />
  ))`
    && {        
        
    }
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