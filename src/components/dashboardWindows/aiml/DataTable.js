// TableCustomizationExample.js
import React, { useState } from 'react';
import {
    Box,
    Data,
    DataTable,
    DataFilters,
    DataSearch,
    DataSummary,
    DataTableColumns,
    Header,
    Heading,
    Menu,
    Page,
    PageContent,
    Toolbar,
} from 'grommet';

const COLUMNS = [
    { property: 'firstRow', header: '', primary: true, pin: true },
    { property: 'RowNumber', header: 'RowNumber', primary: true, pin: true },
    { property: 'CustomerId', header: 'CustomerId' },
    { property: 'CreditScore', header: 'CreditScore' },
    { property: 'Tenure', header: 'Tenure' },
    { property: 'Balance', header: 'Hours available' },
    { property: 'EstimatedSalary', header: 'EstimatedSalary' },
    { property: 'PointEarned', header: 'PointEarned' },
];

const allData = [
    {
        firstRow: 'DataTypes',
        Tenure: 'int64',
        Balance: 'float64',
        CreditScore: 'int64',
        RowNumber: 'int64',
        CustomerId: 'int64',
        EstimatedSalary: 'float64',
        PointEarned: 'float64',

    },
    {
        firstRow: 'count',
        Tenure: '10000',
        Balance: '10000',
        CreditScore: '10000',
        RowNumber: '10000',
        CustomerId: '10000',
        EstimatedSalary: '10000',
        PointEarned: '10000'
    },
    {
        firstRow: 'mean',
        Tenure: '5.0128',
        Balance: +'76485.89',
        CreditScore: '650.529',
        RowNumber: '5000.5',
        CustomerId: '15690940.57',
        EstimatedSalary: '1000090.24',
        PointEarned: '1000090.24'
    },
];

// Define data structure for DataTableColumns sorting
const options = COLUMNS.map(({ header, property }) => ({
    property,
    label: header,
    // style: header === 'header' ? 'font-weight: bold;' : '',
}));

// Use options const to define data structure for Data component properties
const buildProperties = () => {
    const dict = {};
    for (let i = 0; i < options.length; i += 1) {
        const { label } = options[i];
        if (options[i].property === 'Balance') {
            dict[options[i].property] = {
                label,
                range: { min: 0, max: 40 },
            };
        } else {
            dict[options[i].property] = { label };
        }
    }
    return dict;
};

const TableCustomizationExample = () => (
    <Page background="background" fill>
        <PageContent>
            <Box gap="medium" margin={{ top: 'medium' }}>
                <Results />
            </Box>
        </PageContent>
    </Page>
);

const Results = () => {
    const [select, setSelect] = useState([]);
    const properties = buildProperties();
    return (
        <Data data={allData} flex properties={properties}>
            <Toolbar>
                <DataSearch responsive />
            </Toolbar>
            <DataSummary />
            <Box overflow="auto" flex>
                <DataTable
                    aria-describedby="users-heading"
                    background="background"
                    columns={COLUMNS}
                    // select={select}
                    // onSelect={setSelect}
                    pin
                />
            </Box>
        </Data>
    );
};


export default TableCustomizationExample;