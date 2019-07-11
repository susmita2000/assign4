import React from "react"
import './demo2.css';
import {Button} from 'reactstrap';
function ContactCard(props){
	return(
	<div className="contact-card">
	<h3>{props.name}</h3>
	<center><img src={props.imgUrl}/></center>
	<p>Rating:{props.plot}</p>
	<center><Button color="info">secondary</Button></center>
	</div>
	)
}
export default ContactCard;