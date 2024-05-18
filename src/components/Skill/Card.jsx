import React from 'react';
import './Card.css';

function Card({ cardColor, cardIcon, cardName }) {
    return (
        <div className="card" style={{ '--card-clr': cardColor }}>
            <div className="card_box">
                <div className="card_icon">
                    <div className="card_icon-box">{cardIcon}</div>
                </div>
                <div className="card_content">
                    <h3>{cardName}</h3>
                </div>
            </div>
        </div>
    );
}

export default Card;
