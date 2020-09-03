import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import {
  BrowserView,
  MobileView
} from "react-device-detect";

// @material-ui/icons
import Explore from "@material-ui/icons/Explore";
import ImportantDevices from "@material-ui/icons/ImportantDevices";
import MenuBook from "@material-ui/icons/MenuBook";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Speed from "@material-ui/icons/Speed";
import Forum from "@material-ui/icons/Forum";

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
      <BrowserView>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Notre projet</h2>
        </GridItem>
        <h5 className={classes.description} style={{textAlign: "justify"}}>
        Jengu est une plateforme innovante qui a pour volonté d'optimiser la recherche d'emploi des étudiants et jeunes diplômés en pharmacie,
        et permettre aux officines de recruter <b>LE</b> candidat idéal. Jengu vous propose une solution inédite qui passe par un algorithme de correspondance
        des profils étudiants et officinaux, permettant de vous offrir un service ultra-personnalisé qui correspond à chacune de vos attentes.
        Jengu est également une plateforme de formation à destination des étudiants et des pharmaciens, car nous souhaitons vous accompagner au quotidien.
        </h5>
      </GridContainer>
      <div style={{marginTop:"30px"}}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Formateur"
              description="Développez vous au quotidien grâce nos formations en ligne conçues pour tous !"
              icon={Explore}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Intuitif"
              description="Rencontrez vos étudiants ou vos officines à travers une interface simple et intuitive !"
              icon={ImportantDevices}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Impliqué"
              description="Soyez toujours à jour avec les dernières actualités pharmaceutiques à portée de main !"
              icon={MenuBook}
              iconColor="blue"
              vertical
            />
          </GridItem><GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Profils vérifiés"
              description="Croisez des personnes certifiées à l'identité et aux diplômes vérifiés !"
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Offres complètes"
              description="Publiez en quelques clics vos offres à travers une procédure simplifiée !"
              icon={Speed}
              iconColor="blue"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="En direct"
              description="Discutez sans intermédiaire et immédiatement avec l'étudiant ou l'officine !"
              icon={Forum}
              iconColor="info"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
      </BrowserView>
      <MobileView>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Notre projet</h2>
        </GridItem>
        <h5 className={classes.description} style={{textAlign: "justify", marginLeft: "15px", marginRight: "15px"}}>
        Jengu est une plateforme innovante qui a pour volonté d'optimiser la recherche d'emploi des étudiants et jeunes diplômés en pharmacie,
        et permettre aux officines de recruter <b>LE</b> candidat idéal. Jengu vous propose une solution inédite qui passe par un algorithme de correspondance
        des profils étudiants et officinaux, permettant de vous offrir un service ultra-personnalisé qui correspond à chacune de vos attentes.
        Jengu est également une plateforme de formation à destination des étudiants et des pharmaciens, car nous souhaitons vous accompagner au quotidien.
        </h5>
      </GridContainer>
      <div style={{marginTop:"30px"}}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Formateur"
              description="Développez vous au quotidien grâce nos formations en ligne conçues pour tous !"
              icon={Explore}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Intuitif"
              description="Rencontrez vos étudiants ou vos officines à travers une interface simple et intuitive !"
              icon={ImportantDevices}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Impliqué"
              description="Soyez toujours à jour avec les dernières actualités pharmaceutiques à portée de main !"
              icon={MenuBook}
              iconColor="blue"
              vertical
            />
          </GridItem><GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Profils vérifiés"
              description="Croisez des personnes certifiées à l'identité et aux diplômes vérifiés !"
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Offres complètes"
              description="Publiez en quelques clics vos offres à travers une procédure simplifiée !"
              icon={Speed}
              iconColor="blue"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="En direct"
              description="Discutez sans intermédiaire et immédiatement avec l'étudiant ou l'officine !"
              icon={Forum}
              iconColor="info"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
      </MobileView>

    </div>
  );
}
