import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Suisse';
        src: url('../static/fonts/SuisseIntl-Bold-WebS.woff') format('woff');
        font-weight: 700;
    }

    @font-face {
        font-family: 'Suisse';
        src: url('../static/fonts/SuisseIntl-SemiBold-WebS.woff') format('woff');
        font-weight: 600;
    }

    @font-face {
        font-family: 'Suisse';
        src: url('../static/fonts/SuisseIntl-Medium-WebS.woff') format('woff');
        font-weight: 500;
    }

    body {
        margin: 0px;
        font-family: 'Suisse', -apple-system, BlinkMacSystemFont,   "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",   "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif !important;
        width: 100%;
        height: 100vh;
        color: #011118 !important;
        font-weight: 500;
        font-size: 16px;
        overflow-x: hidden;
    }

    h1, h2, h3, h4, h5 {
        font-weight: 700;
        margin: 0px;
        font-family: 'Suisse', -apple-system, BlinkMacSystemFont,   "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",   "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    }

    h2 {
        font-size: 48px;
        letter-spacing: -0.8px;
    }

    h3 {
        font-size: 32px;
        letter-spacing: -0.6px;
    }

    h4 {
        font-size: 24px;
        letter-spacing: -0.4px;
    }

    p {
        font-size: 19px;
        opacity: 0.75;
        line-height: 36px;
        margin: 32px 0px;
        letter-spacing: 0px;
    }

    .gray-c {
        color: rgba(255, 255, 255, 0.6);
    }
`;