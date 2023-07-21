import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function testFunc() {
      console.log("trigger PopState");
    }
    window.addEventListener("popstate", testFunc);

    return () => {
      window.removeEventListener("popstate", testFunc);
    };
  }, []);

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
        <Link to={`modalTest`}>ModalTest</Link>
      </li>
      <li>
        <Link to={`componentTest`}>Component</Link>
      </li>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
