import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
    render() {
        return (
            <html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    {/* Use minimum-scale=1 to enable GPU rasterization */}
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                    />
                    {/* PWA primary color */}
                    <meta name="theme-color" content="#fff" />
                    <meta name="description=" content="I am Hien Luong, software engineer at Seattle area. I strive to push the world forward by creating a bridge between people and technology."></meta>
                    <meta property="og:title" content="design. by Hien."></meta>
                    <link rel="shortcut icon" href="static/images/favicon.ico"></link>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:900&display=swap" rel="stylesheet"></link>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

                </Head>
                <body>
                    <Main>
                      <div style="
                        position: fixed;
                        top:0;
                        left:0;
                        width: 100%;
                        height: 100%;
                        z-index: 9999;
                        background: red;
                      "></div>
                    </Main>
                    <NextScript />
                </body>
            </html>
        )
    }
}

MyDocument.getInitialProps = async ctx => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render
  
    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
  
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheets.collectStyles(<App {...props} />),
      });
  
    const initialProps = await Document.getInitialProps(ctx);
  
    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: (
        <React.Fragment>
          {initialProps.styles}
          {sheets.getStyleElement()}
        </React.Fragment>
      ),
    };
};
  
export default MyDocument;