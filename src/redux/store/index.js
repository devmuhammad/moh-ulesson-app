import { createStore, applyMiddleware } from 'redux';
// middlewares
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { save, load } from 'redux-localstorage-simple';
// Import custom components
import rootReducer from '../reducers';


const createStoreWithMiddleware = composeWithDevTools(
    applyMiddleware(
      thunk,
      save({
        states: ['dashboard',],
        namespace: 'uLesson-app',
        disableWarnings: true

      }), // Saving done here
    ),
  )(createStore);
  
  /*
      Loading from LocalStorage happens during
      creation of the Redux store.
  */
  export const store = createStoreWithMiddleware(
    rootReducer,
    load({
      states: ['dashboard',],
      namespace: 'uLesson-app',
      disableWarnings: true
    }), // Loading done here
  );
  
  export const persistor = persistStore(store);
  
//   if (['dev', 'local', 'staging'].includes(environment.name)) {
    if (typeof window !== 'undefined') {
    window.store = store;
  }
  
  export default store;