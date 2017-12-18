
/**
 * 根据post请求参数组建一个json对象，排除''以及_id,用于建立实体
 * @param {'req.body'} obj  请求体req.body
 */
let getBody=function(obj){
    let body={};
for(var o in obj) {
    if(obj[o]!=''&&o!='_id'){
        body[o]=obj[o];
    }
  }
  return body;
}

module.exports=getBody;
