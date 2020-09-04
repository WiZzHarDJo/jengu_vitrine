import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import hamza from "assets/img/hamza.jpg";
import ying from "assets/img/Ying.jpg";
import team3 from "assets/img/faces/kendall.jpg";
import nicolas from "assets/img/nicolas.jpg";
import joaquim from "assets/img/joaquim.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Notre équipe</h2>
      <h5 className={classes.description} style={{fontSize:"1.4rem"}}>
        L’équipe de Jengu c’est avant tout 5 passionés de divers horizons qui sont à votre écoute pour répondre à vos besoins.
      </h5>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={hamza} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Hamza Kalloua
                <br />
                <small className={classes.smallTitle}>Etudiant en 4ème année de Pharmacie à l'Université de Paris</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Après de nombreuses années d'investissements associatif, Hamza se passionne pour le marketing et l'apport de solutions numériques aux problématiques actuelles du milieu pharmaceutique.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={ying} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Ying Van der Walsche
                <br />
                <small className={classes.smallTitle}>Designer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Baptiste Rebiscoul
                <br />
                <small className={classes.smallTitle}>Model</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>

        <GridContainer style={{justifyContent:"center"}}>
        <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={nicolas} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Nicolas Berthelot
                <br />
                <small className={classes.smallTitle}>Model</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <a href="https://www.linkedin.com/in/nicolas-berthelot-4a0790171"><i className={classes.socials + " fab fa-linkedin"} /></a>
                </Button>
              </CardFooter>
            </Card>
          </GridItem> <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={joaquim} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Joaquim Giret-Imhaus
                <br />
                <small className={classes.smallTitle}>Etudiant en dernière année d'école d'ingénieur</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Curieux de nature et passionné par les nouvelles technologies, Joaquim apporte son expérience technique afin de développer Jengu et ses fonctionnalités.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                 <a href="https://www.linkedin.com/in/joaquim-giret-imhaus"><i className={classes.socials + " fab fa-linkedin"} /></a>
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
