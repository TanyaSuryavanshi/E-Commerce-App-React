import React from "react";
import "./StarRating.css";
import PropTypes from "prop-types";
import empty_star_icon from '../../assets/empty-star.svg';
import star_half_icon from '../../assets/star-half.svg';
import full_star_icon from '../../assets/full-star.svg';

const StarRating = ({ rating, maxStars = 5 }) => {
    const stars = [];
    for (let i = 0; i < maxStars; i++) {
        if (rating >= i + 1) {
            stars.push(<span key={i} className="star"><img src={full_star_icon} alt="star icon" /></span>);
        } else if (rating > i && rating < i + 1) {
            stars.push(<span key={i} className="star"><img src={star_half_icon} alt="star half icon" /></span>);
        } else {
            stars.push(<span key={i} className="star"><img src={empty_star_icon} alt="star icon" /></span>);
        }
    }

    return <div className="star-rating">{stars}</div>;
};

StarRating.propTypes = {
    rating: PropTypes.number.isRequired,
    maxStars: PropTypes.number,
};

export default StarRating