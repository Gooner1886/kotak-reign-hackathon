import React from "react";
import classes from "./Overview.module.css";
import { Icon } from "@iconify/react";
import { VictoryPie } from "victory";

const Overview = (props) => {
  return (
    <div className={classes.overview}>
      <div className={classes.section}>
        <h2 style={{ margin: 0, fontSize: "32px" }}>&#8377;1,95,000</h2>
        <h4 style={{ margin: 0, fontSize: "20px", color: "#646464" }}>
          Premier Account
        </h4>
        <div className={classes.percent}>
          <Icon
            icon="bi:arrow-up-right"
            color="#21c24e"
            width="12"
            height="12"
          />
          <p
            style={{
              color: "#21c24e",
              margin: 0,
              fontSize: "20px",
              marginTop: "5px",
            }}
          >
            17.97%
          </p>
        </div>
      </div>
      <div className={classes.line}></div>
      <div className={classes.section}>
        <h2 style={{ margin: 0, fontSize: "32px" }}>&#8377;22,000</h2>
        <h4 style={{ margin: 0, fontSize: "20px", color: "#646464" }}>
          ISA Savings
        </h4>
        <div className={classes.percent}>
          <Icon
            icon="bi:arrow-down-right"
            color="#ea5c3d"
            width="12"
            height="12"
          />
          <p
            style={{
              color: "#ea5c3d",
              margin: 0,
              fontSize: "20px",
              marginTop: "5px",
            }}
          >
            11.43%
          </p>
        </div>
      </div>
      <div className={classes.line}></div>
      <div className={classes.section}>
        <h2 style={{ margin: 0, fontSize: "32px" }}>&#8377;2,19,000</h2>
        <h4 style={{ margin: 0, fontSize: "20px", color: "#646464" }}>
          Other Savings
        </h4>
        <div className={classes.percent}>
          <Icon icon="bi:arrow-right" color="#a5a5a5" width="12" height="12" />
          <p
            style={{
              color: "#a5a5a5",
              margin: 0,
              fontSize: "20px",
              marginTop: "5px",
            }}
          >
            0.00%
          </p>
        </div>
      </div>
      <div className={classes.line}></div>
      <div className={classes.piechart}>
        <VictoryPie
          height={300}
          padding={{ top: 55, bottom: 55, right: 10, left: 10 }}
          colorScale={["#33436b", "#51c6e0", "#ea3540", "#797979"]}
          data={[
            { x: "Netflix + Prime", y: 35 },
            { x: "Tuition fees", y: 40 },
            { x: "Apartment Rent", y: 55 },
            { x: "Other", y: 25 },
          ]}
        />
      </div>
    </div>
  );
};

export default Overview;
