import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import styled from "styled-components";
import { SCLink } from '../../src/CustomEl';
import ClipboardCaption from '../../components/ClipboardCaption';
import { colorOptions, base, lightTheme } from '../../src/theme';
import HoverEffectText from '../../src/HoverEffectText';
import Link from 'next/link';

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
    }
  }
`;

const Header = ({toggleNav, isNavOpened, navPosition, menuColor}) => {
    
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
            {/* <nav>
              <SCLink href="#intro" onClick={this.scrollToEl}>
                <span >Intro</span>
              </SCLink>
              <SCLink href="#about" >
                <span onClick={this.scrollToEl}>About</span>
              </SCLink>
              <SCLink href="#work" >
                <span onClick={this.scrollToEl}>Work</span>
              </SCLink>
              <SCLink href="#skills" >
                <span onClick={this.scrollToEl}>Skills</span>
              </SCLink>
              <SCLink href="#contact" >
                <span onClick={this.scrollToEl}>Contact</span>
              </SCLink>
            </nav> */}
          </StyledToolbar>
          <BigMenu className={isNavOpened ? "active":""}>
            <Grid
              container
              spacing={0}
              direction="row"
              justify="center"
              alignItems="flex-start"
              style={{minHeight: '100vh'}}
            >
              <Grid item md={6} sm={12}>
                <Grid item container direction="row" spacing={0}>
                  <Grid item sm={12} md={5}>
                    <List>
                      <li><small>Explore work</small></li>
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
                  <Grid item md={6} sm='auto'>
                    <List>
                      <li></li>
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
                </Grid>
              </Grid>
              <Grid item md={3} sm={12}>
                <List>
                  <li><small>Learn more</small></li>
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
