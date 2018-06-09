import React from 'react';

const ListCard = (props) => {
    return (
        <div className="card">
            <div className="card-content">
                <h4>{props.title}</h4>
            </div>
        </div>
    );
}

export default ListCard;