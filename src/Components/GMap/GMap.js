import React from 'react';
import GoogleMapReact from 'google-map-react';
import RoomIcon from '@material-ui/icons/Room';


const GMap = (props) => {
    const maker = props.maker;
    console.log(maker)
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyCkZZnf1FgwW2GKfu1Bx5ON4d92k-KLZ3Q" }} 
          defaultCenter={maker}
          defaultZoom={10}
        >
          
          {/* <MDBIcon className="fa-3x" style={{color:'red'}} icon="map-marker" position={marker} /> */}
          <RoomIcon className="fa-3x" style={{color:'red'}}  position={maker}></RoomIcon>
        </GoogleMapReact>
      </div>
    );
};

export default GMap;