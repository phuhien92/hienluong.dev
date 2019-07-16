import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import Transition from '../components/transition';
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
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

        this.setState({
            status: ""
        });
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
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <GlobalStyle/>
                    <Transition status={this.state.status}/>
                    <Header/>
                    <Component {...pageProps}/>
                    <Footer/>
                </ThemeProvider>
            </Container>
        )
    }
}

export default MyApp;