import React from 'react'

const DrinkPreview = ({drink}) => {
    return (
        <div className="list-item">
            <p>{drink.strDrink}</p>
            <div>
                <img style ={{width: '100px', height: '100px'}}
                 src={drink.strDrinkThumb} alt="{drink.strDrink}" />
            </div>
            
        </div>
    )
}

export default DrinkPreview
