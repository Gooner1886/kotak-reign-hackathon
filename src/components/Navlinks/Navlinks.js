import React from "react";
import { Icon } from "@iconify/react";
import classes from './Navlinks.module.css';

const Navlinks = (props) => {
  return (
    <div className={classes.NavlinksContent}>
      <Icon icon={`${props.icon}`} width="36" height="36" style={{padding: '0px 36px'}}/>
      <p style={{padding: '0px 15px'}}>{props.label}</p>
    </div>
  );
};

export default Navlinks;
