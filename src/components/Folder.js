import { useState } from "react";
import { VscNewFile, VscNewFolder } from 'react-icons/vsc';


const Folder = ({ handleInsertItem, data }) => {

  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    // initially you will see only root folder
    visible: false,
    isFolder: null
  });


  // Function to handle things that will happen when icon will clicked
  const handleNewItem = (e, isFolder) => {
    e.stopPropagation();  // to stop showInput while clicking on icons
    setExpand(true);  //to open other items when clicking on icons   
    setShowInput({
      visible: true,
      isFolder
    });
  };


  const onAddItem = (e) => {
    // 13 is the keyCode for enter key and item only be added if you will type something
    if(e.keyCode === 13 && e.target.value) {
      // passing data back to App.js file
      handleInsertItem(data.id, e.target.value, showInput.isFolder);

      // after clicking enter input box should be gone
      setShowInput({...showInput, visible: false});
    }
  }

  const onDeleteItem = (e) => {
    const newTree = deleteItem(tree, itemId)
  }


  // if the item is a folder
  if (data.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div onClick={() => setExpand(!expand)} className="folder">
          <span>📁 {data.name}</span>

          <div className="icon">
            <VscNewFolder style={{paddingRight: 10}} onClick={(e) => handleNewItem(e, true)} />
            <VscNewFile style={{paddingRight: 10}} onClick={(e) => handleNewItem(e, false)} />
          </div>
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {/* if icon was clicked */}
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "🗒️"}</span>
              <input
                type="text"
                className="inputContainer__input"
                onKeyDown={onAddItem}
                autoFocus   // autoFocus the input box when icon was clicked
                // when you click outside of the input box your box will be gone
                onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
            </div>
          )}

          {/* mapping all the data except root recursively */}
          {data.items.map((item) => {
            return (
              <Folder
                handleInsertItem={handleInsertItem}
                key={item.id}
                data={item}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    // when tree item is not a folder
    return <span className="file">📄 {data.name}</span>;
  }
}

export default Folder;