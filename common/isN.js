/**
 * 检测一个对象是否为空或为null、NaN等
 * @param {Objectj} obj 
 */
let checkNull=function(obj){
    if(typeof(obj)==undefined||obj==null||obj==''||obj==""||obj=='NaN')
    return true;
    else return false;
}
module.exports=checkNull;