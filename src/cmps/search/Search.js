import React, {useState} from 'react';
import axios from 'axios';

import DrinkDetails from './DrinkDetails';

const INITIAL_STATE = {
    term : '',
}

const Search = () => {
    const [values, setValues] = useState(INITIAL_STATE);
    const [responseData, setResponseData] = useState ({});

    const handleChange = (event) => {
        const {name, value} = event.target; 
        setValues((prevState) => ({...prevState, [name]: value}));
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        runSearch(values.term)
    };

    const runSearch = (term) => {
        axios
        .get(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${term}`)
        .then((response) =>{
            setResponseData( response.data)
        })
        .catch((err) => {
            console.error(err)
        })
        .finally(() => {
            setValues(INITIAL_STATE)
        });
    }

    return (
        <>
        <form onSubmit={handleSubmit} className="search"> 
            <input
            onChange={handleChange}
             type="text"
             name="term"
             className="search-input"
             placeholder="search..."
             value={values.term}
            />
        </form>

        {responseData.drinks &&
            responseData.drinks.slice(0, 7).map((drink) => <DrinkDetails
             key={drink.idDrink} drink={drink}/>)
        }
        </>
    )
}

export default Search
