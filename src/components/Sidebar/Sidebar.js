import React from "react";
import BankLogo from "../../assets/Kotak_Mahindra_Bank_logo.png";
import classes from "./Sidebar.module.css";
import { Icon } from "@iconify/react";
import Navlinks from "../Navlinks/Navlinks";
import MainIcons from "../MainIcons/MainIcons";
const Sidebar = () => {
  const mainicons = [
    {
      icon: "bx:bx-help-circle",
      label: "Helpdesk",
    },
    {
      icon: "ant-design:safety-certificate-outlined",
      label: "Safety Tips",
    },
    {
      icon: "ic:outline-local-hospital",
      label: "Emergency",
    },
  ];
  const links = [
    {
      icon: "ant-design:home-filled",
      label: "Home"
    },
    {
      icon: "ph:cards-fill",
      label: "My Cards"
    },
    {
      icon: "ri:exchange-fill",
      label: "Transactions"
    },
    {
      icon: "dashicons:welcome-write-blog",
      label: "Apply Now"
    },
    {
      icon: "ant-design:book-filled",
      label: "Passbook"
    },
    {
      icon: "ic:baseline-account-balance",
      label: "Accounts"
    },
    {
      icon: "bi:calculator-fill",
      label: "Calculator"
    },
    {
      icon: "fluent:mail-24-filled",
      label: "Inbox"
    },
    {
      icon: "clarity:settings-solid",
      label: "Settings"
    },
    {
      icon: "eva:power-outline",
      label: "Logout"
    },
  ];
  return (
    <div className={classes.Sidebar}>
      {/*  Logo
       Helpdesk + Safety + Emergency
       All Logos + navlinks
       Profile + Name + Timestamp */}
      <img src={BankLogo} alt="Kotak Logo" className={classes.logo} />
      <div className={classes.SidebarContent}>
        <div className={classes.mainIcons}>
          {mainicons.map((mainIcon) => {
            return <MainIcons icon={mainIcon.icon} label={mainIcon.label} />;
          })}
        </div>
        <div className={classes.Navlinks}>
          {links.map((link) => {
            return <Navlinks key={Math.random()} icon={link.icon} label={link.label}/>;
          })}
        </div>
        <div className={classes.bottomIcons}>
          <Icon
            icon="healthicons:ui-user-profile-outline"
            width="36"
            height="36"
          />
          <div className={classes.details}>
            <p style={{ margin: "0" }}>John Doe</p>
            <p style={{ margin: "0" }}>22 Dec at 9:30 a.m</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
