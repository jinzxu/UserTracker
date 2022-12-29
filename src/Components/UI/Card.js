import React from "react";
import CardStyles from "./Card.module.css"
const Card = props => {
    return (
        <div className={`${props.className} ${CardStyles.card}`}>
            {props.children}
        </div >
    )
}
export default Card;