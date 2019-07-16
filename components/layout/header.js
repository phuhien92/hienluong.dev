import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import styled from "styled-components";
import { SCLink } from '../../src/CustomEl';

const StyledAppBar = styled(({ color, ...otherProps }) => (
  <AppBar {...otherProps} />
))`
  && {
    flex-wrap: wrap;
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
      <StyledAppBar position="static" elevation={0}>
        <Toolbar>
          <img src="../static/images/logo-v3.png"/>
          <FlexGrowDiv/>
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
