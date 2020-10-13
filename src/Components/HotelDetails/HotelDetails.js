import React from 'react';
import star from'../../Images/Icon/star_1_.png'



const HotelDetails = (props) => {
    const {title, feature, details, rating, price, image} = props.data;
    return (
        <div>
            <div style={{paddingTop:"5px"}}>
             <img src={image} height="160" width="230" style={{borderRadius:'10px'}}alt=""/>
            </div>
            <b>{title}</b> <br/>
                    <small  className="text-muted">{feature}</small> <br/>
                    <small  className="text-muted">{details}</small> <br/>
                    <span>
                        <img src={star} height="10" alt="" />&nbsp;
                        <small>{rating}</small> 
                    </span> <br/>
                    <span><b>${price}/</b></span><span className="text-muted">night</span>
                    <br/>
                    <br/>
                   
        </div>
    );
};

export default HotelDetails;