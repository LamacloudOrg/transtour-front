import * as actionTypes from './actionTypes';
import UserService from '../../service/UserService'
const loadDrivers= drivers => ({ type: actionTypes.LOAD_TRAVELS ,payload:drivers});


export const getAllDrivers = () => {
    return  function (dispatch) {
        return UserService.getAllDrivers().then(drivers => {
            dispatch(loadDrivers(drivers));
        });
    };
}