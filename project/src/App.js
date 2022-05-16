import React, { useState } from "react";
import RatingCard from "./components/RatingCard";
import ThankYouCard from "./components/ThankYouCard";

const App = () => {
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [rating, setRating] = useState(null);

    return (
        <main>
            {hasSubmitted ? (
                <ThankYouCard rating={rating} />
            ) : (
                <RatingCard
                    onSubmit={(_rating) => {
                        setRating(_rating);
                        setHasSubmitted(true);
                    }}
                />
            )}
            <div class="attribution">
                Challenge by{" "}
                <a
                    href="https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI/hub/interactive-rating-component-SJ7wa-lDc"
                    target="_blank"
                    rel="noreferrer"
                >
                    Frontend Mentor
                </a>
                . Coded by{" "}
                <a
                    href="https://github.com/Kaasfeetje"
                    target="_blank"
                    rel="noreferrer"
                >
                    Kaasfeetje
                </a>
                .
            </div>
        </main>
    );
};

export default App;
