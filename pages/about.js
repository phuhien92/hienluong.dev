import React, {useEffect} from 'react';
import AboutPage from '../components/AboutPage';

function About(props) {

  useEffect(() => {
    return () => {
      document.title = `About Page | ${props.pageTitle}`;
      props.setMenuColor('inherit');
    };
  })

  return (
    <main>
      <AboutPage/>
    </main>
  );
}

export default About;