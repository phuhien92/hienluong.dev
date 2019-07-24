import React, {useEffect} from 'react';
import AboutPage from '../components/AboutPage';

function About({setPageTitle, setMenuColor}) {

  useEffect(() => {
    return () => {
      setPageTitle('About Page')
      setMenuColor('inherit');
    };
  }, [])

  return (
    <main>
      <AboutPage/>
    </main>
  );
}

export default About;