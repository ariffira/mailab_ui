// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Hero from "components/Hero.js";
import Download from "components/Download.js";

function Index() {
  return (
    <>
      <DemoNavbar />
      <main>
        <Hero />
        <Download />
      </main>
      <CardsFooter />
    </>
  );
}

export default Index;
