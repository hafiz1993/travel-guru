import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Area from '../../FakeData/Area.json';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';







const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      minWidth: 300,
      '& > *': {
        margin: theme.spacing(1),
        width: '50ch',
      },
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
      container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
     
  }));

const Reservation = () => {
    const classes = useStyles();
    const {id} = useParams()
    const place = [...Area];
    const data = place[id];
       


    

    return (
        
        <div style={{paddingTop:"10px"}}>
          <Grid container spacing={6}>
          
        <Grid item xs={5}>
        <div style={{ color: "white"}}>
                        <h1 style={{fontSize:"50px"}}>{data.name}</h1>
                        <p style={{textAlign: "left"}} >{data.details}</p>
                        <br/>
                        </div>
                        <Link  to="/" style={{textDecoration:"none"}}>
                        <div>
                            
                        <Button  variant="contained"style={{backgroundColor:"#F4B117", height:"50px", width:"150px", color:"white" }}>
                          Back</Button>
                          
                        </div>
                        </Link>
        </Grid>
        <Grid item xs={6}>        
        <div style={{ color: "white", backgroundColor:"white", padding:"50px 10px 10px 10px"}}>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Origin" variant="outlined" />
        <TextField id={data.name} value={data.name} variant="outlined" />
    </form>      

          <form className={classes.root} style={{padding:"10px 10px 5px 5px"}}  noValidate>
      <TextField
        id="date"
        type="date"
        defaultValue="yyyy-mm-dd"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
       <TextField
        id="date"
        type="date"
        defaultValue="yyyy-mm-dd"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        
        
      />
       
         <Link to={`/hotels/${data.name}`}style={{textDecoration:"none"}}>                   
         <Button  className={classes.root}variant="contained"style={{backgroundColor:"#F4B117", height:"50px", width:"400px", color:"white" }}>
        Start Booking
        </Button>
        </Link>
          
    </form>
 
                
        </div>
                        
        
                

        
     </Grid>
        </Grid>
        </div>
        
    );
};

export default Reservation;