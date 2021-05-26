import * as actionTypes from './actionTypes';
import TodoService from '../../service/TravelService'
const loadTravels= travels => ({ type: actionTypes.LOAD_TRAVELS ,payload:travels});
const travelAprove= travel => ({ type: actionTypes.TRAVEL_APROVED ,payload:travel});

export const travelAll = () => {
    return  function (dispatch) {
        return TodoService.getAll().then(travels => {
            dispatch(loadTravels(travels));
        }).catch(e => console.log(e));
    };
}

export const aprove = (orderNumber) => {
    return  function (dispatch) {
        return TodoService.aprove(orderNumber).then(status => {
            dispatch(travelAprove(orderNumber));
        }).catch(e => console.log(e));
    };
}
