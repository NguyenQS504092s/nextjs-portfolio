import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Datasets from "./components/Datasets";
import Research from "./components/Research";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Profile />
        <Projects />
        <Datasets />
        <Research />
        <Certifications />
      </main>
      <Footer />
    </>
  );
}
