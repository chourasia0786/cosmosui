import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Text, Spinner, Layer } from "grommet";
import { FormNext } from "grommet-icons";
import ActivePageContext from "./ActivePageContext";
import axios from "axios";

const IdentifyTheDataTypes = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const ctx = useContext(ActivePageContext);
  const [startBtnDisable, setStartBtnDisable] = useState(false);
  const [data, setData] = useState("");
  const [startProcessSatus, setStartProcessSatus] = useState(false);
  // const [parsedData, setParsedData] = useState();

  const dataTypeHeadings = [
    "Columns",
    "Data_types",
  ]

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/data_types"); // Replace <YOUR_API_URL> with the actual API endpoint to fetch data
      setData(JSON.parse(response.data.data_types));
      // setData(response.data.data_types);
      setShowSpinner(false);
      console.log("Printing............. : ", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const startProcess = () => {
    fetchData();
    setShowSpinner(true);
    setStartProcessSatus(true);
    ctx.setActivePageNumber(2);
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
            onClick={startProcess}
          ></Button>
        </Box>
      </Box>

      {startProcessSatus && (
        <Box margin={{ top: 'large' }}><table >
          <thead >
            <tr>
              <td style={{ padding: "30px" }}></td>
              <td style={{ padding: "15px" }}><b>{dataTypeHeadings[0]}</b></td>
              <td style={{ padding: "15px" }}><b>{dataTypeHeadings[1]}</b></td>
            </tr>
          </thead>

          <tbody>
            {Object.entries(data).map(([key, value]) => (
                <tr key={key}>
                <td style={{ padding: "15px" }} ><b>{key}</b></td>
                <td style={{ padding: "15px" }} >{value.Columns}</td>
                <td style={{ padding: "15px" }} >{value.Data_types}</td>           
              </tr>
            ))}
          </tbody>
        </table></Box>)
      }

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
