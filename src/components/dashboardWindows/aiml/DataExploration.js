import React, { useState, useContext } from "react";
import { FormNext } from "grommet-icons";
import {
  Box,
  Button,
  Heading,
  Text,
  Paragraph,
  Tab,
  Tabs,
  Layer,
  Spinner,
} from "grommet";
import TableCustomizationExample from "./DataTable";
import ActivePageContext from "./ActivePageContext";

const DataExploration = () => {
  const [index, setIndex] = useState();
  const onActive = (nextIndex) => setIndex(nextIndex);
  const [showSpinner, setShowSpinner] = useState(false);
  const [startProcessSatus, setStartProcessSatus] = useState(false);
  const [startBtnDisable, setStartBtnDisable] = useState(false);
  const ctx = useContext(ActivePageContext);

  const startProcess = () => {
    handleSpinner();
    setStartProcessSatus(true);
    ctx.setActivePageNumber(1);
  };

  const handleSpinner = (e) => {
    setShowSpinner(true);

    setTimeout(() => {
      setShowSpinner(false);
    }, 1000);
    if ({ showSpinner }) { setStartProcessSatus(true) };
    if (!showSpinner){setStartBtnDisable(true);}

  };

  return (
    <Box>
      <Box direction="row">
        <Box>
          <h2 size="medium">Data Exploration</h2>
          <Box margin={{ top: 'medium' }} width='medium'>
            <h3>Information</h3>
            <Text>Information for data explortion</Text>
          </Box>
        </Box>
        <Box margin={{ top: "large", left: "large" }}>
          <Button
            label="Start process"
            secondary
            reverse
            disabled={startBtnDisable}
            icon={<FormNext />}
            onClick={startProcess}
          ></Button>
        </Box>
      </Box>

      {startProcessSatus && (
        <Box margin={{ top: "large" }}>
          <Tabs activeIndex={index} onActive={onActive} justify="start">
            <Tab title="eda_state">
              <Box>
                <TableCustomizationExample />
              </Box>
            </Tab>
            <Tab title="chi_square_results">
              <Paragraph margin="none">
                Tab content should be flush with the left edge of the Tab. A
                "medium" vertical padding should be applied to create space
                between the Tab and its content.
              </Paragraph>
            </Tab>
            <Tab title="correlarion">
              <Paragraph margin="none">
                Tab content should be flush with the left edge of the Tab. A
                "medium" vertical padding should be applied to create space
                between the Tab and its content.
              </Paragraph>
            </Tab>
          </Tabs>
        </Box>
      )}

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

export default DataExploration;
