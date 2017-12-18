
const isN = require('../common/isN');
/**
 * 生成get请求带入参数后的的路径,排除NAN,NULL,'',undefind
 * @param {String} path 
 * @param {'Object'} parameters 
 */
let getPath = function(path,parameters){
    let result=path+'?';
    for(let name in parameters){
        if(!isN (parameters[name])) result+=name+'='+parameters[name]+'&';
    }
    return result;
}
module.exports=getPath;