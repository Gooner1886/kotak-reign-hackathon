import React from "react";
import classes from "./TransactionHistory.module.css";
import { Icon } from "@iconify/react";

const TransactionHistory = () => {
  return (
    <div className={classes.transaction_history}>
      <h2>Transaction History</h2>
      <table style={{marginTop: '15px'}}>
        <thead>
          <tr>
            <th>No.</th>
            <th>Transaction Name</th>
            <th>
              Datetime{" "}
              <Icon
                icon="lucide:chevrons-up-down"
                color="#b0bac9"
                width="18"
                height="18"
              />
            </th>
            <th>
              Status{" "}
              <Icon
                icon="lucide:chevrons-up-down"
                color="#b0bac9"
                width="18"
                height="18"
              />
            </th>
            <th>
              Amount{" "}
              <Icon
                icon="lucide:chevrons-up-down"
                color="#b0bac9"
                width="18"
                height="18"
              />
            </th>
          </tr>
          <tr style={{borderBottom: '1px solid #c9cfda'}}>
            <th style={{ color: "#c9cfda", fontWeight: "lighter" }}>Search</th>
            <th style={{ color: "#c9cfda", fontWeight: "lighter" }}>Search</th>
            <th style={{ color: "#000", fontWeight: "lighter" }}>
              All{" "}
              <Icon
                icon="ant-design:caret-down-filled"
                color="#ccc"
                width="16"
                height="16"
              />
            </th>
            <th style={{ color: "#000", fontWeight: "lighter" }}>
              All{" "}
              <Icon
                icon="ant-design:caret-down-filled"
                color="#ccc"
                width="16"
                height="16"
              />
            </th>
            <th style={{ color: "#000", fontWeight: "lighter" }}>
              All{" "}
              <Icon
                icon="ant-design:caret-down-filled"
                color="#ccc"
                width="16"
                height="16"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr style={{borderBottom: '1px solid #c9cfda'}}>
            <td data-column="First Name">
              <button>9177</button>
            </td>
            <td data-column="Last Name">
            <Icon icon="simple-icons:adidas" color="#2b2b28" width="50" height="50" />
              <p
                style={{
                  margin: 0,
                  position: "absolute",
                  top: "905px",
                  left: "540px",
                }}
              >
                Adidas
              </p>
            </td>
            <td data-column="Job Title">22/12/21 18:30:34</td>
            <td data-column="Twitter">
              <button
                style={{
                  width: "150px",
                  borderRadius: "4px",
                  height: "35px",
                  padding: "5px",
                  textAlign: "center",
                  background: "#fff",
                  border: "1px solid #7fc008",
                  color: "#7fc008",
                }}
              >
                Completed
              </button>
            </td>
            <td data-column="Job Title">&#8377;901.31</td>
          </tr>
          <tr style={{borderBottom: '1px solid #c9cfda'}}>
            <td data-column="First Name">
              <button>3064</button>
            </td>
            <td data-column="Last Name">
            <Icon icon="simple-icons:mcdonalds" color="#ffc72c" width="50" height="50" />
              <p
                style={{
                  margin: 0,
                  position: "absolute",
                  top: "985px",
                  left: "540px",
                }}
              >
                McDonald's
              </p>
            </td>
            <td data-column="Job Title">18/12/21 21:00:52</td>
            <td data-column="Twitter">
              <button
                style={{
                  width: "150px",
                  borderRadius: "4px",
                  height: "35px",
                  padding: "5px",
                  textAlign: "center",
                  background: "#fff",
                  border: "1px solid #7fc008",
                  color: "#7fc008",
                }}
              >
                Completed
              </button>
            </td>
            <td data-column="Job Title">&#8377;641.20</td>
          </tr>
          <tr style={{borderBottom: '1px solid #c9cfda'}}>
            <td data-column="First Name">
              <button>9195</button>
            </td>
            <td data-column="Last Name">
              <Icon
                icon="simple-icons:starbucks"
                color="#00704a"
                width="50"
                height="50"
              />
              <p
                style={{
                  margin: 0,
                  position: "absolute",
                  top: "1060px",
                  left: "540px",
                }}
              >
                Starbucks
              </p>
            </td>
            <td data-column="Job Title">7/12/21 01:10:15</td>
            <td data-column="Twitter">
              <button
                style={{
                  width: "150px",
                  borderRadius: "4px",
                  height: "35px",
                  padding: "5px",
                  textAlign: "center",
                  background: "#fff",
                  border: "1px solid #db8c28",
                  color: "#db8c28",
                }}
              >
                Pending
              </button>
            </td>
            <td data-column="Job Title">&#8377;510.30</td>
          </tr>
          <tr style={{borderBottom: '1px solid #c9cfda'}}>
            <td data-column="First Name">
              <button>3128</button>
            </td>
            <td data-column="Last Name">
              <Icon
                icon="simple-icons:mitsubishi"
                color="#e60012"
                width="50"
                height="50"
              />
              <p
                style={{
                  margin: 0,
                  position: "absolute",
                  top: "1135px",
                  left: "540px",
                }}
              >
                Mitsubishi
              </p>
            </td>
            <td data-column="Job Title">30/11/21 10:50:11</td>
            <td data-column="Twitter">
              <button
                style={{
                  width: "150px",
                  borderRadius: "4px",
                  height: "35px",
                  padding: "5px",
                  textAlign: "center",
                  background: "#fff",
                  border: "1px solid #7fc008",
                  color: "#7fc008",
                }}
              >
                Completed
              </button>
            </td>
            <td data-column="Job Title">&#8377;828.90</td>
          </tr>
          <tr style={{borderBottom: '1px solid #c9cfda'}}>
            <td data-column="First Name">
              <button>9892</button>
            </td>
            <td data-column="Last Name">
            <Icon icon="simple-icons:asus" color="#00539b" width="50" height="50" />
              <p
                style={{
                  margin: 0,
                  position: "absolute",
                  top: "1210px",
                  left: "540px",
                }}
              >
                Asus
              </p>
            </td>
            <td data-column="Job Title">29/12/21 12:00:41</td>
            <td data-column="Twitter">
              <button
                style={{
                  width: "150px",
                  borderRadius: "4px",
                  height: "35px",
                  padding: "5px",
                  textAlign: "center",
                  background: "#fff",
                  border: "1px solid #db303f",
                  color: "#db303f",
                }}
              >
                Cancelled
              </button>
            </td>
            <td data-column="Job Title">&#8377;20775.43</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
