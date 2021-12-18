import * as actionTypes from './actionTypes';
import TravelService from '../../service/TravelService'
const loadTravels= travels => ({ type: actionTypes.LOAD_TRAVELS ,payload:travels});
const travelAprove= travel => ({ type: actionTypes.TRAVEL_APROVED ,payload:travel});
const travelCreation= travel => ({ type: actionTypes.TRAVEL_CREATION ,payload:travel});
const travelEdit= travel => ({ type: actionTypes.TRAVEL_EDITION ,payload:travel});


export const newTravel = (travel
    ) => {
    return  function (dispatch) {
        return TravelService.create(travel).then(status => {
            dispatch(travelCreation(travel));
        }).catch((e)=>{
            throw new Error(e)
        })
    };
}


export const travelEdition = (travel
    ) => {
    return  function (dispatch) {
        return TravelService.update(travel).then(status => {
            dispatch(travelEdit(travel));
        }).catch((e)=>{
            throw new Error(e)
        })
    };
}



export const aprove = (orderNumber) => {
    return  function (dispatch) {
        return TravelService.aprove(orderNumber).then(status => {
            dispatch(travelAprove(orderNumber));
        }).catch((e)=>{
            throw new Error(e)
        })
    };
}


export const travelAll = () => {
    return  function (dispatch) {
        return TravelService.getAll().then(travels => {
            dispatch(loadTravels(travels));
        }).catch((e)=>{
            throw new Error(e)
        });
    };
}
