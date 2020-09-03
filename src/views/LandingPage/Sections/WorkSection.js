import React, { useState } from 'react'
import { Axios, db } from './../../../firebase/firebaseConfig.js'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Check from "@material-ui/icons/Check";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import SnackbarContent from 'components/Snackbar/SnackbarContent.js'

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();

  const [formData, setFormData] = useState({})

  const [successSnack, setSuccessSnack] = useState(false)

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    sendEmail()
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }
  const sendEmail = () => {
    Axios.post(
      'https://us-central1-contactformlisting.cloudfunctions.net/submit',
      formData
    )
      .then(res => {
        db.collection('emails').add({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date(),
        })
      })
      .catch(error => {
        console.log(error)
      })

    setSuccessSnack(true);
  }
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title} id="contact">Contactez-nous</h2>
          <h4 className={classes.description} >
          Si vous avez une question sur notre projet, souhaitez davantage d’informations ou voulez être tenu au courant de l’actualité de Jengu, n’hésitez pas à renseigner vos coordonnées et à nous envoyer un message.
          </h4>
        </GridItem>
          {
            successSnack && (
              <SnackbarContent
              message={
                <span>
                  <b>SUCCES !:</b> Votre email a bien été envoyé, nous vous répondrons sous peu !
                </span>
              }
              close
              color="success"
              icon={Check}
            />
            )
          }
          <GridItem cs={12} sm={12} md={8}>
          <form onSubmit={handleSubmit}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Votre Nom"
                  id="name"
                  type="text"
                  name="name"
                  onChange={updateInput}
                  value={formData.name || ''}
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Votre Email"
                  id="email"
                  type="email"
                  name="email"
                  onChange={updateInput}
                  value={formData.email || ''}
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Votre Message"
                id="message"
                type="text"
                name="message"
                onChange={updateInput}
                value={formData.message || ''}
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button type="submit" color="info">Envoyer</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}