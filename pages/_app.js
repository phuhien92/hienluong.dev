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
        status: "active"
    }

    componentDidMount() {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles)
        }

        setTimeout(() => {
            this.setState({
                status: ""
            });
        })
    }

    render() {
        const {
            Component,
            pageProps
        } = this.props;

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
    
                    <Transition status={this.state.status}/>
                    <Header/>
                    <Component {...pageProps}/>
                    <Footer/>
                </>
            </Container>
        )
    }
}

export default MyApp;