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
    h4 {
        flex-grow: 1;
        color: #000;
    }
  }
`;

const Header = () => {
  return (
    <header>
      <StyledAppBar position="relative" elevation={0}>
        <Toolbar>
          <Typography variant="h4"></Typography>
          <nav>
            <SCLink href="#intro">Intro</SCLink>
            <SCLink href="#about">About</SCLink>
            <SCLink href="#work">Work</SCLink>
            <SCLink href="#skills">Skills</SCLink>
            <SCLink href="#contact">Contact</SCLink>
          </nav>
        </Toolbar>
      </StyledAppBar>
    </header>
  )
}

export default Header;
