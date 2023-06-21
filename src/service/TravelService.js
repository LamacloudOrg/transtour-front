import Axios from './Axios';

class TravelService {
    constructor() {
        //this.endpoint = "service-travel/v1/travel";
        this.endpoint = "/api/v1";
    }

     create = async (form)=>{
       try {

        console.log("creacion de un viaje",form)
            
        const response = await Axios.post(this.endpoint+"/travel",form)
        const result =  await response.data;
        return result   
       } catch (error) {
           console.log("no se pudo crear el viaje",error)
           throw new Error(error)
       }  
    }

    update = async (form)=>{
        try {
 
         console.log("creacion de un viaje",form)
             
         const response = await Axios.put(this.endpoint+"/update",form)
         const result =  await response.data;
         return result   
        } catch (error) {
            console.log("no se pudo crear el viaje",error)
            throw new Error(error)
        }  
     }

    aprove = async (travel)=>{
        try {
 
         console.log("aprbacion del viaje",travel)
         const response = await Axios.post(this.endpoint+"/travel/"+travel+"/aprove",travel)
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
        const params ={ page: page_,size:100} 

        try {
 
         console.log("get all travels")
             
         const response = await Axios.get(this.endpoint+"/travel",params)
         const result =  await response.data;
         return result !=undefined ? result.data.content:[]; 
        } catch (error) {
            console.log("obtener travels",error);
            throw new Error(error)
        }  
     }
}

const service = new TravelService();

export default service; 

