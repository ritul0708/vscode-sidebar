import { useState } from "react";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/use-traverse-tree";
import data from "./data/data";
import "./App.css";

const App = () => {
  const [sidebarData, setSidebarData] = useState(data);
  // intializing custom hook
  const { insertItem, deleteItem } = useTraverseTree();

  // function which will be pass down to Folder component to get the data
  const handleInsertItem = (folderId, item, isFolder) => {
    const finalTree = insertItem(sidebarData, folderId, item, isFolder);

    // updating whole tree
    setSidebarData(finalTree);
  }

  const handleDeleteItem = () => {
    const finalTree = deleteItem(sidebarData, item.id);
    setSidebarData(finalTree);
  }

  return (
    <div className="App">
      <Folder 
        handleInsertItem={handleInsertItem} 
        handleDeleteItem={handleDeleteItem} 
        data={sidebarData} 
      />
    </div>
  );
}

export default App