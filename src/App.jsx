import { lazy, Suspense } from "react";
import LazyLoad from "react-lazyload";
import Navbar from "./components/navbar/Navbar";
import Loader from "./components/Loader"; // Import the new loader

const Hero = lazy(() => import("./components/hero/Hero"));
const Services = lazy(() => import("./components/services/Services"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Contact = lazy(() => import("./components/contact/Contact"));

const App = () => {
  return (
    <div className="container">
      {/* <Navbar /> */}
      <Suspense fallback={<Loader />}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section id="home">
            <Hero />
          </section>
        </LazyLoad>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section id="services">
            <Services />
          </section>
        </LazyLoad>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <LazyLoad height={"600vh"} offset={-100}>
          <section id="portfolio">
            <Portfolio />
          </section>
        </LazyLoad>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <LazyLoad height={"600vh"} offset={-100}>
          <section id="portfolio">
            <Contact />
          </section>
        </LazyLoad>
      </Suspense>
    </div>
  );
};

export default App;
