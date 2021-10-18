import * as actionTypes from '../actions/actionTypes';
import {parserNumber}  from '../../helper/OrderNumberHelper'

var initialState = {
    travels: [],
    newCreated:false,
    orderNumber:"0000",
    isLoading:true
}

const travelReducer = (state = initialState, action) => {
    switch (action.type) {


        case actionTypes.TRAVEL_ORDER_NUMBER: {
            return { ...state, 
                orderNumber: parserNumber(action.payload)
            };
        }

        case actionTypes.CLEAN_ORDER_NUMBER:{
            return { ...state, 
                orderNumber: action.payload
            };
        }

        case actionTypes.TRAVEL_CREATION: {
            return state;
        }

        case actionTypes.TRAVEL_APROVED: {

            console.log("actual state TRAVEL_APROVED",state)

            let pos=-1;
            let travel = state.travels.content.filter(function(item, index) { pos = index; return item.orderNumber === action.payload; });
            travel["status"]="aproved"
            let travels =[...state.travels.content,travel]
            return { ...state, 
                travels: travels
            };
        }

        case actionTypes.LOAD_TRAVELS: {
            return { ...state, 
                travels: action.payload
            };
        }


        default:
            return state;

    }
}

export default travelReducer;
