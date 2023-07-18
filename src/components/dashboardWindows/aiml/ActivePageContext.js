import { React, createContext } from "react";

const ActivePageContext = createContext({
  selected: String,
  setSelected: () => {},
  activePageNumber: Number,
  setActivePageNumber: () => {},
});

export default ActivePageContext;
