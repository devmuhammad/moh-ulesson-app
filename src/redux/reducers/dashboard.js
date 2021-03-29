import {
    FETCH_DASH_DETAILS,DASHBOARD_DETAILS
    } from "../actions/actionTypes";


    const initialState = {
        orig_details: [],
        dash_details: [],
        
    };
    
    function getRandomColor(currCol) {
        const col = Math.floor(Math.random()* 3) + 1 
        const remArr = ['chemistry','biology','maths','physics'].filter(el => el !== currCol)
        return remArr[col-1]
      }


    const dashboardReducer = (state = initialState, action) => {
        switch (action.type) {
            case DASHBOARD_DETAILS:
                return {... state, 
                    orig_details: action.payload}
            case FETCH_DASH_DETAILS:
               const details = state.orig_details.map(el => {
                    const elName = el.name === 'Mathematics' ? 'maths' : el.name.charAt(0).toLowerCase()+el.name.substr(1)
                    el.color = elName
                    el.icon ="images/"+elName+".svg"
                    el.circle = getRandomColor(elName)
                 })
                 
                return { ...state,
                    dash_details: details };
                
            default:
                return state;
        }
    };
    export default dashboardReducer;