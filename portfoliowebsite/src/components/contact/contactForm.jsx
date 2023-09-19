import React, { useRef, useState } from "react";
import { TextField, Button, Container, Grid, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const form = useRef();

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4bk7rvg",
        "template_iugklfl",
        form.current,
        "YqhCLdFDAlmeE9cxQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSnackbarMessage("Email sent successfully!");
          setSnackbarOpen(true);
        },
        (error) => {
          console.log(error.text);
          setSnackbarMessage("Error sending email. Please try again.");
          setSnackbarOpen(true);
        }
      );
  };

  const inputFieldStyle = {
    color: "white",
    bordercolor: "white",
  };

  const labelStyle = {
    color: "white",
  };

  const buttonStyle = {
    backgroundColor: "#FFD369",
    color: "black",
  };

  return (
    <Container maxWidth="sm">
      <form ref={form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="user_name"
              variant="outlined"
              required
              InputProps={{ style: inputFieldStyle }} // Apply the style here
              InputLabelProps={{ style: labelStyle }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="user_email"
              variant="outlined"
              required
              type="email"
              InputProps={{ style: inputFieldStyle }} // Apply the style here
              InputLabelProps={{ style: labelStyle }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              name="user_message"
              variant="outlined"
              multiline
              rows={4}
              required
              InputProps={{ style: inputFieldStyle }} // Apply the style here
              InputLabelProps={{ style: labelStyle }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              startIcon={<SendIcon />}
              style={buttonStyle}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleSnackbarClose}
          severity={
            snackbarMessage.includes("successfully") ? "success" : "error"
          }
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </Container>
  );
};

export default ContactForm;
