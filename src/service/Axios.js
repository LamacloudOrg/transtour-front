import axios from 'axios'

const instance = axios.create({
     baseURL: 'http://192.168.0.114:36089/',
    //baseURL: 'http://192.168.0.114:8080/api',
    timeout: 2000,
    headers: {
    'accept': 'application/json;q=0.9,text/plain',
    'Content-Type': 'application/json',
//   'Access-Control-Allow-Origin':'*'
    }
  });


  instance.interceptors.request.use(request => {
 //   Descomentar esta linea para el request  
 //   console.log('Starting Request', JSON.stringify(request, null, 2))
      const token = localStorage.getItem("token") || "";
      request.headers.authorization= 'Bearer '+token  
      return request
  })
  
  instance.interceptors.response.use(response => {
 //   Descomentar esta linea para el response
//    console.log('Response:', JSON.stringify(response, null, 2))
      return response
  })

  export default instance