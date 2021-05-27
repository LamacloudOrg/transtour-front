
import * as actionTypes from './actionTypes';
import VoucherService from '../../service/VoucerService'

const load= vouchers => ({ type: actionTypes.LOAD_VOUCHERS ,payload:vouchers});
const download= () => ({ type: actionTypes.DOWNLOAD_VOUCHER});


export const loadVouchers = () => {
    return  function (dispatch) {
        return VoucherService.list().then(vouchers => {
            dispatch(load(vouchers));
        });
    };
}

export const downloadVoucher = (voucherId) => {
    return  function (dispatch) {
        return VoucherService.download(voucherId).then(status => {
            dispatch(download());
        });
    };
}