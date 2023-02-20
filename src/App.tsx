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
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
