import React, { useState, useContext, useEffect } from "react";
import { FormNext } from "grommet-icons";
import axios from "axios";
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

import ActivePageContext from "./ActivePageContext";
import DataTable from "./Chi_square_test";
import CorrelationDataTable from "./Correlation";
import StatsDataTable from "./stats";
import TableCustomizationExample from "./DataTable";

const DataExploration = () => {
  const [index, setIndex] = useState();
  const onActive = (nextIndex) => setIndex(nextIndex);
  const [showSpinner, setShowSpinner] = useState(false);
  const [startProcessSatus, setStartProcessSatus] = useState(false);
  const [startBtnDisable, setStartBtnDisable] = useState(false);
  const ctx = useContext(ActivePageContext);
  const [data, setData] = useState("");

  const edaHeadings = [
    "Unnamed",
    "RowNumber",
    "CustomerId",
    "CreditScore",
    "Age",
    "Tenure",
    "Balance",
    "EstimatedSalary",
    "Point Earned",
  ];

  const chiHeadings = [
    "Surname",
    "Geography",
    "Gender",
    "NumOfProducts",
    "HasCrCard",
    "IsActiveMember",
    "Exited",
    "Complain",
    "Satisfaction Score",
    "Card Type",
  ];

  const correlationHeadings = [
    "RowNumber",
    "CustomerId",
    "CreditScore",
    "Age",
    "Tenure",
    "Balance",
    "EstimatedSalary",
    "Point Earned",
  ];

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const onSelect = () => {
    // fetchData();
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/eda"); // Replace <YOUR_API_URL> with the actual API endpoint to fetch data
      setData(response.data);
      setShowSpinner(false);
      setStartBtnDisable(true);
      // console.log("Printing............. : ", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const startProcess = () => {
    // handleSpinner();
    fetchData();
    setShowSpinner(true);
    setStartProcessSatus(true);
    ctx.setActivePageNumber(1);
  };

  return (
    <Box>
      <Box direction="row">
        <Box>
          <h2 size="medium">Data Exploration</h2>
          <Box margin={{ top: "medium" }} width="medium">
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
              {data && (
                <Box>
                  {/* <TableCustomizationExample data={data.stats} headings={edaHeadings}/> */}
                  <StatsDataTable data={data.stats} headings={edaHeadings} />
                </Box>
              )}
            </Tab>
            <Tab title="chi_square_results">
              {data && (
                <Box>
                  <DataTable
                    data={data.chi_square_test}
                    headings={chiHeadings}
                  />
                </Box>
              )}
            </Tab>
            <Tab title="correlation">
              {data && (
                <Box>
                  <CorrelationDataTable
                    data={data.correlation}
                    headings={correlationHeadings}
                  />
                </Box>
              )}
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
