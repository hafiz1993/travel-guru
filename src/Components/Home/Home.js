import React, { useState } from 'react';
import Sajek from '../../Images/Image/Sajek.png';
import Sremongol from '../../Images/Image/Sreemongol.png';
import Sundorbon from '../../Images/Image/sundorbon.png';
import Area from '../../FakeData/Area.json';
import'./Home.css';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing(1),
    },
    divider: {
      margin: theme.spacing(2, 0),
    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
        },
      }
  }));


const Home = () => {
    const classes = useStyles();
    const Place = [...Area];
   console.log(Area)

    const[value, setValue] = useState(Place[0]);
    const PlaceClick = (id) =>{
        setValue(Place[id]);
    };
    return (
        <div>
         <Grid container spacing={2}>
        
        <Grid item xs={3}>
        <div style={{ color: 'white', height: '250px' }} className=" mt-5">
                        <h1 className="name"><strong className="name-style"  >{value.name}</strong></h1> <br/>
                        <p style={{textAlign: "left"}} className="details">{value.details}</p>
                        <br/>
                       
                        </div>
                        <Link to={`/reservation/${value.id}`} style={{textDecoration:"none"}}>
                        <div style={{paddingTop:"100px"}}>
                            
                        <Button variant="contained"style={{backgroundColor:"#F4B117", height:"50px", width:"150px", color:"white", decoration:"none" }}>
                          Booking</Button>
                          
                        </div>
                        </Link>
                       
                  
                    
        </Grid>
        <Grid item xs={3}>
        <button onClick={() => PlaceClick(0)} className="place-btn">
                            <img src={Sajek} className="place-card img-responsive" alt="" />
                            <div class="carousel-caption">
                             <Typography variant="h4" style={{color:"yellow"}}>Sajek Vally</Typography>
                            </div>
                        </button>
        </Grid>
        <Grid item xs={3}>
        <button onClick={() => PlaceClick(1)} className="place-btn">
                            <img src={Sundorbon} className="place-card img-responsive" alt="" />
                            <div class="carousel-caption">
                          <Typography variant="h4" style={{color:"yellow"}}>Sundorbon</Typography>
                            </div>
                        </button>
        </Grid>
        <Grid item xs={3}>
        <button onClick={() => PlaceClick(2)} className="place-btn">
                            <img src={Sremongol} className="place-card img-responsive" alt="" />
                            <div class="carousel-caption">
                 <Typography variant="h4" style={{color:"yellow"}}>Sremongol</Typography>
                            </div>
                        </button>
        </Grid>
      </Grid>
      
     
    </div>
                
       
     
            
        
    );
};

export default Home;