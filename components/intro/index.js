import React from 'react';
import { Grid } from '@material-ui/core';
import IntroMessage from './intro_message';
import Image from './image';
import styled from 'styled-components';

const StyledGrid = styled((props) => (
    <Grid {...props} />
  ))`
    && {        
        
    }
`;

const Intro = () => {

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
                <IntroMessage/>
            </Grid>
            <Grid item md={4}>
                <Image/>
            </Grid>
        </StyledGrid>
    )
}

export default Intro;