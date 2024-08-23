import Header from './Header';
import Footer from './footer/Footer';
import About from './About';
import Home from './Home';
import Technologies from './tech/Technologies';
import Projects from './projects/Projects';
function AppLayout() {
  return (
    <div className="grid w-full grid-rows-[auto,1fr,auto] gap-x-4">
      <Header />
      <main className="h-100vh absolute mx-auto w-full">
        <Home />
        <About />

        <Technologies />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
