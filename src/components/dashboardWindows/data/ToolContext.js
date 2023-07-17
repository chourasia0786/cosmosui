import React, { createContext } from 'react';

const ToolContext = createContext({
  toolbarProjects: [],
  addToolbarElement: (el) => {},
  removeToolbarElement: (el) => {},
  editToolbarElement: () => {},
  currentToolbar: '',
});

export default ToolContext;
