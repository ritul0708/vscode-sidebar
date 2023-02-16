const useTraverseTree = () => {

  // function for inserting a new item
  const insertItem = (tree, folderId, item, isFolder) => {

    // Inserting at root level of tree
    // tree.isFolder >>> edge case
    // for generating id you can use uuid and other library
    if(tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: []
      });
      return tree;
    }

    // for rest of the tree
    let latestItem = [];
    latestItem = tree.items.map((object) => {
      // recursively call insertItem function with new tree item
      return insertItem(object, folderId, item, isFolder);
    });

    // as we updating the tree we need to use spared oprator
    return {...tree, items: latestItem};

  }


  const deleteItem = (tree, itemId) => {
    // check if the current node is the one to be deleted
    if (tree.id === itemId) {
      return null;
    }
  
    // create a new list of items without the deleted item
    const newItems = tree.items.filter((item) => item.id !== itemId);
  
    // create a new copy of the tree with the updated list of items
    const newTree = { ...tree, items: newItems };
  
    // recursively call the deleteItem function on each child node
    newTree.items = newTree.items.map((item) =>
      deleteItem(item, itemId)
    );

    return newTree;
  }

  const updateItem = () => {};

  return { insertItem, deleteItem, updateItem };
}

export default useTraverseTree