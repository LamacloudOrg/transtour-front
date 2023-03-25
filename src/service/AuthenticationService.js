import Axios from './Axios';

class Authetication {
    constructor() {
        this.endpoint = "/api/v1";
    }

     autetincate = async (form)=>{
       try {
        const response = await Axios.post(this.endpoint+"/oauth/authenticate",form)
        const result =  await response.data;
        return result   
       } catch (error) {
           throw new Error(error)
       }  
    }

    autetincate_ = async ()=>{
        try {

         console.log("autentication sin parametros")
             
         const response = await Axios.post(this.endpoint)
         const result =  await response.data;
         return result   
        } catch (error) {
            throw new Error(error)
        } 
        
    }
}

const service = new Authetication();

export default service; 
