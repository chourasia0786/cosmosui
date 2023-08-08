import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Text, Spinner, Layer } from "grommet";
import { FormNext } from "grommet-icons";
import ActivePageContext from "./ActivePageContext";
import axios from "axios";
import SpinnerDashboard from "./SpinnerDashboard";

const IdentifyTheDataTypes = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const ctx = useContext(ActivePageContext);
  const [startBtnDisable, setStartBtnDisable] = useState(false);
  const [data, setData] = useState("");
  const [startProcessSatus, setStartProcessSatus] = useState(false);

  const dataTypeHeadings = [
    "Columns",
    "Data_types",
  ]

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/data_types"); // Replace <YOUR_API_URL> with the actual API endpoint to fetch data
      setData(JSON.parse(response.data.data_types));
      // setData(response.data.data_types);
      setShowSpinner(false);
      setStartBtnDisable(true);
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
        <Box margin={{ top: 'large' }}>
           <div width="400px" style={{padding:"5px"}}>
          <table style={{ width: '40%'}}>
            <thead >
              <tr style={{ fontSize: '14px' }}>
                <th style={{width:'50px'}}></th>
                <th ><b>{dataTypeHeadings[0]}</b></th>
                <th ><b>{dataTypeHeadings[1]}</b></th>
              </tr>
            </thead>

            <tbody>
              {Object.entries(data).map(([key, value]) => (
                <tr key={key}>
                  <td style={{ padding: "5px", fontSize: '15px' }}><b>{key}</b></td>
                  <td style={{ padding: "5px", fontSize: '13px' }} >{value.Columns}</td>
                  <td style={{ padding: "5px", fontSize: '13px' }} >{value.Data_types}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
           </Box>)
      }

      {showSpinner && (
        <Box>
          <SpinnerDashboard/>
        </Box>
      )}
    </Box>
  );
};

export default IdentifyTheDataTypes;
