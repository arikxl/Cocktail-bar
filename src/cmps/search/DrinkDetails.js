import React from 'react'

const DrinkDetails = ({drink}) => {
    return (
        <div className="list-item">
            <div>{drink.strDrink}</div>

            <div>
                <img style ={{width: '100px', height: '100px'}}
                 src={drink.strDrinkThumb} alt="{drink.strDrink}" />
            </div>
            
        </div>
    )
}

export default DrinkDetails
