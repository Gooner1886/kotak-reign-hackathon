import React from "react";
import { Icon } from "@iconify/react";
import classes from './Navlinks.module.css';

const Navlinks = (props) => {
  return (
    <div className={classes.NavlinksContent}>
      <Icon icon={`${props.icon}`} width="36" height="36" style={{flex: 0.2}}/>
      <p style={{flex: 0.8, textAlign: 'center'}}>Home</p>
    </div>
  );
};

export default Navlinks;
