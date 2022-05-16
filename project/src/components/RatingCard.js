import React, { useState } from "react";
import Rating from "./Rating";
import StarIcon from "./StarIcon";

const RatingCard = ({ onSubmit }) => {
    const [rating, setRating] = useState(null);

    return (
        <div className="rating-card">
            <div className="star-icon">
                <StarIcon />
            </div>
            <h1>How did we do?</h1>
            <p>
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
            </p>
            <Rating rating={rating} setRating={setRating} />
            <button className="submit-btn" onClick={() => onSubmit(rating)}>
                Submit
            </button>
        </div>
    );
};

export default RatingCard;
