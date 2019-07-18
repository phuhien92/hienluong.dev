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
            buttontext
        } = this.props;

        let defaultMessage = "hello there, please enter your message 🎉";

        return (
            <Wrapper>
                <span 
                    onClick={this.copyText}
                >{buttontext}</span>
                
                <ClipboardMessage className={this.state.showClipboard ? "active":""}>
                    {message ? message : defaultMessage}
                </ClipboardMessage>
                <input ref="input" type="text" defaultValue={copytext} style={{position: 'fixed', top: '-1000px'}}></input>
            </Wrapper>
        )
    }
}