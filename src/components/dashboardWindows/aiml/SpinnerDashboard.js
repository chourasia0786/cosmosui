import React, { useState, useEffect } from "react";
import { Layer, Box, Text, Spinner } from "grommet";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count < 98 ? (prevCount) => prevCount + 1 : 98);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return <>{count}%</>;
};
const SpinnerDashboard = () => {
  return (
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
        <Text alignSelf="center">
          <Counter />
        </Text>
      </Box>
    </Layer>
  );
};

export default SpinnerDashboard;
