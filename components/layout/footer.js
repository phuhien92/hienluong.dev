import React from 'react';
import styled, {css} from 'styled-components';
import { Grid } from '@material-ui/core';
import { keyframe_heart_beating } from '../../src/KeyFrames';
import { colorOptions, lightTheme } from '../../src/theme';

const theme = {
    "light": {
        backgroundColor: `${lightTheme.PRIMARY_COLOR}`,
        color: `${colorOptions.gray.PRIMARY_COLOR_BOLD}`
    },
    "dark": {
        backgroundColor: `${lightTheme.SECONDARY_BACKGROUND_COLOR}`,
        color: `${colorOptions.gray.PRIMARY_FOREGROUND_COLOR}`
    }
}

const StyledFooter = styled.footer`
    position: relative;
    background-color: ${props => props.theme === "light" ? theme.light.backgroundColor : theme.dark.backgroundColor};
`;

const Credit = styled.p`
    line-height: 30px;
    color: ${props => props.theme === "light" ? theme.light.color : theme.dark.color};
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
        timeout: 2000, 
        theme: "light"
    }

    componentDidUpdate(nextProps) {
        console.log(nextProps)
        if (nextProps.theme !== this.state.theme) {
            this.setState({theme: nextProps.theme});
        }

        return false;
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
        console.log(this.state.theme)
        return (
            <StyledFooter theme={this.state.theme}>
                <Grid 
                    container 
                    direction="row"
                    justify="center"
                >
                    <Grid item md={8} sm={12}>
                        <Credit theme={this.state.theme}>
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