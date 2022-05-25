import React from "react";
import Hero from "../components/MonkeHero";
import Faqs from "../components/FaqMonkes";
import Team from "../components/Team";

export default function Monke() {
  return (
    <main className="monke">
      <Hero />
      <Faqs />
      <Team />
    </main>
  );
}
