import React from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 200px 0;
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
                <Grid item xs={11} sm={11} md={3}>
                    <h1>Code.<br/>By Myself</h1>
                </Grid>
                <Grid item xs={11} sm={11} md={5}>
                    <h3>
                        I push myself to redesign my portfolio
                    </h3>
                    <p>
                        I redesign my personal website to reflect on the projects I worked on, and most importantly, self-evaluate how much 
                        I grew as a UI engineer in the past year. Since my first website in 2016, I grew as an engineer by trying new themes, technologies, and presentation strategies.
                        
                    </p>
                </Grid>
            </Grid>
        </Wrapper>
    )
}

export default Personal