import React from 'react';
import { TextField, Button, Container, Grid } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // You can send the form data to a server or perform other actions
  };

  // Style object to change the input field color
  const inputFieldStyle = {
    color: 'white', // Change this to your desired color
    bordercolor: 'white',
  
  };

  const labelStyle ={
    color:'white'

  };

  const buttonStyle ={
    backgroundColor: '#FFD369',
    color: 'black', 
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              required
              InputProps={{ style: inputFieldStyle }} // Apply the style here
              InputLabelProps={{ style: labelStyle}}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              required
              type="email"
              InputProps={{ style: inputFieldStyle }} // Apply the style here
              InputLabelProps={{ style: labelStyle}}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              required
              InputProps={{ style: inputFieldStyle }} // Apply the style here
              InputLabelProps={{ style: labelStyle}}
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
    </Container>
  );
};

export default ContactForm;
