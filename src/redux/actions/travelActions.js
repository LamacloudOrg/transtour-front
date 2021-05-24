import * as actionTypes from './actionTypes';
import TodoService from '../../service/TravelService'
const loadTravels= travels => ({ type: actionTypes.LOAD_TRAVELS ,payload:travels});

export const travelAll = () => {
    return function (dispatch) {
        return TodoService.getAll().then(travels => {
            dispatch(loadTravels(travels));
        }).catch(e => console.log(e));
    };
}