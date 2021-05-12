import Axios from './Axios';

const service =new class Authetication {
    constructor() {
        this.endpoint = "/v1/user/login";

    }

     autetincate = async (userName,password)=>{
       try {

        console.log("autentication con parametros")
            
        const response = await Axios.post(this.endpoint,{username:userName,password:password})
   //     console.log(response)
        const result =  await response.data;
        return result   
       } catch (error) {
           throw new Error(error)
       }  
    }

    autetincate = async ()=>{
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


export default service;