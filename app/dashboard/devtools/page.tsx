"use client";

import { useState } from "react";
import devtools from "../data/devtools.json";

export default function DevToolsPage() {
  const [current, setCurrent] = useState(0);

  function handleNext() {
    setCurrent(Math.floor(Math.random() * devtools.length));
  }

  const tool = devtools[current];

  return (
    <div>
      <span>{tool.icon}</span>
      <h2>{tool.name}</h2>
      <p>{tool.category}</p>
      <p>{tool.description}</p>
      <a href={tool.link} target="_blank">Visit Site</a>
      <button onClick={handleNext}>Next →</button>
    </div>
  );
}