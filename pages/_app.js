import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import Transition from '../components/transition';
import Header from "../components/layout/header";
import Footer from "../components/layout/footer.copy";
import { GlobalStyle } from "../src/global-styles";

class MyApp extends App {

    state = {
        triggerTransition: true,
        isNavOpened: true,
        navPosition: "fixed"
    }

    componentDidMount() {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles)
        }

        let {
            triggerTransition
        } = this.state;

        setTimeout(() => {
            this.setState({
                triggerTransition: !triggerTransition
            });
        })
    }

    toggleNav = () => {
        let {
          isNavOpened
        } = this.state;

        (!isNavOpened) ?
            document.body.classList.add('nav-opened') :
            document.body.classList.remove('nav-opened')
    
        this.setState({
            isNavOpened: !isNavOpened,
        })
    }

    render() {
        let {
            Component,
            pageProps
        } = this.props;

        let {
            isNavOpened,
            navPosition,
            triggerTransition
        } = this.state;

        return (
            <Container>
                <Head>
                    <title>
                        Hien Portfolio | Software Engineer
                    </title>
                </Head>
                <>
                    <GlobalStyle/>
                    <CssBaseline/>
    
                    <Transition triggerTransition={triggerTransition}/>
                    <Header 
                        toggleNav={this.toggleNav} 
                        isNavOpened={isNavOpened} 
                        navPosition={navPosition}
                    />
                    <Component 
                        {...pageProps} 
                        pageTitle='Portfolio'
                    />
                    <Footer/>
                </>
            </Container>
        )
    }
}

export default MyApp;