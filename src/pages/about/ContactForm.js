
import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FormContainer } from "./AboutElements"
const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50ch"
    }
  }
}));

function CountactUs() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);
  const [showErrors, setShowErrors] = useState(false);

  let errors = [];
  function ValidateEmail(email) {
    if (/\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }

  const formValidation = () => {
    setErrorMessages([]);

    const isNameValid = name !== "";
    const isMessageValid = message !== "";
    const isSubjectValid = subject !== "";

    if (!isNameValid) {
      errors.push("Name is not valid, please try again.");
    }
    if (!ValidateEmail(email)) {
      errors.push("Email is not valid, please try again.");
    }
    if (email === "") {
      errors.push("Email field is empty, please try again.");
    }
    if (!isMessageValid) {
      errors.push("Message is not valid, please try again.");
    }
    if (!isSubjectValid) {
      errors.push("Subject is not valid, please try again.");
    }
    if (errors.length > 0) {
      setShowErrors({ showErrors: true });
      setErrorMessages(errors);
    } else {
      setShowErrors({ showErrors: false });
      alert("Email Sent");
    }
  };

  var style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flexEnd',
    marginBottom: 10
 }

  var hStyle = {
    paddingBottom: 12,
  }



  return (    
    <div>       
       <FormContainer>
          <form style={style} className={classes.root}>
          <h2 style={hStyle}> Get in touch </h2>
            <TextField
              label="Name"
              placeholder="Jane Doe"
              type="text"
              variant="outlined"
              onChange={e => setName(e.target.value)}
            />
            <TextField
              label="Email"
              placeholder="janedoe@gmail.com"
              type="email"
              variant="outlined"
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              label="Subject"
              placeholder="Help with billing"
              type="text"
              variant="outlined"
              onChange={e => setSubject(e.target.value)}
            />
            <TextField
              label="Message"
              placeholder="Joe Doe"
              type="text"
              variant="outlined"
              multiline
              rowsMax="3"
              onChange={e => setMessage(e.target.value)}
            />
            {showErrors
              ? errorMessages.map((item, index) => {
                  return <ul key={index}>{item}</ul>;
                })
              : null}
            <Button
              variant="contained"
              color="primary"
              type="button"
              onClick={formValidation}
            >
              Submit
            </Button>
          </form>
        </FormContainer>
    </div>
  );
}
export default CountactUs;
