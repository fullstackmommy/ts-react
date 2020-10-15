import React from "react";

function App() {
  function label(): string {
    return "React";
  }

  function greet(name: string): string {
    return `Hello ${name}`;
  }

  return (
    <div>
      <h1>Learn Typescript</h1>
      <p>With TDD</p>
      <h1>{label()}</h1>
      <h2>{greet("jello")}</h2>
    </div>
  );
}

export default App;
