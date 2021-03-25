
import * as types from './actionTypes'
import Notify from '../../constants/notify'
import { showLoading, hideLoading } from 'react-redux-loading-bar';


// Dashboard
export const fetchUserReport = userId => ({
    type: types.FETCH_REPORT_BY_USER,
    userId
})



// USERS
export const fetchUsersBegin = () => ({
    type: types.FETCH_USERS_BEGIN
});

export const receiveUsers = users => ({
    type: types.RECEIVE_USERS,
    users
})

export const getAllUsers = () => dispatch => {
    dispatch(fetchUsersBegin());
    // users.getUsers(users => {
    //     dispatch(receiveUsers(users));
    //     return users;
    // })
}
export const fetchSingleUser = userId => ({
    type: types.FETCH_SINGLE_USER,
    userId
})

export const addUser = (user) => (dispatch) => {
    // if (){
    //     dispatch({
    //         type: types.ADD_USER,
    //         user
    //     })
    // dispatch(getAllUsers())
    // Notify.success("User Added Successfully")
    // }else Notify.error("Unable to add user")
        
}

export const deleteUser = user_id => (dispatch) => {
    // if (users.deleteUser(user) == "success"){
    // dispatch({
    //     type: types.REMOVE_USER,
    //     user_id
    // })
    // Notify.success("User Deleted !")
    // }else Notify.error("Unable to delete user")
};