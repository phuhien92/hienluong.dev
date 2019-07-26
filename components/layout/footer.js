import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { keyframe_heart_beating } from '../../src/KeyFrames';
import { colorOptions } from '../../src/theme';

const StyledFooter = styled.footer`
    color: ${colorOptions.red.PRIMARY_COLOR};
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
    color: ${colorOptions.gray.PRIMARY_COLOR_BOLD};
    font-weight: bold;
    width: 100%;
    i {
        margin: 0 12px;
        top: 5px;
        position: relative;
        font-size: 1.5em;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        &.icon-heart {
            color: ${colorOptions.red.PRIMARY_COLOR_BOLD};
        }
        &.icon-code {
            color: ${colorOptions.orange.PRIMARY_COLOR_BOLD};
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

class Footer extends React.Component {
    
    state = {
        showClipboard: false,
        email: "luongphuhien@gmail.com",
        timeout: 2000
    }

    copyText = () => {
        this.refs.input.select();
        document.execCommand("copy", this.showNotice());
    }
    
    showNotice = () => {
        
        this.setState({
            showClipboard: true
        }, () => {
            setTimeout(() => {
                this.setState({ showClipboard: false })
            },this.state.timeout)
        })
        
    }

    render() {    
        return (
            <StyledFooter>
                <Grid 
                    container 
                    spacing={3}
                    direction="row"
                    justify="center"
                >
                    <Grid item md={8} sm={12}>
                        <Credit>
                            Made with <i className="material-icons icon-code">code</i>
                            and Lots of
                            <i className="material-icons icon-heart">favorite</i>
                            in Kent, WA
                        </Credit>
                    </Grid>
                </Grid>
            </StyledFooter>
        )
    }
}

export default Footer;