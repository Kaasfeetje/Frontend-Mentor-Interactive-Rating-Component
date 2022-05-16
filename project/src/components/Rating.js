import React from "react";
import RatingButton from "./RatingButton";

const Rating = ({ rating, setRating }) => {
    return (
        <div className="rating">
            <RatingButton
                selected={rating === 1}
                text={1}
                onClick={() => setRating(1)}
            />
            <RatingButton
                selected={rating === 2}
                text={2}
                onClick={() => setRating(2)}
            />
            <RatingButton
                selected={rating === 3}
                text={3}
                onClick={() => setRating(3)}
            />
            <RatingButton
                selected={rating === 4}
                text={4}
                onClick={() => setRating(4)}
            />
            <RatingButton
                selected={rating === 5}
                text={5}
                onClick={() => setRating(5)}
            />
        </div>
    );
};

export default Rating;
