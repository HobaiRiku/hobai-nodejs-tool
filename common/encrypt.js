/**
 * md5加密工具
 */
const md5 = require("md5");
let encrypt = function(password,isMD5){
    if(isMD5)return md5(password)
    return password;
}

module.exports=encrypt;