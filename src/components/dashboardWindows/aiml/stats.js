import React, { useEffect, useState } from "react";

const StatsDataTable = (props) => {
  const parsedData = JSON.parse(props.data);
  // console.log("data: ", JSON.parse(props.data))
  // console.log("heading: ", props.headings)
  return (
    <div>
      <table >
        <thead >
          <tr>
            <td style={{ padding: "30px" }}></td>
            {/* <td style={{ padding: "15px" }}><b>{props.headings[0]}</b></td> */}
            <td style={{ padding: "15px" }}><b>{props.headings[1]}</b></td>
            <td style={{ padding: "15px" }}><b>{props.headings[2]}</b></td>
            <td style={{ padding: "15px" }}><b>{props.headings[3]}</b></td>
            <td style={{ padding: "15px" }}><b>{props.headings[4]}</b></td>
            <td style={{ padding: "15px" }}><b>{props.headings[5]}</b></td>
            <td style={{ padding: "15px" }}><b>{props.headings[6]}</b></td>
            <td style={{ padding: "15px" }}><b>{props.headings[7]}</b></td>
            <td style={{ padding: "15px" }}><b>{props.headings[8]}</b></td>
            <td style={{ padding: "15px" }}><b>{props.headings[9]}</b></td>
          </tr>
        </thead>

        <tbody>
          {Object.entries(parsedData).map(([key, value]) => (
            <tr key={key}>
              <td style={{ padding: "15px" }}><b>{key}</b></td>
              {/* <td style={{ padding: "15px" }} >{value[props.headings[0]]}</td> */}
              <td style={{ padding: "15px" }} >{value[props.headings[1]]}</td>
              <td style={{ padding: "15px" }} >{value[props.headings[2]]}</td>
              <td style={{ padding: "15px" }} >{value[props.headings[3]]}</td>
              <td style={{ padding: "15px" }} >{value[props.headings[4]]}</td>
              <td style={{ padding: "15px" }} >{value[props.headings[5]]}</td>
              <td style={{ padding: "15px" }} >{value[props.headings[6]]}</td>
              <td style={{ padding: "15px" }} >{value[props.headings[7]]}</td>
              <td style={{ padding: "15px" }} >{value[props.headings[8]]}</td>
              <td style={{ padding: "15px" }} >{value[props.headings[9]]}</td>
            </tr>
          ))}

          {/* {Object.entries(parsedData).map(([key, value]) => (           
            <tr key={key}>           
            <td style={{ padding: "30px" }} >{key}</td>
            {Object.entries(value).map(([key1, value1]) => (        
              <>     
                {console.log("getting value1.....!!!!!!!!", key1, value1)}
                <td style={{ padding: "15px" }} >{value1[key1]}</td>
                <td style={{ padding: "15px" }} >{value1[key1]}</td>
                <td style={{ padding: "15px" }} >{value1[key1]}</td>
                <td style={{ padding: "15px" }} >{value1[key1]}</td>
                <td style={{ padding: "15px" }} >{value1[key1]}</td>
                <td style={{ padding: "15px" }} >{value1[key1]}</td>
                <td style={{ padding: "15px" }} >{value1[key1]}</td>
                <td style={{ padding: "15px" }} >{value1[key1]}</td>
                <td style={{ padding: "15px" }} >{value1[key1]}</td>
                <td style={{ padding: "15px" }} >{value1[key1]}</td>
                </>
            ))}          
          </tr>
          ))} */}

        </tbody>
      </table>
    </div>
  );
};

export default StatsDataTable;
