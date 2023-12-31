import React, { useState } from "react";
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

const DataExploration = () => {
  const [index, setIndex] = useState();
  const onActive = (nextIndex) => setIndex(nextIndex);
  const [showSpinner, setShowSpinner] = useState(false);
  const [startProcessSatus, setStartProcessSatus] = useState(false);

  const startProcess = () => {
    handleSpinner();
    setStartProcessSatus(true);
  };

  const handleSpinner = (e) => {
    setShowSpinner(true);

    setTimeout(() => {
      setShowSpinner(false);
    }, 1000);
  };

  return (
    <Box>
      <Box direction="row">
        <Box>
          <h2 size="medium">Data Exploration</h2>
          <h3>Information</h3>
          <Text>Information for data explortion</Text>
        </Box>
        <Box margin={{ top: "xlarge", left: "large" }}>
          <Button
            label="Start process"
            secondary
            reverse
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
