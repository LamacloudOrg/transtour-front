import Axios from './Axios';

const service =new class TravelService {
    constructor() {
        this.endpoint = "service-travel/v1/travel";
       // this.endpoint = "v1/travel";
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

    aprove = async (travel)=>{
        try {
 
         console.log("aprbacion del viaje",travel)
         const response = await Axios.post(this.endpoint+"/aprove",travel)
         const result =  await response.data;
         return result   
        } catch (error) {
            throw new Error(error)
        }  
    }

    reject = async (travel)=>{
        try {
            console.log("desprobacion del viaje",travel)
            const response = await Axios.post(this.endpoint+"/reject",travel)
            const result =  await response.data;
            return result   
        }catch (error) {
            throw new Error(error)
        }  
    }

    getOrderNumber = async ()=>{
        try {
            console.log("getOrderNumber")
            const response = await Axios.get(this.endpoint+"/orederNumber")
            const result =  await response.data;
            return result   
        }catch (error) {
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


    getAll = async (page)=>{

        const page_ = page || 0;

        const params ={ params: { page: page_,size:20} }

        try {
 
         console.log("get all travels")
             
         const response = await Axios.get(this.endpoint+"/list",params)
         const result =  await response.data;
         return result   
        } catch (error) {
            throw new Error(error)
        }  
     }
}


export default service;