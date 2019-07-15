import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Suisse';
        src: url('../fonts/SuisseIntl-Bold-WebS.woff') format('woff');
        font-weight: 700;
    }

    @font-face {
        font-family: 'Suisse';
        src: url('../fonts/SuisseIntl-SemiBold-WebS.woff') format('woff');
        font-weight: 600;
    }

    @font-face {
        font-family: 'Suisse';
        src: url('../fonts/SuisseIntl-Medium-WebS.woff') format('woff');
        font-weight: 500;
    }

    body {
        margin: 0px;
        font-family: 'Suisse', -apple-system, BlinkMacSystemFont,   "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",   "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        width: 100%;
        height: 100vh;
        color: #011118;
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

    h4 {
        font-size: 24px;
        letter-spacing: -0.4px;
    }

    .gray-c {
        color: rgba(255, 255, 255, 0.6);
    }
`;