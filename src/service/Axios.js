import axios from 'axios'
import https from 'https'
import fs from 'fs'

const agent = new https.Agent({ 
    //key: fs.readFileSync('private.key'),
    //cert: fs.readFileSync('cert.crt'),    
    // This is necessary only if using the client certificate authentication.
    requestCert: true,
    rejectUnauthorized: true,
  
    // This is necessary only if the client uses the self-signed certificate.
    //ca: [fs.readFileSync('client-cert.pem')]
  });

const instance = axios.create({
    baseURL: 'https://209.126.85.7:8080/api',
    timeout: 5000,
    httpsAgent:agent,
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