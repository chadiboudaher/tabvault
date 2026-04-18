import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="h-dvh overflow-x-hidden bg-muted-teal-400">
      <Header />
      <Hero />
    </div>
  );
};

export default App;
