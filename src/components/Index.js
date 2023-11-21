import React from "react";
// index page sections
import Hero from "./Hero.js";
import Download from "./Download.js";
import ProjectPics from "./ProjectPics.js";
import WhatWeDo from "./WhatWeDo.js";

function Index() {
  return (
    <>
      <main>
        <Hero />
        <Download />
        <ProjectPics />
        <WhatWeDo />
      </main>
    </>
  );
}


export default Index;
