import React from "react";
import Illustration from "./Illustration";

const ThankYouCard = ({ rating }) => {
    return (
        <div className="thankyou-card">
            <Illustration />
            <div className="rating-result">You selected {rating} out of 5</div>
            <h1>Thank you!</h1>
            <p>
                We appreciate you taking the time to give a rating. If you ever
                need more support, don't hesitate to get in touch!
            </p>
        </div>
    );
};

export default ThankYouCard;
