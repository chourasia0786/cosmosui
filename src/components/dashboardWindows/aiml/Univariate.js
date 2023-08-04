import React, { useEffect, useState } from "react";
import axios from "axios";

const Univariate = (props) => {
  const parsedData = JSON.parse(props.data);
  // console.log("data: ", JSON.parse(props.data));
  // console.log("heading: ", props.headings)
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td style={{ padding: "30px" }}></td>
            {/* <td style={{ padding: "15px" }}><b>{props.headings[0]}</b></td> */}
            <td style={{ padding: "15px" }}>
              <b>{props.headings[0]}</b>
            </td>
            <td style={{ padding: "15px" }}>
              <b>{props.headings[1]}</b>
            </td>
            <td style={{ padding: "15px" }}>
              <b>{props.headings[2]}</b>
            </td>
          </tr>
        </thead>

        <tbody>
          {Object.entries(parsedData).map(([key, value]) => (
            <tr key={key}>
              <td style={{ padding: "15px" }}>
                <b>{key}</b>
              </td>
              {/* <td style={{ padding: "15px" }} >{value[props.headings[0]]}</td> */}
              <td style={{ padding: "15px" }}>{value[props.headings[0]]}</td>
              <td style={{ padding: "15px" }}>{value[props.headings[1]]}</td>
              <td style={{ padding: "15px" }}>{value[props.headings[2]]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Univariate;
