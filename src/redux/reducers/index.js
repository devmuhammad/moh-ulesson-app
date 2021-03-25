import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar'
// Import custom components
import dashboardReducer from './dashboard';



const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    loadingBar: loadingBarReducer,
});

export default rootReducer;