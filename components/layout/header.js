import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components";
import { SCLink } from '../../src/CustomEl';

const StyledAppBar = styled(({ color, ...otherProps }) => (
  <AppBar {...otherProps} />
))`
  && {
    flex-wrap: wrap;
    background-color: #fff;
    img {
        flex-grow: 0;
        color: #000;
        width: 40px;
    }
  }
`;

const Header = () => {
  return (
      <StyledAppBar position="relative" elevation={0}>
        <Toolbar>
          <img src="../static/images/logo-v3.png"/>
          <nav>
            <SCLink href="#intro">Intro</SCLink>
            <SCLink href="#about">About</SCLink>
            <SCLink href="#work">Work</SCLink>
            <SCLink href="#skills">Skills</SCLink>
            <SCLink href="#contact">Contact</SCLink>
          </nav>
        </Toolbar>
      </StyledAppBar>
  )
}

export default Header;
