import React, { useMemo } from 'react'
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';

import { useLocation } from 'react-router-dom';
import queryString from "query-string";
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {


    const location = useLocation();
    const { q = '' } = queryString.parse(location.search); //" q = '' "quiere decir si es undefind lo ponga string vacio

    
    const [ formValues, handleInputChange ] = useForm({
        searchText: q,
    });
    
    const { searchText } = formValues;
    
    const heroesFiltered = useMemo(() => getHeroesByName( q ), [ q ]);

    const handleSearch = (e) => {
        e.preventDefault();

        history.push(`?q=${ searchText }`);


    }
    

    return (
        <div>
            <h2>Search Screen</h2>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4> Search Form </h4>
                    <hr/>

                    <form onSubmit={ handleSearch }>
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="find your hero"
                            autoComplete="off"
                            name="searchText"
                            onChange={ handleInputChange }
                            value={ searchText }
                        />

                        <button 
                            type="submit" 
                            className="btn mt-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4> Results </h4>
                    <hr/>

                    {
                        ( q === '' )
                            && <div className="alert alert-info">
                                Search a hero
                            </div>
                    }

                    {
                        ( q !== '' && heroesFiltered.length === 0 )
                            && <div className="alert alert-danger">
                                There is no a hero with { q }
                            </div>
                    }

                    {
                        heroesFiltered.map( hero => (
                            <HeroCard key={ hero.id } { ...hero } />
                        ) )
                    }

                </div>
            </div>
        </div>
    )
}
