// (function(){
// let localUrl = 'http://172.20.250.85:';
// let localPort = function(moduleName){
//   switch(moduleName){
//     case 'duankou1':
//       return '8083';
//     case 'duankou2':
//       return '8082'
//   }
// }
// })
//let localUrl = 'http://172.20.250.124:8082/admin/'; //bendi
let locaprname = 'admin';
// let localUrl = 'http://172.20.248.168:8080/admin/';//fuwuqi
// let localUrl = 'http://172.20.250.126:8082/admin/';//ceshi
//let localUrl = 'http://172.20.250.160:8082/admin/'; //bendi
// let localUrl = 'http://172.20.250.1:8082/admin/'; //zhiHongLin
// let localUrl = 'http://172.20.248.93:8082/admin/';//zhouchun
let localUrl = 'http://172.20.250.16:8082/admin/';
//let localUrl = "http://172.20.248.119:8082/admin/";
//let localUrl = "http://localhost:8080/admin/";
let localportone = '8083';
let localportTwo = '8082';
let localPort = function(moduleName){
  switch(moduleName){
    case 'duankou1':
      return '8083';
    case 'duankou2':
      return '8082'
  }
}
export default{
  localUrl,
  localPort
}
