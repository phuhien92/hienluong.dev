import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import Transition from '../components/transition';
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import { GlobalStyle } from "../src/global-styles";

class MyApp extends App {

    state = {
        triggerTransition: true,
        isNavOpened: false,
        navPosition: "fixed",
        overflowClassname: "nav-opened",
        menuColor: "action",
        transitionTimeout: 2000,
        pageTitle: "Hien Luong",

        // footer
        footerTheme: "light"
    }

    componentDidMount() {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles)
        }

        let {
            triggerTransition,
            overflowClassname
        } = this.state;

        setTimeout(() => {
            this.setState({
                triggerTransition: !triggerTransition
            }, () => {
                document.body.classList.remove(overflowClassname)
            });
        }, this.state.transitionTimeout)
    }

    setMenuColor = (color) => this.setState({menuColor: color});

    setPageTitle = (pageTitle) => this.setState({pageTitle: pageTitle});

    setFooterTheme = (footerTheme) => {
        console.log(footerTheme)
        this.setState({footerTheme: footerTheme})
    };

    toggleNav = () => {
        let {
          isNavOpened,
          overflowClassname
        } = this.state;

        (!isNavOpened) ?
            document.body.classList.add(overflowClassname) :
            document.body.classList.remove(overflowClassname)
    
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
            triggerTransition,
            overflowClassname,
            menuColor,
            pageTitle,
            footerTheme
        } = this.state;

        return (
            <Container>
                <Head>
                    <title>
                        {pageTitle} | Portfolio
                    </title>
                </Head>
                <>
                    <GlobalStyle/>
                    <CssBaseline/>
    
                    <Transition triggerTransition={triggerTransition} overflowClassname={overflowClassname}/>
                    <Header 
                        toggleNav={this.toggleNav} 
                        isNavOpened={isNavOpened} 
                        navPosition={navPosition}
                        menuColor={menuColor}
                    />
                    <Component 
                        {...pageProps} 
                        setMenuColor={this.setMenuColor}
                        setPageTitle={this.setPageTitle}
                        setFooterTheme={this.setFooterTheme}
                    />
                    <Footer theme={footerTheme}/>
                </>
            </Container>
        )
    }
}

export default MyApp;