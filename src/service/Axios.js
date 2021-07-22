import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://209.126.85.7:8080/api',
    timeout: 5000,
    headers: {
    'accept': 'application/json;q=0.9,text/plain',
    'Content-Type': 'application/json',
    //xsrfCookieName: 'XSRF-TOKEN', // default
    // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
    //xsrfHeaderName: 'X-XSRF-TOKEN', // default
    //'Allow-Origin':'http://localhost'
    }
  });


  instance.interceptors.request.use(request => {
 //   Descomentar esta linea para el request  
 //   console.log('Starting Request', JSON.stringify(request, null, 2))
 //     const token = localStorage.getItem("token") || "";
 //     request.headers.authorization= 'Bearer '+token  
      return request
  })
  
  instance.interceptors.response.use(response => {
 //   Descomentar esta linea para el response
//    console.log('Response:', JSON.stringify(response, null, 2))
      return response
  })

  export default instance