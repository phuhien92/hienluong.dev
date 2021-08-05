import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import styled from "styled-components";
import ClipboardCaption from '../../components/ClipboardCaption';
import HoverEffectText from '../../src/HoverEffectText';
import { colorOptions, base, lightTheme, breakPoints } from '../../src/theme';
import { Tab, Tabs } from '@material-ui/core';

const StyledAppBar = styled(({ color, ...otherProps }) => (
  <AppBar {...otherProps} />
))`
  && {
    background: transparent;
    img {
        color: #000;
        width: 40px;
    }
  }
`;


const FlexGrowDiv = styled.nav`
  flex-grow: 1;
`;

const BigMenu = styled.div`
  position: fixed;
  width: 100%;
  height: 0%;
  background-color: ${lightTheme.SECONDARY_BACKGROUND_COLOR};
  z-index:1;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  &.active {
    height: 100%;
    padding-top: 10em;

    @media screen and (max-width: ${breakPoints.lg}px){
      padding-top: 5em;     
    }
    ul {
      li {
        transform: translateY(0px);
      }
    }
  }
`;

const StyledToolbar = styled((props) => (
  <Toolbar {...props} />
))`
  && {        
      z-index: 2;
  }
`;

const List = styled.ul`
  color: #fff;
  list-style: none;
  padding: 0;
  li {
    margin-bottom: 24px;
    min-height: 36px;

    > * {
      &:hover {
        opacity: 1;
      }
    }
    small {
      font-size: ${base.FONT_SIZE_SMALL}px;
      opacity: 0.75;
      font-weight: bold;
      position: relative;
      cursor: pointer;
      &:before {
        content: '';
        position: absolute;
        bottom: -5px;
        height: 3px;
        width: 50%;
        background: ${colorOptions.red.PRIMARY_COLOR_BOLD};
      }
    }
    span, a {
      cursor: pointer;
      display: block;
      font-size: ${base.FONT_SIZE_EXTRA_LARGE}px;
      font-weight: ${base.FONT_WEIGHT_BOLD};
      text-decoration: none;
      color: #fff;
      display: inline-block;
    }
    h5 {
      opacity: 0.25;
      margin-bottom: 40px;
      line-height: 24px;
      @media screen and (max-width: ${breakPoints.lg}px){
        margin-bottom: 20px;
      }
    }
  }
`;

const Header = ({toggleNav, isNavOpened, navPosition, menuColor}) => {
  
  const [viewport, setViewport] = useState(0);
  const [tab, setTab] = useState(0);

  useEffect(() => {
    let viewportWidth = window.innerWidth;

    setViewport({width: viewportWidth});

    window.addEventListener('resize', () => {
      setViewport({width: window.innerWidth})
    })
  }, [])

  const handleChangeTabIndex = (e,index) => setTab(index);

  return (
    <StyledAppBar position={navPosition} elevation={0}>
        <StyledToolbar>
          <a href="/"><img src="../static/images/logo-v3.png"/></a>
          <FlexGrowDiv/>
          <IconButton edge="start" color="inherit" onClick={toggleNav}>
            {isNavOpened ? 
              <Icon fontSize="large" color={'inherit'}>close</Icon> :
              <Icon fontSize="large" color={ menuColor || 'action'}>menu</Icon>
            }
          </IconButton>
        </StyledToolbar>
        <BigMenu className={isNavOpened ? "active":""}>
          <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="flex-start"
            
          >
            <Grid item lg={6} sm={11} xs={11}>
              { 
                viewport.width <= `${breakPoints.lg}` &&
                <Tabs
                  value={tab}
                  onChange={handleChangeTabIndex}
                  variant="fullWidth"
                >
                  <Tab label="Featured Projects"></Tab>
                  <Tab label="Other Projects"></Tab>
                </Tabs>
              }
              <Grid item container direction="row" spacing={3}>
                { ( (viewport.width <= `${breakPoints.lg}` && tab === 0) ||  viewport.width > `${breakPoints.lg}`) &&
                <Grid item xs={11} sm={11} lg={5}>
                  <List>
                    { viewport.width > `${breakPoints.lg}` &&
                    <li><small>Explore work</small></li>
                    }
                    <li>
                      <a href="/work">
                        <HoverEffectText>
                          <h3>Project Title</h3>
                        </HoverEffectText>
                        <h5>The tool that does it all.</h5>
                      </a>
                    </li>
                    <li>
                      <a href="/work">
                        <HoverEffectText>
                          <h3>Project Title</h3>
                        </HoverEffectText>
                        <h5>The tool that does it all.</h5>
                      </a>
                    </li>
                  </List>
                </Grid>
                }
                { ( (viewport.width <= `${breakPoints.lg}` && tab === 1) ||  viewport.width > `${breakPoints.lg}`) &&
                <Grid item xs={11} sm={11} lg={6}>
                  <List>
                  { viewport.width > `${breakPoints.lg}` && <li></li>}
                    <li>
                      <a href="/work">
                        <HoverEffectText>D&amp;J Corporation Kindergarten</HoverEffectText>
                      </a>
                    </li>
                    <li>
                      <a href="/work">
                        <HoverEffectText>Educate Whimsy Games</HoverEffectText>
                      </a>
                    </li>
                    <li>
                      <a href="/work">
                        <HoverEffectText>A.S+C.E.N.D</HoverEffectText>
                      </a>
                    </li>
                  </List>
                </Grid>
                }
              </Grid>
            </Grid>
            <Grid item lg={3} sm={11} xs={11}>
              <List>
                { viewport.width >= `${breakPoints.sm}` &&
                <li><small>LEARN MORE</small></li>
                }
                <li>
                  <HoverEffectText>
                    <a href="/about">About</a>
                  </HoverEffectText>
                </li>
                <li>
                  <HoverEffectText><a href="https://medium.com/@phuhien" target="_blank">Blog</a></HoverEffectText>
                </li>
                <li>
                  <HoverEffectText>
                    <ClipboardCaption
                      copytext="luongphuhien@gmail.com"
                      buttontext="Get in Touch"
                      message="My email has been copied to your clipboard! 🎉"
                      timeout={2000}
                    />
                  </HoverEffectText>
                </li>
              </List>
            </Grid>
          </Grid>
        </BigMenu>
    </StyledAppBar>
  )
}

export default Header;
