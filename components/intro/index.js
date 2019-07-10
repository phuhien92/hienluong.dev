import React from 'react';
import { Grid } from '@material-ui/core';
import IntroMessage from './intro_message';
import Image from './image';
import styled from 'styled-components';

const StyledGrid = styled((props) => (
    <Grid {...props} />
  ))`
    && props.container && {
        background: #f5f5f5;
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
            style={{minHeight: '100vh'}}
        >
            <Grid item xs={5}>
                <IntroMessage/>
            </Grid>
            <Grid item xs={3}>
                <Image/>
            </Grid>
        </StyledGrid>
    )
}

export default Intro;