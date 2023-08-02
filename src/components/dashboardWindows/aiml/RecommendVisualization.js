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
import Bivariate from "./Bivariate";
import Multivariate from "./Multivariate";
import Univariate from "./Univariate";

const RecommendVisualization = () => {
  const [index, setIndex] = useState();
  const onActive = (nextIndex) => setIndex(nextIndex);
  const [showSpinner, setShowSpinner] = useState(false);
  const [startProcessSatus, setStartProcessSatus] = useState(false);
  const [startBtnDisable, setStartBtnDisable] = useState(false);
  const ctx = useContext(ActivePageContext);
  const [data, setData] = useState("");

  const univariateHeadings = ["Column_names", "Data_Types", "viz_chart"];

  const bivariateHeadings = ["Column_1", "Column_2", "chart"];

  const correlationHeadings = ["Column_1", "Column_2", "Column_3", "chart"];

  useEffect(() => {
    fetchData1();
  }, []);

  const onSelect = () => {
    fetchData1();
  };

  const fetchData1 = async () => {
    try {
      const response = await axios.get("http://localhost:5000/univariate_viz"); // Replace <YOUR_API_URL> with the actual API endpoint to fetch data
      setData(response.data);
      setShowSpinner(false);
      console.log("Printing............. : ", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchData2 = async () => {
    try {
      const response = await axios.get("http://localhost:5000/bivariate_viz"); // Replace <YOUR_API_URL> with the actual API endpoint to fetch data
      setData(response.data);
      setShowSpinner(false);
      console.log("Printing............. : ", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchData3 = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/multivariate_viz"
      ); // Replace <YOUR_API_URL> with the actual API endpoint to fetch data
      setData(response.data);
      setShowSpinner(false);
      console.log("Printing............. : ", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const startProcess = () => {
    // handleSpinner();
    setShowSpinner(true);
    setStartProcessSatus(true);
    ctx.setActivePageNumber(3);
  };

  return (
    <Box>
      <Box direction="row">
        <Box>
          <h2 size="medium">Recommend Visualization</h2>
          <Box margin={{ top: "medium" }} width="medium">
            <h3>Information</h3>
            <Text>Information for Recommend Visualization</Text>
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
            <Tab title="Univariate" onClick={onSelect}>
              {data && (
                <Box>
                  <Univariate data={data.stats} headings={univariateHeadings} />
                </Box>
              )}
            </Tab>
            <Tab title="Bivariate" onClick={onSelect}>
              {data && (
                <Box>
                  <Bivariate
                    data={data.chi_square_test}
                    headings={bivariateHeadings}
                  />
                </Box>
              )}
            </Tab>
            <Tab title="Multivariate" onClick={onSelect}>
              {data && (
                <Box>
                  <Multivariate
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

export default RecommendVisualization;
