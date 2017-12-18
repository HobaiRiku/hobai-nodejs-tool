
const isN = require('../common/isN');
let ignore = ['_id']
let exclude =['page','size'];
exports.ignore=ignore;
exports.exclude=exclude;
/**
 * 获取get请求中的参数,生成用于数据库查询条件，包含模糊化，默认排除_id模糊
 * @param {'express.req'} req  请求体req
 */
exports.get=function(req){
    if(!req.query) throw new Error('参数req不存在query对象')
    let obj = req.query;
    let query={}; 
for(var o in obj) {
    if(!isN(obj[o])&&!exclude.includes(o)){
        if(!ignore.includes(o)){//排除_id模糊化
        query[o]=eval("/"+obj[o]+"/");//模糊化
        }else query[o]=obj[o];
    }
  }
  return query;
}




