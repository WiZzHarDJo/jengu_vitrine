/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Email } from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();

  const scrollSmoothTo = () => {
    let element = document.getElementById('contact');
    element.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
  }

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          onClick={scrollSmoothTo}
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Email className={classes.icons} style={{height:"30px", width:"30px"}} /> Contactez-nous
        </Button>
      </ListItem>
    </List>
  );
}
