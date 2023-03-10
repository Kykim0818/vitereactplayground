import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Test List</h1>
      <li>
        <Link to={`map-render-test`}>MapRenderTest</Link>
      </li>
      <li>
        <Link to={`test`}>Test</Link>
      </li>
      <li>
        <Link to={`function-re-init`}>FunctionReInit</Link>
      </li>
      <li>
        <Link to={`context-test`}>React-Context-test</Link>
      </li>
      <div style={{ marginTop: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
