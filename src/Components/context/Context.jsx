import React, { createContext, useContext, useState } from "react";
const GlobalContext = createContext();
const Context = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [variations, setVariations] = useState([
    { id: "variation1", type: "Choose Variation", val: "" },
    { id: "variation2", type: "Primary Color", val: "color" },
    { id: "variation3", type: "Size", val: "size" }
  ]);
  const [rendervariation1, setVaritation1] = useState(false);
  const [rendervariation2, setVaritation2] = useState(false);

  const data1 = {
    title: "Primary color",
    colors: [
      "Add Primary Color Options",
      "black",
      "green",
      "red",
      "orange",
      "yellow",
      "pink"
    ],
    inputLabel1: "Prices vary for each primary colour",
    inputLabel2: "Quantities vary for each primary colour"
  };

  const data2 = {
    title: "Size",
    colors: [
      "Add size opions",
      "s - size",
      "L -size",
      "M- size",
      "XL -size",
      "XXL -size"
    ],
    inputLabel1: "Prices vary for each size",
    inputLabel2: "Quantities vary for each size"
  };

  return (
    <GlobalContext.Provider
      value={{
        open,
        handleOpen,
        handleClose,
        variations,
        setVariations,
        data1,
        data2,
        selectedColors,
        setSelectedColors,
        selectedSizes,
        setSelectedSizes,
        rendervariation1,
        setVaritation1,
        rendervariation2,
        setVaritation2
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useData = () => useContext(GlobalContext);
export default Context;
