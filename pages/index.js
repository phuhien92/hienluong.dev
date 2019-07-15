import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Intro from "../components/intro";
import '../src/global-styles';
import { GlobalStyle } from "../src/global-styles";
import Transition from "../components/transition";

function Index() {
  return (
    <main>
      <GlobalStyle/>
      <Transition/>
      <Header />
      <Intro/>
      <Footer/>
    </main>
  );
}

export default Index;
