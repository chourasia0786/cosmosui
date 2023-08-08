import React from "react";

const Multivariate = (props) => {
  const parsedData = JSON.parse(props.data);
  // console.log("data: ", JSON.parse(props.data))
  // console.log("heading: ", props.headings)
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td style={{ padding: "30px" }}></td>
            {Object.entries(props.headings).map(([key, value]) => (
              <td style={{ padding: "15px" }}>
                <b>{value}</b>
              </td>
            ))}
            {/* {console.log("headig value: " + value + " and key " + key)} */}
            {/* <td style={{ padding: "15px" }}>
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
            </td> */}
          </tr>
        </thead>

        <tbody>
          {Object.entries(parsedData).map(([key, value]) => (
            <tr key={key}>
              <td style={{ padding: "15px" }}>
                <b>{key}</b>
              </td>

              {Object.entries(value).map(([key, value1]) => (
                <>
                  {/* {console.log("value : " + value1 + "key of value : " + key)} */}
                  <td style={{ padding: "15px" }}>{value1}</td>
                </>
              ))}

              {/* {console.log("value: " + value[props.headings[0]])}
              <td style={{ padding: "15px" }}>{value[props.headings[0]]}</td>
              <td style={{ padding: "15px" }}>{value[props.headings[1]]}</td>
              <td style={{ padding: "15px" }}>{value[props.headings[2]]}</td>
              <td style={{ padding: "15px" }}>{value[props.headings[3]]}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Multivariate;
