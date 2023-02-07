import React from "react";
import { Link } from "react-router-dom";

const BackArrow = ({linkTo}) => {
    return (
        <div className="backArrowBox">
        <Link className="" to={linkTo}>
            <img className="backArrow" src="arrow.svg" alt="Back" width="27" height="27"/>
        </Link>
        </div>
    )
}

export default BackArrow;