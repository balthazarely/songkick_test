import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


  const Events = (props) => {
    const classes = useStyles();
        console.log(props.events.resultsPage.results.event, "events in the child container")
        // console.log(props.events.resultsPage.results.event[0].performance[0].artist.id, "artist ID in the child container")
        // console.log(props.events.resultsPage.results.event[0].performance[0].artist.displayName, "artist ID in the child container")
       
        const shows = props.events.resultsPage.results.event.map((event, i) => {
            return (
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>{event.performance[0].artist.displayName}</Paper>
                </Grid>
            )
        })
    

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {shows}
      </Grid>
    </div>
  );
}

export default Events;

