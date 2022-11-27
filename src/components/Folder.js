import { useState } from "react";
import { VscNewFile, VscNewFolder } from 'react-icons/vsc';

// function Folder({ handleInsertNode = () => {}, explorer }) {
  const Folder = ({ data }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder
    });
  };


  if (data.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div onClick={() => setExpand(!expand)} className="folder">
          <span>📁 {data.name}</span>

          <div className="icon">
            <VscNewFolder style={{paddingRight: 10, }} onClick={(e) => handleNewFolder(e, true)} />
            <VscNewFile onClick={(e) => handleNewFolder(e, true)} />
          </div>
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder? "📁" : "📄"}</span> 
              <input
                type="text"
                className="inputContainer__input"
                autoFocus
                onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
            </div>
          )}

          {data.items.map((item) => {
            return (
              <Folder
                // handleInsertNode={handleInsertNode}
                key={item.id}
                data={item}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄 {data.name}</span>;
  }
}

export default Folder;