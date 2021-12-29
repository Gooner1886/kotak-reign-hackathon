import React from "react";
import classes from "./QuickTransfer.module.css";
import { Icon } from "@iconify/react";

const QuickTransfer = () => {
  return (
    <div className={classes.quicktransfer}>
      <h2 style={{ fontFamily: "Roboto" }}>Quick Transfer</h2>
      <div>
        <form className={classes.form}>
          <label for="name">From</label>
          <div className={classes.inputAndIcon}>
            <input type="text" placeholder="Your Name" id="name"></input>
            <Icon
              icon="akar-icons:circle-triangle-down-fill"
              color="#c8c8c8"
              width="24"
              height="24"
              style={{marginLeft: '-30px', cursor: 'pointer'}}
            />
          </div>
          <br />
          <label for="remail">To</label>
          <div className={classes.inputAndIcon}>
            <input
              type="text"
              placeholder="Receiver's email"
              id="remail"
            ></input>
            <Icon
              icon="akar-icons:circle-triangle-down-fill"
              color="#c8c8c8"
              width="24"
              height="24"
              style={{marginLeft: '-30px', cursor: 'pointer'}}
            />
          </div>
          <br />
          <label for="amount">Amount</label>
          <input type="text" placeholder="Amount" id="amount"></input>
        </form>
      </div>
    </div>
  );
};

export default QuickTransfer;
