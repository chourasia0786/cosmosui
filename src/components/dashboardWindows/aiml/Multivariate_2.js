import React from "react";

const Multivariate_2 = (props) => {
  const parsedData = JSON.parse(props.data);
  // console.log("data: ", JSON.parse(props.data))
  // console.log("heading: ", props.headings)
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td style={{ padding: "30px" }}></td>
            <td style={{ padding: "15px" }}>
              <b>{props.headings[0]}</b>
            </td>
            <td style={{ padding: "15px" }}>
              <b>{props.headings[1]}</b>
            </td>
            <td style={{ padding: "15px" }}>
              <b>{props.headings[2]}</b>
            </td>
            <td style={{ padding: "15px" }}>
              <b>{props.headings[3]}</b>
            </td>
          </tr>
        </thead>

        <tbody>
          {Object.entries(parsedData).map(([key, value]) => (
            <tr key={key}>
              <td style={{ padding: "15px" }}>
                <b>{key}</b>
              </td>
              {console.log("value: " + value[props.headings[0]])}
              <td style={{ padding: "15px" }}>{value[props.headings[0]]}</td>
              <td style={{ padding: "15px" }}>{value[props.headings[1]]}</td>
              <td style={{ padding: "15px" }}>{value[props.headings[2]]}</td>
              <td style={{ padding: "15px" }}>{value[props.headings[3]]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Multivariate_2;
