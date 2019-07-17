import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import styled from "styled-components";
import { SCLink } from '../../src/CustomEl';
import { Grid } from '@material-ui/core';

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

const Header = () => {
  return (
      <StyledAppBar position="fixed" elevation={0}>
          <Toolbar>
            <a href="#intro"><img src="../static/images/logo-v3.png"/></a>
            <FlexGrowDiv/>
            <nav>
              <SCLink href="#intro">
                <span>Intro</span>
              </SCLink>
              <SCLink href="#about">
                <span>About</span>
              </SCLink>
              <SCLink href="#work">
                <span>Work</span>
              </SCLink>
              <SCLink href="#skills">
                <span>Skills</span>
              </SCLink>
              <SCLink href="#contact">
                <span>Contact</span>
              </SCLink>
            </nav>
          </Toolbar>
      </StyledAppBar>
  )
}

export default Header;
