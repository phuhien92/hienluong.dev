import React, {useEffect} from 'react';
import AboutPage from '../components/AboutPage';

function About({setPageTitle, setMenuColor, setFooterTheme}) {

  useEffect(() => {
      setPageTitle('About Page')
      setMenuColor('inherit')
      setFooterTheme('dark')
  }, [])

  return (
    <main>
      <AboutPage/>
    </main>
  );
}

export default About;