import ChooseUs from "@/app/ui/portfolio/ChooseUs";
import { Features } from "@/app/ui/portfolio/Features";
import Hero from "@/app/ui/portfolio/Hero";
import { OurWork } from "@/app/ui/portfolio/OurWork";
import React from "react";

const page = () => (
  <main className="overflow-x-hidden">
    <Hero />
    <ChooseUs />
    <Features />
    <OurWork/>
  </main>
);

export default page;
