import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import LightButton from '../../src/Button/LightButton';
import ScrollableAnchor from 'react-scrollable-anchor'

const StyledFooter = styled.footer`
    background: #011118;
    color: white;
    padding: 120px 0px;
    position: relative;
`;

const StyledFooterTitle = styled.h2`
    margin-bottom: 48px;
    strong {
        color: #fff;
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

class AboutFooter extends React.Component {
    
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
            <ScrollableAnchor id="contact">
            <StyledFooter>
                <Grid 
                    container 
                    spacing={0}
                    direction="row"
                    justify="center"
                >
                    <Grid
                        item
                        md={5}
                        sm={11}
                        xs={10}
                    >
                        <StyledFooterTitle className="gray-c">
                            <strong>Say Hi!</strong>
                            <br/>
                            I'd love to grab tea to talk about anything. Shoot me an email and we can work something out.
                        </StyledFooterTitle>

                        <ClipboardCaptionWrapper>
                            <LightButton 
                                value="Get in touch"
                                size="large"
                                bold={true}
                                onClick={this.copyText}
                            ></LightButton>
                            
                            <div id="clipboard-caption" className={this.state.showClipboard ? "active":""}>
                                My email has been copied to your clipboard! 🎉
                            </div>
                            <input ref="input" type="text" defaultValue={this.state.email} style={{position: 'fixed', top: '-1000px'}}></input>
                        </ClipboardCaptionWrapper>
                    </Grid>
                    <Grid
                        item
                        md={3}
                    ></Grid>
                </Grid>
            </StyledFooter>
            </ScrollableAnchor>
        )
    }
}

export default AboutFooter;