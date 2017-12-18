/**
 * 获取get请求中的分页参数
 * @param {'express.req'} req 请求体req
 */
let getPage=function(req){
    if(!req.query) throw new Error('参数req不存在query对象')
    let obj = req.query;
    let page = {};
    page.skip = '';
    page.size = '';
for(var o in obj) {
    if(obj[o]!=''&&(o=='page'||o=='size')){
        page[o]=parseInt(obj[o]);
    }
  } 
  if(page.page!=null&&page.page!='')
    page.skip = parseInt(((page.page - 1) * page.size));
  return page;
}

module.exports=getPage;