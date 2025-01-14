import React from "react";
import './assets/style/style.css';

import Header from "../src/components/Header";
import HeroText from "../src/components/HeroText";
import Feature from "../src/components/Feature";
import ReactLogo from "../src/components/ReactLogo";

const featuresArray = [
  {
    title: "Declarative",
    image: "/public/images/icon1.png",
    description: "React makes it painless to create interactive UIs.",
  },
  {
    title: "Components",
    image: "/public/images/icon2.png",
    description: "Build encalpsulated components that manage their state",
  },
  {
    title: "Single-way",
    image: "/public/images/icon3.png",
    description: "A set of immutable values are passed to the components",
  },
  {
    title: "JSX",
    image: "/public/images/icon4.png",
    description: "Statically typed, designed to run on modern browsers",
  },
];

function App() {
  return (
    <div className="background">
      <Header />
      <div className="flex-container">
        <HeroText />
        <ReactLogo top="10%" right="30%" scale="1.3" />
        <ReactLogo top="42%" right="16%" scale="0.9" />
        <ReactLogo top="65%" right="30%" scale="0.9" />
        <ReactLogo top="10%" right="-7%" scale="0.7" />
        <ReactLogo top="38%" right="-7%" scale="0.7" />
        <ReactLogo top="65%" right="-7%" scale="0.7" />
      </div>
      <div className="features-container">
        {featuresArray.map((feature) => (
          <Feature
            key={feature.title}
            title={feature.title}
            image={feature.image}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;