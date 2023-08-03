import React from "react";

const CorrelationDataTable = (props) => {
  const parsedData = JSON.parse(props.data);

  return (
    <div width="400px" style={{ padding: "5px" }}>
      <table style={{ width: '100%' }}>
        <thead >
          <tr style={{ fontSize: '14px' }}>
            <th ></th>
            <th ><b>{props.headings[0]}</b></th>
            <th ><b>{props.headings[1]}</b></th>
            <th ><b>{props.headings[2]}</b></th>
            <th ><b>{props.headings[3]}</b></th>
            <th ><b>{props.headings[4]}</b></th>
            <th ><b>{props.headings[5]}</b></th>
            <th ><b>{props.headings[6]}</b></th>
            <th ><b>{props.headings[7]}</b></th>
            
          </tr>
        </thead>

        <tbody>
          {Object.entries(parsedData).map(([key, value]) => (
            <tr key={key}>
              <td style={{ padding: "5px", fontSize: '14px' }}><b>{key}</b></td>
              <td style={{ padding: "5px", fontSize: '12px' }} >{value[props.headings[0]]}</td>
              <td style={{ padding: "5px", fontSize: '12px' }} >{value[props.headings[1]]}</td>
              <td style={{ padding: "5px", fontSize: '12px' }} >{value[props.headings[2]]}</td>
              <td style={{ padding: "5px", fontSize: '12px' }} >{value[props.headings[3]]}</td>
              <td style={{ padding: "5px", fontSize: '12px' }} >{value[props.headings[4]]}</td>
              <td style={{ padding: "5px", fontSize: '12px' }} >{value[props.headings[5]]}</td>
              <td style={{ padding: "5px", fontSize: '12px' }} >{value[props.headings[6]]}</td>
              <td style={{ padding: "5px", fontSize: '12px' }} >{value[props.headings[7]]}</td>
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


export default CorrelationDataTable;
