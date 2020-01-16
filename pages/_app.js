import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import Transition from '../components/transition';
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import { GlobalStyle } from "../src/global-styles";
import { initGA, logPageView } from './../components/GoogleAnalytics';
/*
    given a DOM image element, searches it for <img > tags and check if all of them 
    has finished loading or not
    @param: parent node Element
    @return boolean
*/
function imagesLoaded(parentNode) {
    const imgElements = [...parentNode.querySelectorAll('img')];
    imgElements.forEach((imgElement) => {
        if (!imgElement.complete) return false;
    });

    return true;
}

class MyApp extends App {

    state = {
        triggerTransition: true,
        isNavOpened: false,
        navPosition: "fixed",
        overflowClassname: "nav-opened",
        menuColor: "action",
        pageTitle: "Hien Luong",

        // footer
        footerTheme: "light"
    }

    componentDidMount() {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles)
        }

        // disable transition page when all images are loaded
        // 1. Assign load / error event for all unfinished images
        // 2. if all images are loaded, disable transition page
        const imageElements = [...this.bodyElement.querySelectorAll('img')];
        const allImagesLoaded = true;
        imageElements.forEach(img => {
            if (!img.complete) {
                img.addEventListener('load error', () => this.handleImageChange(!imagesLoaded(this.bodyElement)))
                allImagesLoaded = false;
            }
        })

        if(allImagesLoaded) {
            setTimeout(() => this.handleImageChange(false), 3000)
        }

        if (!window.GA_INITIALIZED) {
            initGA();
            window.GA_INITIALIZED = true;
        }
        logPageView();
    }

    componentWillUnmount() {
        const imageElements = [...this.bodyElement.querySelectorAll('img')];
        
        imageElements.forEach(img => {
            img.removeEventListener('load error')
        })
    }

    setMenuColor = (color) => this.setState({menuColor: color});

    setPageTitle = (pageTitle) => this.setState({pageTitle: pageTitle});

    setFooterTheme = (footerTheme) => {
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

    checkAllImagesLoadin

    handleImageChange = (value) => {
        this.setState({
            triggerTransition: value
        }, () => {
            document.body.classList.remove(this.state.overflowClassname)
        });
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
                <div ref={element => this.bodyElement = element}>
                    <GlobalStyle/>
                    <CssBaseline/>
    
                    <Transition triggerTransition={triggerTransition} overflowClassname={overflowClassname}/>
                    {/* <Header 
                        toggleNav={this.toggleNav} 
                        isNavOpened={isNavOpened} 
                        navPosition={navPosition}
                        menuColor={menuColor}
                    /> */}
                    <Component 
                        {...pageProps} 
                        setMenuColor={this.setMenuColor}
                        setPageTitle={this.setPageTitle}
                        setFooterTheme={this.setFooterTheme}
                        handleImageChange={this.handleImageChange}
                    />
                    <Footer theme={footerTheme}/>
                </div>
            </Container>
        )
    }
}

export default MyApp;