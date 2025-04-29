"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>HEllO WORLD!</h1>
      <label htmlFor="nameInput">Enter your name:</label>
      <input
        id="nameInput"
        value={name}
        placeholder="Type your name here"
        onChange={(e) => setName((e.target as HTMLInputElement).value)}
      />
      <p>HEllo {name}</p>
    </div>
  );
}
