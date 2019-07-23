
import React, {useEffect} from 'react';
import HomePage from "../components/HomePage";

function Index({setPageTitle}) {

  useEffect(() => {
    return () => {
      setPageTitle("Home Page")
    };
  })

  return (
    <main>
      <HomePage/>
    </main>
  );
}

export default Index;
