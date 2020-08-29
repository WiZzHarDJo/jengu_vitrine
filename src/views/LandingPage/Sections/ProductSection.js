import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Explore from "@material-ui/icons/Explore";
import ImportantDevices from "@material-ui/icons/ImportantDevices";
import NewReleases from "@material-ui/icons/NewReleases";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Notre projet</h2>
        </GridItem>
        <h5 className={classes.description}>
            Jengu est une plateforme qui a pour but de faire gagner du temps aux étudiants et jeunes diplômés en médecine dans leur recherches d'emplois.
            Cela en facilitant le processus de recrutement pour les officines en leur apportant une visibilité améliorée. Tout en s'appuyant sur des outils technologiques,
            offrant un service personnalisé via de multiples critères pour répondre à chacune de vos attentes.
          </h5>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Formateur"
              description="Nous souhaitons vous proposer des formations variées afin d’enrichir vos connaissances officinales."
              icon={Explore}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Intuitif"
              description="Une interface simple, agréable et facile d'utilisation pensée pour mettre en relation facilement les étudiants avec les officines."
              icon={ImportantDevices}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Impliqué"
              description="Dernières actualités pharmaceutiques à portée de main."
              icon={NewReleases}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
