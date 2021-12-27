import React from "react";
import classes from './MainIcons.module.css';
import { Icon } from "@iconify/react";


const MainIcons = (props) => {
  return (
    <div className={classes.iconsAndLabels}>
      <Icon icon={`${props.icon}`} width="36" height="36" />
      <p>{props.label}</p>
    </div>
  );
};
export default MainIcons;
