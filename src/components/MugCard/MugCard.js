//sets up the reusable FriendCard component
import React from "react";
import "./MugCard.css";

//pass the image into each card so all 12 are rendered
const MugCard = props => (
  <div className="card"  onClick={props.imageClick}>
    <div className="img-container">
      <img className="card-img-top"  alt={props.id} width="100px"  src={require("../../images/" + props.image)} />
    </div>
  </div>
);

export default MugCard;