import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import styled from "styled-components";
import { SCLink } from '../../src/CustomEl';
import ClipboardCaption from '../../components/ClipboardCaption';
import Link from 'next/link';

const StyledAppBar = styled(({ color, ...otherProps }) => (
  <AppBar {...otherProps} />
))`
  && {
    background-color: #fff;
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
  height: 100%;
  background-color: #021117;
  z-index:1;
  padding-top: 10em;
`;

const StyledToolbar = styled((props) => (
  <Toolbar {...props} />
))`
  && {        
      z-index: 2;
  }
`;

const LearnMoreList = styled.ul`
  color: #fff;
  list-style: none;
  li {
    transition: transform cubic-bezier(0.19, 1, 0.22, 1) 1s 0.6s, opacity cubic-bezier(0.19, 1, 0.22, 1) 1s 0.6s, color linear 0.2s;
    padding-bottom: 24px;
    small {
      font-size: 16px;
    }
    span, a {
      cursor: pointer;
      display: block;
      font-size: 24px;
      font-weight: 700;
      text-decoration: none;
      color: #fff;
      display: inline-block;
    }
  }
`;

class Header extends React.Component {

  scrollToEl = (evt) => {
    
  }

  render () {
    let iconColor = "";
    let iconName  = "menu";
    
    return (
        <StyledAppBar position="static" elevation={0}>
            <StyledToolbar>
              <Link href="/"><img src="../static/images/logo-v3.png"/></Link>
              <FlexGrowDiv/>
              <IconButton edge="start" color="inherit" aria-label="Menu">
                <Icon fontSize="large" color={iconColor}>{iconName}</Icon>
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
            <BigMenu>
              <Grid
                container
                spacing={0}
                direction="row"
                justify="center"
                alignItems="flex-start"
                style={{minHeight: '100vh'}}
              >
                <Grid item md={5}>

                </Grid>
                <Grid item md={3}>
                  <LearnMoreList>
                    <li><small>Learn more</small></li>
                    <li><Link href="/about">About</Link></li>
                    <li><a href="https://medium.com/@phuhien" target="_blank">Blog</a></li>
                    <li>
                      <ClipboardCaption
                        copytext="luongphuhien@gmail.com"
                        buttontext="Get in Touch"
                        message="My email has been copied to your clipboard! 🎉"
                        timeout={2000}
                      />
                    </li>
                  </LearnMoreList>
                </Grid>
              </Grid>
            </BigMenu>
        </StyledAppBar>
    )
  }
}

export default Header;
