import React, { useState, useContext } from "react";
import { Box, Button, Text, Spinner, Layer } from "grommet";
import { FormNext } from "grommet-icons";
import ActivePageContext from "./ActivePageContext";
const IdentifyTheDataTypes = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const ctx = useContext(ActivePageContext);
  const [startBtnDisable, setStartBtnDisable] = useState(false);

  const handleSpinner = (e) => {
    e.preventDefault();
    setShowSpinner(true);
    ctx.setActivePageNumber(2);

    setTimeout(() => {
      setShowSpinner(false);
    }, 1000);

    if (!showSpinner){setStartBtnDisable(true);}
  };

  return (
    <Box>
      <Box direction="row">
        <Box>
          <h2 size="medium">Identify The Data Types</h2>
          <Box margin={{ top: 'medium' }} width='medium'>
            <h3>Information</h3>
            <Text>Information for data cleansing</Text>
          </Box>
        </Box>
        <Box margin={{ top: "large", left: "large" }}>
          <Button
            label="Start process"
            secondary
            reverse
            disabled={startBtnDisable}
            icon={<FormNext />}
            onClick={handleSpinner}
          ></Button>
        </Box>
      </Box>

      <Box margin={{ top: 'large' }}>Add content here</Box>

      {showSpinner && (
        <Box>
          <Layer model>
            <Box pad="small" alignContent="center">
              <Text>In Progress</Text>
              <Box align="center">
                <Spinner
                  message={{
                    start: "Loading data.",
                    end: "Data has been loaded.",
                  }}
                />
              </Box>
              <Text alignSelf="center">24%</Text>
            </Box>
          </Layer>
        </Box>
      )}
    </Box>
  );
};

export default IdentifyTheDataTypes;
