import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8088',
    timeout: 1000,
    headers: {
    'accept': 'application/json;q=0.9,text/plain',
    'Content-Type': 'application/json',
//    'Access-Control-Allow-Origin':'*'
    }
  });


  /**instance.interceptors.request.use(request => {
    console.log('Starting Request', JSON.stringify(request, null, 2))
    return request
  })
  
  instance.interceptors.response.use(response => {
    console.log('Response:', JSON.stringify(response, null, 2))
    return response
  })

  **/

  export default instance