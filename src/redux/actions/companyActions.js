import * as actionTypes from './actionTypes';
import CompanyService from '../../service/CompanyService'
const loadCopany= (companies) => ({ type: actionTypes.LOAD_COMPANY ,payload:companies});


export const getAllCompany = () => {
    return  function (dispatch) {
        return CompanyService.getAllCompany().then(companies => {
            dispatch(loadCopany(companies));
        }).catch((e)=> console.log("no se pudo cargar"))
    };
}