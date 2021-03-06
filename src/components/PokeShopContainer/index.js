import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { fetchPokemonStartAsync } from 'store/ducks/pokemon';

import PokeContainer from '../PokeContainer';
import PokeDetails from '../PokeDetails';

const PokeShopContainer = ({ match }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPokemonStartAsync(match.params.type));
    }, [match.params.type, dispatch]);

    return (
        <>
            <Route exact path="/:type/shop">
                <Redirect to={`${match.url}/pokemon`} />
            </Route>
            <Route exact path="/:type/shop/pokemon" component={PokeContainer} />
            <Route
                exact
                path="/:type/shop/pokemon/details/:id"
                component={PokeDetails}
            />
        </>
    );
};

export default PokeShopContainer;
