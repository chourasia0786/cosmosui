import React from "react";

const DataTable = (props) => {
  const parsedData = JSON.parse(props.data);
  // console.log("data: ", JSON.parse(props.data))
  // console.log("heading: ", props.headings)
  return (
    <div width="400px" style={{padding:"5px"}}>
      <table style={{ width: '100%'}}>
        <thead >
          <tr style={{ fontSize: '14px' }}>
            <th style={{ padding: "30px" }}></th>
            <th ><b>{props.headings[0]}</b></th>
            <th ><b>{props.headings[1]}</b></th>
            <th ><b>{props.headings[2]}</b></th>
            <th ><b>{props.headings[3]}</b></th>
            <th ><b>{props.headings[4]}</b></th>
            <th ><b>{props.headings[5]}</b></th>
            <th ><b>{props.headings[6]}</b></th>
            <th ><b>{props.headings[7]}</b></th>
            <th ><b>{props.headings[8]}</b></th>
            <th ><b>{props.headings[9]}</b></th>
          </tr>
        </thead>

        <tbody>
          {Object.entries(parsedData).map(([key, value]) => (
            <tr key={key}>
              <td style={{ padding: "5px", fontSize: '15px' }}><b>{key}</b></td>
              <td style={{ padding: "5px", fontSize: '13px' }} >{value[props.headings[0]]}</td>
              <td style={{ padding: "5px", fontSize: '13px' }} >{value[props.headings[1]]}</td>
              <td style={{ padding: "5px", fontSize: '13px' }} >{value[props.headings[2]]}</td>
              <td style={{ padding: "5px", fontSize: '13px' }} >{value[props.headings[3]]}</td>
              <td style={{ padding: "5px", fontSize: '13px' }} >{value[props.headings[4]]}</td>
              <td style={{ padding: "5px", fontSize: '13px' }} >{value[props.headings[5]]}</td>
              <td style={{ padding: "5px", fontSize: '13px' }} >{value[props.headings[6]]}</td>
              <td style={{ padding: "5px", fontSize: '13px' }} >{value[props.headings[7]]}</td>
              <td style={{ padding: "5px", fontSize: '13px' }} >{value[props.headings[8]]}</td>
              <td style={{ padding: "5px", fontSize: '13px' }} >{value[props.headings[9]]}</td>
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

export default DataTable;





// TableCustomizationExample.js
// import React, { useState } from 'react';
// import {
//     Box,
//     Data,
//     DataTable,
//     DataFilters,
//     DataSearch,
//     DataSummary,
//     DataTableColumns,
//     Header,
//     Heading,
//     Menu,
//     Page,
//     PageContent,
//     Toolbar,
// } from 'grommet';

// const chiHeadings = [
//     "Surname",
//     "Geography",
//     "Gender",
//     "NumOfProducts",
//     "HasCrCard",
//     "IsActiveMember",
//     "Exited",
//     "Complain",
//     "Satisfaction Score",
//     "Card Type",
//   ]

// const COLUMNS = [
//     { property: 'firstRow', header: '', primary: true, pin: true },
//     { property: 'RowNumber', header: 'RowNumber', primary: true, pin: true },
//     { property: 'CustomerId', header: 'CustomerId' },
//     { property: 'CreditScore', header: 'CreditScore' },
//     { property: 'Tenure', header: 'Tenure' },
//     { property: 'Balance', header: 'Hours available' },
//     { property: 'EstimatedSalary', header: 'EstimatedSalary' },
//     { property: 'PointEarned', header: 'PointEarned' },
// ];

// const allData = [
//     {
//         firstRow: 'DataTypes',
//         Tenure: 'int64',
//         Balance: 'float64',
//         CreditScore: 'int64',
//         RowNumber: 'int64',
//         CustomerId: 'int64',
//         EstimatedSalary: 'float64',
//         PointEarned: 'float64',

//     },
//     {
//         firstRow: 'count',
//         Tenure: '10000',
//         Balance: '10000',
//         CreditScore: '10000',
//         RowNumber: '10000',
//         CustomerId: '10000',
//         EstimatedSalary: '10000',
//         PointEarned: '10000'
//     },
//     {
//         firstRow: 'mean',
//         Tenure: '5.0128',
//         Balance: +'76485.89',
//         CreditScore: '650.529',
//         RowNumber: '5000.5',
//         CustomerId: '15690940.57',
//         EstimatedSalary: '1000090.24',
//         PointEarned: '1000090.24'
//     },
// ];

// const options = COLUMNS.map(({ header, property }) => ({
//     property,
//     label: header,
//     // style: header === 'header' ? 'font-weight: bold;' : '',
// }));

// const buildProperties = () => {
//     const dict = {};
//     for (let i = 0; i < options.length; i += 1) {
//         const { label } = options[i];
//         if (options[i].property === 'Balance') {
//             dict[options[i].property] = {
//                 label,
//                 range: { min: 0, max: 40 },
//             };
//         } else {
//             dict[options[i].property] = { label };
//         }
//     }
//     return dict;
// };

// const TableCustomizationExample = () => (
//     <Page background="background" fill>
//         <PageContent>
//             <Box gap="medium" margin={{ top: 'medium' }}>
//                 <Results />
//             </Box>
//         </PageContent>
//     </Page>
// );

// const Results = () => {
//     const [select, setSelect] = useState([]);
//     const properties = buildProperties();
//     return (
//         <Data data={allData} flex properties={properties}>
//             <Toolbar>
//                 <DataSearch responsive />
//             </Toolbar>
//             <DataSummary />
//             <Box overflow="auto" flex>
//                 <DataTable
//                     aria-describedby="users-heading"
//                     background="background"
//                     columns={COLUMNS}
//                     // select={select}
//                     // onSelect={setSelect}
//                     pin
//                 />
//             </Box>
//         </Data>
//     );
// };

// export default TableCustomizationExample;