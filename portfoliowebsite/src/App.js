import "./App.css";
import Intro from "./components/intro/Intro.jsx";
import About from "./components/about/About.jsx";
import Projects from "./components/projects/projects.jsx";
import Footer from "./components/footer/footer.jsx";
import Contact from "./components/contact/contact.jsx";

function App() {
  return (
    <div>
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
