import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AmazonLogo from './amazon.jpg'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    marginTop: '40px',
    color: theme.palette.text.secondary,
  },
}));

export default function Text() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ marginTop: '7%' }}>
          <Container  maxWidth="md">
          <div className="AmazonLogo">
          <img src={AmazonLogo}  alt="Logo"     className="Amazon-icon"   />
          </div>
            <Typography component="h4" variant="h4" className="Heading">
            Support us on 300 tablet distribution for our kids

              
          </Typography>
            <Typography component="p" variant="p" className="text1">
              The COVID 19 pandemic has hit the poor disproportionately hard; beyond loss of livelihoods, the associated school closures that have gone on for many months, with immense learning losses for their children.

              
          </Typography>
            <Typography component="p" variant="p" className="text2">
              And so, as soon as the lockdown began, our teachers swung to action, under the Reach & Teach Task Force. We reimagined how to continue learning to our students virtually. We reached out to our students through their parents’ phones and widely available low tech solutions like WhatsApp. We partnered with parents to support the child. We curated and created exciting, attractive and rlevant material.


              
          </Typography>
          </Container>
        </Grid>

      </Grid>
    </div>
  );
}
