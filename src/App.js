import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLink from "./components/SocialLink";

function App() {
  return (
    <div>
      <NavBar />

      <Home />
      {/* <About />
      <Portfolio />
      <Experience />
      <Contact /> */}

      <SocialLink />
    </div>
  );
}

export default App;