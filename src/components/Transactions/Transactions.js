import React from "react";
import { VictoryChart, VictoryLine, VictoryTheme } from "victory";
import classes from "./Transactions.module.css";

const Transactions = (props) => {
  return (
    <div className={classes.transactions}>
      <VictoryChart
        theme={VictoryTheme.material}
        categories={{
          x: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
        }}
        width={650}
      >
        <VictoryLine
          style={{
            data: { stroke: "#e2607f" },
            parent: { border: "1px solid #ccc" },
          }}
          data={[
            { y: 100 },
            { y: 550 },
            { y: 300 },
            { y: 550 },
            { y: 650 },
            { y: 400 },
            { y: 700 },
            { y: 550 },
          ]}
        />
        <VictoryLine
          style={{
            data: { stroke: "#94ddde" },
            parent: { border: "1px solid #ccc" },
          }}
          data={[
            { y: 200 },
            { y: 350 },
            { y: 100 },
            { y: 300 },
            { y: 220 },
            { y: 475 },
            { y: 600 },
            { y: 420 },
          ]}
        />
        <VictoryLine
          style={{
            data: { stroke: "#2b4b82" },
            parent: { border: "1px solid #ccc" },
          }}
          data={[
            { y: 50 },
            { y: 175 },
            { y: 250 },
            { y: 200 },
            { y: 500 },
            { y: 125 },
            { y: 500 },
            { y: 250 },
          ]}
        />
      </VictoryChart>
    </div>
  );
};

export default Transactions;
