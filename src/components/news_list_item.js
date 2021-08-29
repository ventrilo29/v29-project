import React from 'react';

const FoodItem = ({panganan}) => {
    return (
        <div className = "food_item">
            <h3>
                {panganan.food}
            </h3>
            <div>
                {panganan.price}
            </div>
        </div>
    )
}

export default FoodItem;