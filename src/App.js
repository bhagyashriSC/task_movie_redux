import React from 'react';
import { withRouter } from 'react-router';
import { Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import combineReducers from "./reducers/index";
import { PersistGate } from 'redux-persist/integration/react';
import PrivateRoute from './PrivateRoute';
import MovieDetailContainer from './pages/MovieDetail/container/MovieDetailContainer';
import MovieListContainer from './pages/MovieList/container/MovieListContainer';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';



const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, combineReducers)
const composeEnhancers = compose;

// let store = createStore(persistedReducer, 
//   applyMiddleware(thunk)
// );

let store = createStore(persistedReducer, composeEnhancers(
  applyMiddleware(thunk)
));

let persistor = persistStore(store);


class App extends React.Component {

  render() {
    return (
      <div className='appContainer'>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Header />
            <div className='routerContent'>
               <Switch>
              <Route path="/movieDetail/:id" component={MovieDetailContainer} /> 
              <PrivateRoute component={MovieListContainer} path="/home"  />
            </Switch>
            </div>
            <Footer />
          </PersistGate>
        </Provider>
      </div>
    );
  }
}

export default withRouter(App);
