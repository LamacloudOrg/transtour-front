import Axios from './Axios';

const service =new class TravelService {
    constructor() {
        this.endpoint = "service-voucher/v1/voucher";
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


    download = async (voucherId)=>{

        try{
            console.log("dowloand voucher",voucherId)
             
            const response = await Axios.get(this.endpoint+"/downloadPdf/"+voucherId, {
                responseType: 'blob',
              })
            const file =  await response.data;


            const url = window.URL.createObjectURL(
                new Blob([file]),
            );

            const link = document.createElement('a');
            link.href = url;
            link.setAttribute(
                'download',
                `voucher.pdf`,
            );
        
            // Append to html link element page
            document.body.appendChild(link);
        
            // Start download
            link.click();
        
            // Clean up and remove the link
            link.parentNode.removeChild(link);

            console.log("file downloaded")
        }catch(e){
            throw new Error(e)
        }

    }

    list = async (page)=>{
        console.log("get all vouchers")

        const page_ = page || 0;

        const params ={ params: { page: page_,size:4} }
            
        try {
         const response = await Axios.get(this.endpoint+"/list",params)
         const result =  await response.data;
         return result
         console.log("lista de vouchers",result);
         
        } catch (error) {
            throw new Error(error)
        }  
    }
    
}

export default service;