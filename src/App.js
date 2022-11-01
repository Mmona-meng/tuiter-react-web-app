import Labs from "./labs/index.js";
import HelloWorld from "./labs/a6/hello-world.js";
import Tuiter from "./tuiter/index.js";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
            <HelloWorld/>
            <Labs/>
            <Tuiter/>
          </div>
      </BrowserRouter>
  );
}
export default App;