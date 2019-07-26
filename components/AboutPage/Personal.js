import React from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components'

const Wrapper = styled.div`

`;

const Personal = () => {

    return (
        <Wrapper>
            <Grid
                container
                spacing={2}
                direction="row"
                justify="center"
            >
                <Grid item>
                    <h1>Let me show you<br/> My Work</h1>
                </Grid>
                <Grid item>
                    
                </Grid>
            </Grid>
        </Wrapper>
    )
}

export default Personal