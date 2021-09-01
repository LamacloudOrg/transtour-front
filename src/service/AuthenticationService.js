import Axios from './Axios';

class Authetication {
    constructor() {
        this.endpoint = "v1/user";
    }

     autetincate = async (form)=>{
       try {
        let data = JSON.stringify(form)
        console.log("autentication con parametros",data)    
        const response = await Axios.post(this.endpoint+"/oauth/token",data)
   //     console.log(response)
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
 //        console.log(response)
         const result =  await response.data;
         return result   
        } catch (error) {
            throw new Error(error)
        } 
        
    }
}

const service = new Authetication();

export default service; 
