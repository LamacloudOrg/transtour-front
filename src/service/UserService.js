import Axios from './Axios';

class UserService{

    constructor() {
        this.endpoint = "/service-user/v1/user";
    } 

    getAllDrivers= async ()=>{
  
        try {
            console.log("obteniendpo drivers")
            const response = await Axios.get(this.endpoint+"/find/drivers")
            const result =  await response.data;
            console.log(result);
            return result   
           } catch (error) {
               throw new Error(error)
           }  
    }

}

const service = new UserService();

export default service; 
