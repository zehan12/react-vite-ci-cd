import { block } from "million/react";
import { useState } from "react";


function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Million + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Million and React logos to learn more
      </p>
    </>
  )
}

// Creating a reusable block
const AppBlock = /* @optimize */ block(App);
export default AppBlock
