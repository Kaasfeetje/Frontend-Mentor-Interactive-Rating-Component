import React from "react";

const RatingButton = ({ selected, text, onClick }) => {
    return (
        <button
            className={`rating-btn ${selected ? "selected" : ""}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default RatingButton;
