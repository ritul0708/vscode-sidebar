const data = {
  id: "1",
  name: "vscode-sidebar",
  isFolder: true,
  items: [
    {
      // node_modules-Folder starts
      id: "2",
      name: "node_modules",
      isFolder: true,
      items: [
        {
          id: "3",
          name: ".bin",
          isFolder: true,
          items: [
            // bin-Folder starts 
            {
              id: "4",
              name: "acon.cmd",
              isFolder: false,
              items: []
            },
            {
              id: "5",
              name: "ansi.html",
              isFolder: false,
              items: []
            }
            // bin-Folder ends
          ]
        },
        {
          id: "6",
          name: ".cache",
          isFolder: true,
          items: [
            // Cache-Folder Starts
            {
              id: "7",
              name: "babel-loader",
              isFolder: true,
              items: []
            },
            {
              id: "8",
              name: "default-development",
              isFolder: true,
              items: []
            },
            {
              id: "9",
              name: ".eslintcache",
              isFolder: false,
              items: []
            }
            // Cache-Folder ends
          ]
        }
      ]
      // node_modules-Folder ends
    },
    // public-Folder starts
    {
      id: "10",
      name: "public",
      isFolder: true,
      items: [
        {
          id: "11",
          name: "index.html",
          isFolder: false,
          items: []
        }
      ],
      // public-Folder ends
    },
    // src-Folder starts
    {
      id: "12",
      name: "src",
      isFolder: true,
      items: [
        {
          id: "13",
          name: "data",
          isFolder: true,
          items: [
            {
              id: "14",
              name: "SidebarData.js",
              isFolder: false,
              items: []
            }
          ]
        },
        {
          id: "15",
          name: "App.js",
          isFolder: false,
          items: []
        },
        {
          id: "16",
          name: "App.css",
          isFolder: false,
          items: []
        },
        {
          id: "17",
          name: "index.js",
          isFolder: false,
          items: []
        },
        {
          id: "18",
          name: "index.css",
          isFolder: false,
          items: []
        }
      ],
      // src-Folder ends
    },
    {
      id: "19",
      name: ".gitignore",
      isFolder: false,
      items: []
    },
    {
      id: "20",
      name: "package-lock.json",
      isFolder: false,
      items: []
    },
    {
      id: "21",
      name: "package.json",
      isFolder: false,
      items: []
    },
    {
      id: "22",
      name: "readme.md",
      isFolder: false,
      items: []
    }
  ],
}

export default data;