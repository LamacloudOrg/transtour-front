import * as actionTypes from './actionTypes';
import TodoService from '../../service/TravelService'
const loadTravels= travels => ({ type: actionTypes.LOAD_TRAVELS ,payload:travels});
const travelAprove= travel => ({ type: actionTypes.TRAVEL_APROVED ,payload:travel});
const travelCreation= travel => ({ type: actionTypes.TRAVEL_CREATION ,payload:travel});
const newNumber= orderNumber => ({ type: actionTypes.TRAVEL_ORDER_NUMBER ,payload:orderNumber});


export const newTravel = (travel) => {
    return  function (dispatch) {
        return TodoService.create(travel).then(status => {
            dispatch(travelCreation(travel));
        });
    };
}

export const generateNumber = () => {
    return  function (dispatch) {
        return TodoService.getOrderNumber().then(orderNumber => {
            dispatch(newNumber(orderNumber));
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


export const travelAll = () => {
    return  function (dispatch) {
        return TodoService.getAll().then(travels => {
            dispatch(loadTravels(travels));
        }).catch(e => console.log(e));
    };
}
