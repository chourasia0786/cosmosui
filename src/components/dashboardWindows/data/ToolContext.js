import React, { createContext } from 'react';

const ToolContext = createContext({
  toolbarProjects: [],
  addToolbarElement: (el) => {},
  removeToolbarElement: () => {},
});

export default ToolContext;
