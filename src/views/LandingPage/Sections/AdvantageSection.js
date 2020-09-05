import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import 'antd/dist/antd.css';

// @material-ui/icons
import EventAvailable from "@material-ui/icons/EventAvailable";
import Map from "@material-ui/icons/Map";
import Done from "@material-ui/icons/Done";

import {
  BrowserView,
  MobileView
} from "react-device-detect";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoAreaTry from "components/InfoAreaTry/InfoAreaTry.js"
import InfoArea from "components/InfoArea/InfoArea.js"
import {Progress, Row, Col} from "antd";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Le recrutement</h2>
        </GridItem>
      </GridContainer>
      <div style={{marginTop:"30px"}}>
        <GridContainer justify="center">
          <BrowserView>
            <Row
              type="flex"
              style={{ alignItems: "center" }}
              justify="center"
              gutter={10}
            >
              <Col span={12}>
              <Progress type="circle" percent={75.4} strokeColor={'red'} width={180} />
              <p className={classes.description} style={{marginTop: "20px"}}>
              Selon une étude menée par Jengu sur plus de 300 étudiants en pharmacie, 75,4% d'entre eux ne connaissent pas de plateformes dédiées au recrutement en officine et désirerait en utiliser une. Jengu en est la solution.
              </p>
              </Col>
              <Col span={12}>
                <InfoAreaTry
                title="Compatibilité"
                description="Nous vous proposons des annonces ciblés et adaptés à votre profil"
                icon={Done}
                iconColor="success"
                />
                <InfoAreaTry
                title="Carte interactive"
                description="Vous avez accès en un clic aux annonces près de chez vous"
                icon={Map}
                iconColor="info"
                />
                <InfoAreaTry
                title="Disponibilités"
                description="Vous pouvez renseigner vos créneaux horaires via un calendrier partagé"
                icon={EventAvailable}
                iconColor="blue"
                />
              </Col>
            </Row>
          </BrowserView>
          <MobileView>
            <Progress type="circle" percent={75.4} strokeColor={'red'} width={180} />
            <p className={classes.description} style={{marginTop: "20px", marginRight: "10px", marginLeft: "10px"}}>
            Selon une étude menée par Jengu sur plus de 300 étudiants en pharmacie, 75,4% d'entre eux ne connaissent pas de plateformes dédiées au recrutement en officine et désirerait en utiliser une. Jengu en est la solution.
            </p>
                <InfoArea
                title="Compatibilité"
                description="Nous vous proposons des annonces ciblés et adaptés à votre profil"
                icon={Done}
                iconColor="success"
                vertical
                />
                <InfoArea
                title="Carte interactive"
                description="Vous avez accès en un clic aux annonces près de chez vous"
                icon={Map}
                iconColor="info"
                vertical
                />
                <InfoArea
                title="Disponibilités"
                description="Vous pouvez renseigner vos créneaux horaires via un calendrier partagé"
                icon={EventAvailable}
                iconColor="blue"
                vertical
                />
          </MobileView>
        </GridContainer>
      </div>
    </div>
  );
}
