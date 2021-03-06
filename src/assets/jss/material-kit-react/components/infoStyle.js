import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  title
} from "assets/jss/material-kit-react.js";

const infoStyle = {
  infoArea: {
    maxWidth: "360px",
    margin: "0 auto",
    padding: "0px"
  },
  infoAreaTry: {
    maxWidth: "360px",
    margin: "0 auto",
    padding: "0px",
    display: "inline-flex",
    justifyContent:"center"
  },
  iconWrapper: {
    float: "left",
    marginTop: "24px",
    marginRight: "10px"
  },
  iconWrapperTry: {
    float: "left",
    marginTop: "50px",
    marginRight: "30px"
  },
  primary: {
    color: primaryColor
  },
  warning: {
    color: warningColor
  },
  danger: {
    color: dangerColor
  },
  success: {
    color: successColor
  },
  info: {
    color: infoColor
  },
  rose: {
    color: roseColor
  },
  gray: {
    color: grayColor
  },
  blue:{
    color: "#26547C"
  },
  icon: {
    width: "36px",
    height: "36px"
  },
  descriptionWrapper: {
    color: grayColor,
    overflow: "hidden"
  },
  title,
  description: {
    color: grayColor,
    overflow: "hidden",
    marginTop: "0px",
    fontSize: "20px"
  },
  iconWrapperVertical: {
    float: "none"
  },
  iconVertical: {
    width: "80px",
    height: "80px"
  }
};

export default infoStyle;
