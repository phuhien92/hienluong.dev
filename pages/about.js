import React, {useEffect} from 'react';

function AboutPage(props) {

  useEffect(() => {
    return () => {
      document.title = `About Page | ${props.pageTitle}`
    };
  })

  return (
    <main>
      Hello about page
    </main>
  );
}

export default AboutPage;