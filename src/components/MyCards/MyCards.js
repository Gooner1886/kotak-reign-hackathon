import React from "react";
import classes from "./MyCards.module.css";
import CardsImg from "../../assets/cards.png";

const MyCards = () => {
  return (
    <div className={classes.mycards}>
      <h2>My Cards</h2>
      <img
        src={CardsImg}
        alt="credit card"
        style={{ height: "300px", width: "330px", borderRadius: "12px" }}
      />
    </div>
  );
};

export default MyCards;
