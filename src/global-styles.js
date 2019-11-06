import { createGlobalStyle } from 'styled-components';
import { base, colorOptions, breakPoints } from './theme';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Mr De Haviland', cursive;
        src: url('https://fonts.googleapis.com/css?family=Mr+De+Haviland&display=swap') format('woff');
        font-weight: 500;
    }

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
        width: 100%;
        height: 100vh;
        color: #011118 !important;
        font-weight: 500;
        font-size: cal(16px + 10vw);
        overflow-x: hidden;
        line-height: 1.43;
        &.nav-opened {
            overflow: hidden;
        }
    }

    h1, h2, h3, h4, h5 {
        margin: 0px;
        font-family: ${base.PRIMARY_FONT_FAMILY};
    }

    h1 {
        font-size: 72px;
        letter-spacing: -1.2px;
        @media screen and (max-width: ${breakPoints.lg}px) {
            font-size: 48px;
            letter-spacing: -0.8px;
        }
    }

    h2 {
        font-size: 48px;
        letter-spacing: -0.8px;

        @media screen and (max-width: ${breakPoints.lg}px) {
            font-size: 32px;
            letter-spacing: -0.6px;
        }
    }

    h3 {
        font-size: 32px;
        letter-spacing: -0.6px;
        @media screen and (max-width: ${breakPoints.lg}px) {
            font-size: 24px;
            letter-spacing: -0.4px;
        }
    }

    h4 {
        font-size: 24px;
        letter-spacing: -0.4px;
        @media (max-width: ${breakPoints.lg}px) {
            font-size: 18px;
            letter-spacing: -0.2px;
        }
    }

    h5 {
        font-size: 18px;
        letter-spacing: -0.2px;
        @media (max-width: ${breakPoints.lg}px) {
            font-size: 14px;
        }
    }

    p {
        font-size: 19px;
        opacity: 0.75;
        line-height: 36px;
        margin: 32px 0px;
        letter-spacing: 0px;
        @media (max-width: ${breakPoints.lg}px) {
            font-size: 16px;
            opacity: 0.75;
            line-height: 28px;
            margin: 24px 0px;
            letter-spacing: 0px;
        }
    }

    .gray-c {
        color: ${colorOptions.gray.PRIMARY_COLOR_LIGHT};
    }
    .red-c {
        color: ${colorOptions.red.PRIMARY_COLOR};
    }
`;