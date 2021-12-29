import React from "react";
import classes from "./Dashboard.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Overview from "../Overview/Overview";
import Transactions from "../Transactions/Transactions";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import MyCards from "../MyCards/MyCards";
import QuickTransfer from "../QuickTransfer/QuickTransfer";

const Dashboard = () => {
  return (
    <div className={classes.dashboard}>
      <Sidebar />
      <div className={classes.right_half}>
        <Overview />
        <div className={classes.second_row}>
          <Transactions />
          <MyCards />
        </div>
        <div className={classes.third_row}>
          <TransactionHistory />
          <QuickTransfer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
