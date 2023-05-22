import Axios from './Axios';

class CompanyService{

    constructor() {
        this.endpoint = "/service-user/v1/company";
    } 

    getAllCompany= async ()=>{
  
        try {
            console.log("obteniendpo compañias")
            //const response = await Axios.get(this.endpoint)
            //const result =  await response.data;

            //return result
            
            return [{id:1,fullName:"tarjeta naranja",nickName:"naranja"}]
           } catch (error) {
               throw new Error(error)
           }  
    }

}

const service = new CompanyService();

export default service; 
