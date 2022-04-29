import React from 'react';

export function formatAmount(amount) {
    return new Intl.NumberFormat('en-KE', {style:'decimal', maximumFractionDigits:2, minimumFractionDigits: 2}).format(amount)
}

export const getUIRating = (rating, maxRating = 5) => {
    return (
        <div>
            {
                [...Array(rating)].map( _ => <i key={Math.random().toString()} className="fas fa-star"></i>)
            }
            {
                rating < maxRating ? [...Array(maxRating - rating)].map( _ => <i key={Math.random().toString()} className="far fa-star"></i>) : null
            }
        </div>
    );
}