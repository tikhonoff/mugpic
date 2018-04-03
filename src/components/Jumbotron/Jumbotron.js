//sets up the reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";

import Image from '../../images/work.jpg'; 

const styles = {
    paperContainer: {
		backgroundImage: `url(${Image})`,
		backgroundSize :'100%',
		filter: 'grayscale(100%)',
    }
};


const Jumbotron = (props) => (


	
 <div className="jumbotron .container-fluid " 	style={styles.paperContainer} >
	<div className="container">
		<div className="row justify-content-center h-100">
		{props.children}
		</div>
    </div>
</div>
);


 

export default Jumbotron;