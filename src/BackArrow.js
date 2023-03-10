import React from "react";
import { Link } from "react-router-dom";

const BackArrow = ({linkTo}) => {
    return (
        <div className="button-dark noSelect BackArrow">
        <Link className="backArrowLink" to={linkTo}>
            <img className="backArrowImg" src="arrow.svg" alt="Back" width="27" height="27"/>
        </Link>
        </div>
    )
}

export default BackArrow;