import { React, useState, useContext } from "react";
import { Box, Grommet, Text } from "grommet";
import "../../../css/horizontal-timeline.css";
import ActivePageContext from "./ActivePageContext";

const HorizontalTimeLine = () => {
  const ctx = useContext(ActivePageContext);
  // const [activeStep, setActiveStep] = useState("1");
  console.log("in horizontal " + ctx.selected);

  return (
    <Box align="center">
      <div className="timeline">
        <div className="line-default"></div>
        {ctx.selected >= 2 ? (
          <div className="line-active"></div>
        ) : (
          <div className="line-default"></div>
        )}

        {ctx.selected >= 3 ? (
          <div className="line-active-full"></div>
        ) : ctx.selected >= 2 ? (
          <div className="line-active"></div>
        ) : (
          <div className="line-default"></div>
        )}
        <ul className="timelinecheck">
          <li>
            <div
              className={ctx.selected >= 1 ? "checkActive" : "checkCircle"}
            ></div>
            <p>Data exploration</p>
          </li>
          <li>
            <div
              className={ctx.selected >= 2 ? "checkActive" : "checkCircle "}
            ></div>
            <p>Identify the data type</p>
          </li>
          <li>
            <div
              className={ctx.selected >= 3 ? "checkActive" : "checkCircle"}
            ></div>
            <p>recommend visualization</p>
          </li>
        </ul>
      </div>
    </Box>
  );
};

export default HorizontalTimeLine;
