import Axios from './Axios';

const service =new class TravelService {
    constructor() {
        this.endpoint = "service-travel/v1/travel";
    }

     create = async (form)=>{
       try {

        console.log("creacion de un viaje",form)
            
        const response = await Axios.post(this.endpoint+"/create",form)
        const result =  await response.data;
        return result   
       } catch (error) {
           throw new Error(error)
       }  
    }


    findById = async (id)=>{
        try {
 
         console.log("obtencion del viaje",id)
             
         const response = await Axios.get(this.endpoint+"/"+id)
         const result =  await response.data;
         return result   
        } catch (error) {
            throw new Error(error)
        }  
     }
}


export default service;