import Axios from './Axios';

const service =new class TravelService {
    constructor() {
        this.endpoint = "service-voucher/v1/create";
    }

    create = async (form)=>{
        try {
 
         console.log("creacion del voucher",form)
             
         const response = await Axios.post(this.endpoint+"/create",form)
         const result =  await response.data;
         return result   
        } catch (error) {
            throw new Error(error)
        }  
     }
    
}