
import * as types from './actionTypes'
import Notify from '../../constants/notify'
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import dashboard from '../../../pages/api/dashboard';


// Dashboard
export const fetchDashboardDetails  = () => async (dispatch) => {
    dispatch(showLoading())
    try{
        await dashboard.fetchAllDetails().then(async resp => {
            if (resp.data.status === 'success'){
                await dispatch({
                    type: types.DASHBOARD_DETAILS,
                    payload:resp.data.subjects
                })
                dispatch({
                    type: types.FETCH_DASH_DETAILS, 
                })
                dispatch(hideLoading())

            }
        })
    }catch (error){
        dispatch(hideLoading())
        return Notify.error('Error fetching details')
    }
}