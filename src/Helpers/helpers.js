import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export function formatAmount(amount) {
    return new Intl.NumberFormat('en-KE', {style:'decimal', maximumFractionDigits:2, minimumFractionDigits: 2}).format(amount)
}

export const getUIRating = (rating, maxRating = 5) => {
    return (
        <div className='text-orange-500'>
            {
                [...Array(rating)].map( _ => <FontAwesomeIcon key={Math.random().toString()} icon={faStar} />)
            }
            {
                rating < maxRating ? [...Array(maxRating - rating)].map( _ => <i key={Math.random().toString()} className="far fa-star"></i>) : null
            }
        </div>
    );
}