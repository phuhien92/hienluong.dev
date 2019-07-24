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
    margin-top: 150px;
    i {
        margin: 0 12px;
        top: 5px;
        position: relative;
        font-size: 1.5em;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        &.icon-heart {
            color: red;
        }
        &.icon-code {
            color: yellow;
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

const ClipboardCaptionWrapper = styled.div`
    position: relative;
    
    #clipboard-caption {
        position: absolute;
        color: #fff;
        opacity: 0.5;
        text-align: left;
        font-weight: 500;
        font-size: 12px;
        opacity: 0;
        transform: translateY(-24px);
        transition: cubic-bezier(0.19, 1, 0.22, 1) 1s;
        visibility: hidden;
        &.active {
            transform: translateY(10px);
            opacity: 1;
            visibility: visible;
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
                    <Credit className="gray-c">
                        Made with <i className="material-icons icon-code">code</i>
                        and Lots of
                        <i className="material-icons icon-heart">favorite</i>
                        in Kent, WA
                    </Credit>
                </Grid>
            </StyledFooter>
        )
    }
}

export default Footer;