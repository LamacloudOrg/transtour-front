import axios from 'axios';
import https from 'https';
//import crt from './.certification'

const crt =`-----BEGIN CERTIFICATE-----
MIIDlzCCAn+gAwIBAgIEIlYP8TANBgkqhkiG9w0BAQsFADB8MQswCQYDVQQGEwJB 
UjEVMBMGA1UECBMMYnVlbm9zIGFpcmVzMRcwFQYDVQQHEw5ncmFsIGxhIG1hZHJp
ZDESMBAGA1UEChMJbGFtYWNsb3VkMRIwEAYDVQQLEwlsYW1hY2xvdWQxFTATBgNV
BAMTDHBhYmxvIG9jYW50bzAeFw0yMTA2MTAyMjMwMjhaFw0yMjA2MDUyMjMwMjha
MHwxCzAJBgNVBAYTAkFSMRUwEwYDVQQIEwxidWVub3MgYWlyZXMxFzAVBgNVBAcT
DmdyYWwgbGEgbWFkcmlkMRIwEAYDVQQKEwlsYW1hY2xvdWQxEjAQBgNVBAsTCWxh
bWFjbG91ZDEVMBMGA1UEAxMMcGFibG8gb2NhbnRvMIIBIjANBgkqhkiG9w0BAQEF
AAOCAQ8AMIIBCgKCAQEAkyJSsz0wH5sFFfMU9cMeLtOm09zOASyyggs9H7tfYMWL
8Pc/zOrZhLXc+fHYoR18UfCKwl2o+e5tNfF/yy7s6Uv6zCrYOWYAZJSPtSIvyKib
GXxLqjspgBuis6wBUCw5i6qs8GM5yFLtWT7XiEOj2wj7gXAz4/zElH3ybKVSRskn
DsGh7uakxKW1n9YZJSeA04ylDh1wWVv13T4PYRhuR8nUNqLEg66Z/BNYBH95R0Fk
Czh8qESXXGGO/+71ZfAoqnBpg5Nte7T2ZEmz9eNS8BSwCpe0LFaG9iXc+18xtiqE
vjo5m880k+wTXxAv7OWYInOdt9VPDWfdXyjCatrkJwIDAQABoyEwHzAdBgNVHQ4E
FgQUHcvC+hsElTqKlrl8hrzsupPU/HAwDQYJKoZIhvcNAQELBQADggEBACg+xTFh
3058XKt2oaFbn/US46kSgYwngSE6B0J/oTHG9RFejPaFIMV27ewXRQAXj/rnQgvS
vM2UPigL+zvkhEbzz5x8rhrc7zPXbR9jyYdQUZGNWBroJ6XHymiyst+vlV5tSiy2
TZPCx75WWSDMMMXwYULEOJR2nJzKhQ06DTaihkP3EOBZyioNwrb/NqSLdTOiSYFJ
cXTq69NcSPUGKv8TJCSYpfnNApdoBNVc8wte17PaxNgQ7/IwcJRX5LOD7UXgTMQ/
OvbcKKbgdv6AQy2+oEsEOwkuwtEpedpg0tV+esacSRGTbR8iqh8/FSfrzwHryp8x
63ywvMoNWKRhPH0=
-----END CERTIFICATE-----`
const agent = new https.Agent({ 
    //key: 'transtoru-api',
    // This is necessary only if using the client certificate authentication.
    requestCert: true,
    rejectUnauthorized: false,
    cert:crt
    
  });

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL+'/api',
    timeout: 20000,
    httpsAgent:agent,
    exposedHeaders: ['Content-Disposition'],
    headers: {
    'accept': 'application/json;q=0.9,text/plain',
    'Content-Type': 'application/json',
    'Cache-Control':'no-cache'
    }
  });


  instance.interceptors.request.use(request => {
    if (request.url === "/service-user/v1/user/oauth/token") return request;
    if (request.headers["Authorization"] === undefined){
      const token = localStorage.getItem("token") || null;
      request.headers["Authorization"]= 'Bearer '+token 
    }  
    return request
  })
  
  instance.interceptors.response.use(response => {
      if (response.status == "403"){
        localStorage.removeItem("token")
      }
      return response
  })

  export default instance