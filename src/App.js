import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import DrinksDetails from './pages/DrinksDetails';
import DrinksInProgress from './pages/DrinksInProgress';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreDrinksByIngredients from './pages/ExploreDrinksByIngredients';
import FoodDetails from './pages/FoodDetails';
import FoodInProgress from './pages/FoodInProgress';
import ExploreFood from './pages/ExploreFood';
import ExploreFoodByIngredients from './pages/ExploreFoodByIngredients';
import FoodByOrigin from './pages/FoodByOrigin';
import DinksByOrigin from './pages/DrinksByOrigin';
import RecipesDone from './pages/RecipesDone';
import FavoriteRecipes from './pages/FavoriteRecipes';
import store from './redux/store';
import MealsList from './pages/MealsList';
import DrinksList from './pages/DrinksList';

function App() {
  return (
    <Provider store={ store }>
      <Switch>
        <Route exact path="/comidas" component={ MealsList } />
        <Route exact path="/bebidas" component={ DrinksList } />
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas/:idMeal" component={ FoodDetails } />
        <Route
          exact
          path="/comidas/:idMeal/in-progress"
          component={ FoodInProgress }
        />
        <Route exact path="/bebidas/:idDrink" component={ DrinksDetails } />
        <Route
          exact
          path="/bebidas/:idDrink/in-progress"
          component={ DrinksInProgress }
        />
        <Route exact path="/perfil" component={ Profile } />
        <Route exact path="/explorar" component={ Explore } />
        <Route exact path="/explorar/comidas" component={ ExploreFood } />
        <Route exact path="/explorar/bebidas" component={ ExploreDrinks } />
        <Route
          exact
          path="/explorar/comidas/ingredientes"
          component={ ExploreFoodByIngredients }
        />
        <Route
          exact
          path="/explorar/bebidas/ingredientes"
          component={ ExploreDrinksByIngredients }
        />
        <Route exact path="/explorar/comidas/area" component={ FoodByOrigin } />
        <Route exact path="/explorar/bebidas/area" component={ DinksByOrigin } />
        <Route exact path="/receitas-feitas" component={ RecipesDone } />
        <Route exact path="/receitas-favoritas" component={ FavoriteRecipes } />
      </Switch>
    </Provider>
  );
}

export default App;
