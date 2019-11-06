import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
`;

const ClipboardMessage = styled.div`
    position: absolute;
    opacity: 0.5;
    text-align: left;
    font-weight: 500;
    font-size: ${props => `${props.fontSize}px`};
    width: ${props => `${props.width}px`};
    opacity: 0;
    transform: translate(-50%, -50%);
    left: 50%;
    bottom: 50%;
    transition: cubic-bezier(0.19, 1, 0.22, 1) 1s;
    visibility: hidden;
    min-width: 300px;
    &.active {
        bottom: ${props => `-${props.fontSize*3}px`};
        opacity: 1;
        visibility: visible;
    }
`;

export default class ClipboardCaption extends React.Component {

    state = {
        showClipboard: false
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
            },this.props.timeout)
        })
        
    }

    render() {

        let {
            message,
            copytext,
            buttontext,
            width,
            fontSize
        } = this.props;

        return (
            <Wrapper>
                <span 
                    onClick={this.copyText}
                >{buttontext}</span>
                
                <ClipboardMessage className={this.state.showClipboard ? "active":""} fontSize={fontSize} width={width}>
                    {message}
                </ClipboardMessage>
                <input ref="input" type="text" defaultValue={copytext} style={{position: 'fixed', top: '-1000px'}}></input>
            </Wrapper>
        )
    }
}

ClipboardCaption.defaultValue = {
    message: "hello there, please enter your message 🎉",
    copytext: "",
    buttontext: "clipboard button",
    width: "14",
    fontSize: 14
}