import React, { useState, useContext, useEffect } from "react";
import { FormNext, FormDown } from "grommet-icons";
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
  Menu,
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
  const [univariateData, setUnivariateData] = useState("");
  const [bivariateData, setBivariateData] = useState("");
  const [multivariateData, setMultivariateData] = useState("");

  const univariateHeadings = ["Column_names", "Data_Types", "viz_chart"];

  const bivariateHeadings = ["Column_1", "Column_2", "chart"];

  const [multivariateHeadings, setMultivariateHeadings] = useState([
    "Column_1",
    "Column_2",
    "Column_3",
    "chart",
  ]);

  const univariate = () => {
    fetchData1();
  };

  const bivariate = () => {
    fetchData2();
  };

  const multivariate_1 = (e) => {
    setMultivariateHeadings(["Column_1", "Column_2", "Column_3", "chart"]);
    fetchData3_1("multivariate_viz");
  };

  const multivariate_2 = (e) => {
    setMultivariateHeadings([
      "Column_1",
      "Column_2",
      "Column_3",
      "Column_4",
      "chart",
    ]);
    fetchData3_2("multivariate_viz_1");
  };

  const multivariate_3 = (e) => {
    setMultivariateHeadings([
      "Column_1",
      "Column_2",
      "Column_3",
      "Column_4",
      "Column_5",
      "Column_6",
      "Column_7",
      "Column_8",
      "charts",
      "Column_9",
      "Column_10",
    ]);
    fetchData3_3("multivariate_viz_2");
  };

  const handleOptionSelect = (event) => {
    console.log("selected options: " + event);
  };

  const fetchData1 = async () => {
    try {
      const response = await axios.get("http://localhost:5000/univariate_viz"); // Replace <YOUR_API_URL> with the actual API endpoint to fetch data
      setUnivariateData(response.data);
      setShowSpinner(false);
      setStartBtnDisable(true);
      console.log("Printing1............. : ", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchData2 = async () => {
    try {
      const response = await axios.get("http://localhost:5000/bivariate_viz"); // Replace <YOUR_API_URL> with the actual API endpoint to fetch data
      setBivariateData(response.data);
      setShowSpinner(false);
      setStartBtnDisable(true);
      console.log("Printing2............. : ", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchData3_1 = async (event) => {
    try {
      const response = await axios.get(`http://localhost:5000/${event}`); // Replace <YOUR_API_URL> with the actual API endpoint to fetch data
      setMultivariateData(response.data.multi_variate);
      setStartBtnDisable(true);
      setShowSpinner(false);
      console.log("Printing3............. : ", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchData3_2 = async (event) => {
    try {
      const response = await axios.get(`http://localhost:5000/${event}`); // Replace <YOUR_API_URL> with the actual API endpoint to fetch data

      setMultivariateData(response.data.multi_variate_1);
      setStartBtnDisable(true);
      setShowSpinner(false);
      console.log("Printing3............. : ", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchData3_3 = async (event) => {
    try {
      const response = await axios.get(`http://localhost:5000/${event}`); // Replace <YOUR_API_URL> with the actual API endpoint to fetch data

      setMultivariateData(response.data.multi_variate_2);
      setStartBtnDisable(true);
      setShowSpinner(false);
      console.log("Printing3_3............. : ", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const startProcess = () => {
    // handleSpinner();
    fetchData1();
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
            <Tab title="Univariate" onClick={univariate}>
              {univariateData && (
                <Box>
                  <Univariate
                    data={univariateData.univariate}
                    headings={univariateHeadings}
                  />
                </Box>
              )}
            </Tab>
            <Tab title="Bivariate" onClick={bivariate}>
              {bivariateData && (
                <Box>
                  <Bivariate
                    data={bivariateData.bi_variate}
                    headings={bivariateHeadings}
                  />
                </Box>
              )}
            </Tab>
            <Tab
              title={
                <Menu
                  label={
                    <span style={{ fontWeight: "normal" }}>Multivariate</span>
                  }
                  items={[
                    {
                      label: "Multivariate_1",
                      onClick: (e) => {
                        multivariate_1(e);
                      },
                    },
                    {
                      label: "Multivariate_2",
                      onClick: (e) => {
                        multivariate_2(e);
                      },
                    },
                    {
                      label: "Multivariate_3",
                      onClick: (e) => {
                        multivariate_3(e);
                      },
                    },
                  ]}
                  width="medium"
                />
              }
            >
              {multivariateData && (
                <Box>
                  <Multivariate
                    data={multivariateData}
                    headings={multivariateHeadings}
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
