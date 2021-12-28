import React from "react";
import classes from './MainIcons.module.css';
import { Icon } from "@iconify/react";


const MainIcons = (props) => {
  return (
    <div className={classes.iconsAndLabels}>
      <Icon icon={`${props.icon}`} width="36" height="36" className={classes.icons}/>
      <p className={classes.labels} style={{fontSize: '15px', margin: '0', textAlign: 'center'}}>{props.label}</p>
    </div>
  );
};
export default MainIcons;
