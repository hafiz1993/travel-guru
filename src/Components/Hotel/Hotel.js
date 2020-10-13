import React from 'react';
import { useParams } from 'react-router-dom';
import HotelData from '../../FakeData/Hotel.json';
import Area from '../../FakeData/Area.json';
import HotelDetails from './../HotelDetails/HotelDetails';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Map from '../../Images/demo-map.png'
import GMap from '../GMap/GMap';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const Hotel = () => {
    const classes = useStyles();
    const {name} = useParams();
    const data = [...HotelData]
    const place = [...Area]
    const selectedPlace = place.find(each => each.name === name);
    const hotels = data.filter(each=> each.place === name);
   
     const maker = {
         "lat":selectedPlace.lat,
        "lng":selectedPlace.lon
     }
    
    return (
   
        <Grid container spacing={4} style={{paddingTop:"20px"}}>
           
            <Grid item xs={3}>
            <Paper className={classes.paper}>
            <h4>Stay In {name}</h4>
            <div>
                {
                    hotels.map(each => <HotelDetails key={each.id} data={each}></HotelDetails>)
                }
            </div>
            </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>

              <GMap maker={maker}></GMap>
          </Paper>
        </Grid>
        </Grid>
        
        
        
    );
};

export default Hotel;