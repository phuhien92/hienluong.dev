import React from 'react';
import './WIcon.css';
import styled from 'styled-components';
import { colorOptions, breakPoints } from '../../src/theme';

const Icon = styled.div`
    color: #fff;

    @media screen and (max-width: ${breakPoints.sm}px){
        transform: scale(0.6);
    }
    p {
        position: absolute;
        color: ${colorOptions.gray.PRIMARY_COLOR_BOLD};
        text-align: center;
        transform: translate(-50%,-50%);
        left: 50%;
        bottom: -15px;
        line-height: 1.2;
        font-weight: 600;
        text-transform: capitalize;
        font-size: 100%;
        z-index: 2;
    }
`;
  
const WIcon = (props) => {

    const {
        type,
        text
    } = props;

    return (
    <div>
        { type === "sun-shower" && (
        <Icon className="icon sun-shower">
            <div className="cloud"></div>
            <div className="sun">
                <div className="rays"></div>
            </div>
            <div className="rain"></div>
            <p>{text}</p>
        </Icon>)}

        { type === "thunder-storm" &&
        (<Icon className="icon thunder-storm">
            <div className="cloud"></div>
            <div className="lightning">
                <div className="bolt"></div>
                <div className="bolt"></div>
            </div>
            <p>{text}</p>
        </Icon>)
        }

        { type === "cloudy" &&
        (<Icon className="icon cloudy">
            <div className="cloud"></div>
            <div className="cloud"></div>
            <p>{text}</p>
        </Icon>)}

        { type === "snow" &&
        (<Icon className="icon flurries">
            <div className="cloud"></div>
            <div className="snow">
                <div className="flake"></div>
                <div className="flake"></div>
            </div>
            <p>{text}</p>
        </Icon>)}

        { type === "sunny" &&
        (<Icon className="icon sunny">
            <div className="sun">
                <div className="rays"></div>
            </div>
            <p>{text}</p>
        </Icon>)}

        { type === "rainy" &&
        (<Icon className="icon rainy">
            <div className="cloud"></div>
            <div className="sun"></div>
            <div className="rain"></div>
            <p>{text}</p>
        </Icon>)}
    </div>
    )
}

export default WIcon