
import React, {useEffect} from 'react';
import HomePage from "../components/HomePage";

function Index({pageTitle}) {

  useEffect(() => {
    return () => {
      document.title = `Home Page | ${pageTitle}`
    };
  })

  return (
    <main>
      <HomePage/>
    </main>
  );
}

export default Index;
