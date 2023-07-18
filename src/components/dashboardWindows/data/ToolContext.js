import React, { createContext } from 'react';

const ToolContext = createContext({
  toolbarProjects: [],
  addToolbarElement: (el) => {},
  removeToolbarElement: (el) => {},
  editToolbarElement: () => {},
  currentToolbar: '',
  setCurrentToolBar: (el) => {},
});

export default ToolContext;
