
import React, {useEffect} from 'react';
import HomePage from "./../components/HomePage";

function Index({setPageTitle, handleImageChange}) {

  useEffect(() => {
    setPageTitle("Home Page")
  }, [])

  return (
    <main>
      <HomePage handleImageChange={handleImageChange}/>
    </main>
  );
}

export default Index;
