import { useState } from "react";
import Folder from "./components/Folder";
import "./App.css";
import data from "./data/data";

const App = () => {
  const [sidebarData, setSidebarData] = useState(data);

  return (
    <div className="App">
      <Folder data={sidebarData} />
    </div>
  );
}

export default App