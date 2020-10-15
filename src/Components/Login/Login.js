import React, { useContext, useState } from 'react';
import { Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import google from '../../Images/Icon/google.png'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import {handleGoogleSignIn, handleGoogleSignOut, initializeFirebaseLogin, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from './LoginManager';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop:'100px'
      
      
    },
    paper: {
      padding: theme.spacing(4),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      paddingTop:'5px'

    },
  }));



  initializeFirebaseLogin();

//function
function Login() {

    const classes = useStyles();
    const[newUser, setNewUser] = useState (false);
  const [user, setUser] = useState({

isSignIn: false,
newUser:false,
name: '',
email:'',
password: '',
photoURL:''
 });

const [loggedInUser, setLoggedInUser] = useContext(UserContext);
const history = useHistory();
const location = useLocation();
let { from } = location.state || { from: { pathname: "/" } };

const googleSignIn = () =>{
  handleGoogleSignIn()
  .then(res  => {
    handleResponse(res, true);
  })
}
const googleSignOut = () =>{
  handleGoogleSignOut()
  .then(res  => {
   
    
  })
}

const handleResponse = ( res, redirect) =>{
  setUser(res);
  setLoggedInUser(res);
  if(redirect){
  history.replace(from);
  }
  
}
// google sign in
  
  
  // google sign out
  
  const handleSubmit = (e) =>{
    // console.log(user.email, user.password)
    if (newUser && user.email && user.password){
      
      createUserWithEmailAndPassword(user.name, user.email, user.password)
      .then(res=>{
        handleResponse(res, true);
      })
    }
    if(!newUser && user.email && user.password){
      signInWithEmailAndPassword(user.email, user.password)
      .then(res=>{
        handleResponse(res, true);
      })
    }
    e.preventDefault();
  }
  
  
  const handleBlur = (e) => {
   let isFormValid =true;
    if(e.target.name === 'email'){
    isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    

    }
    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 8;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFormValid = isPasswordValid && passwordHasNumber;
    }
    if(isFormValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);

    }

  }

     
  return (
    
    <div className={classes.root}>
      <Grid container spacing={4}>
         <Grid item xs={12} sm={3}></Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
        <h1 style={{color:"black"}}>{newUser ? 'Sign Up' : 'Log In'}</h1>
            
    
     <form onSubmit={handleSubmit}>
       <input type="checkbox" onChange={() =>setNewUser(!newUser)} name="newUser" id=""/>
       <label htmlFor="newUser">New User Sign Up</label>
       <br/>
      <br/>
      {newUser && <input type="text" name="name"    onBlur={handleBlur}placeholder="Name" />}
       <br/>
      <br/>
      <input variant="outlined" type="text" name="email" onBlur={handleBlur} placeholder="Write your Email Address" required />
      <br/>
      <br/>
      <input type="password" name="password" onBlur={handleBlur} placeholder="Write your Password" required/>
      <br/>
      <br/>
     
    <Button variant="contained" color="secondary" type="submit" value="Submit">{newUser ? 'Sign UP' : 'Sign In'}</Button>
      </form>
  <p style={{color:'red'}}>{user.error}</p>
  {user.success && <p style={{color:'green'}}>User {newUser ? 'Created': 'Logged In'} successfully</p>}
  {
        user.isSignIn ? <Button variant="contained" color="secondary" onClick={googleSignOut}>sign Out with Google</Button> :
        <Button variant="outlined"  onClick={googleSignIn}><img src={ google} style={{width:"5%"}} alt=""/> Continue with Google</Button>
        
      }
            
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}></Grid>
        
      </Grid>
    </div>
    
  );
}

export default Login;
