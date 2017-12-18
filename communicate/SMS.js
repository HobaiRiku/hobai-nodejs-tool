
// 修改为您的apikey.可在官网（https://www.yunpian.com)登录后获取
/**
 * 发送短信的工具
 */
var https = require('https');
var qs = require('querystring');

let setting = {
  tpl_id:'',
  send_tpl_sms_uri:'/v2/sms/tpl_single_send.json',
  sms_host:'sms.yunpian.com',
  apikey:''
}
exports.setting=setting;
/**
 * 
 * @param {*} obj 短信发送设置
 */
exports.setup=function(obj){
  for(let one in obj ){
      for(let o in setting){
          if(o == one ) setting[o] =obj[one];
      }
  }
}
/**
 * 云片网短信平台发送工具
 * @param {*} mobile 手机
 * @param {*} tpl_value  短信模版 比如'#code#': code
 */
exports.sendSMS=function send_tpl_sms(mobile,tpl_value){
  let apikey = setting.apikey;
  // 指定发送的模板编号
    let tpl_id = setting.tpl_id;
  // 指定模板发送接口https地址
    let send_tpl_sms_uri = setting.send_tpl_sms_uri;
    let sms_host = setting.sms_host;
  //发送短信
  var post_data = {
    'apikey': apikey,
    'mobile':mobile,
    'tpl_id':tpl_id,
    'tpl_value':qs.stringify(tpl_value),
  };//这是需要提交的数据
  var content = qs.stringify(post_data);
  post(send_tpl_sms_uri,content,sms_host);
}
function post(uri,content,host){
  var options = {
    hostname: host,
    port: 443,
    path: uri,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  };
  var req = https.request(options, function (res) {
    // console.log('STATUS: ' + res.statusCode);
    // console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
    });
  });
  //console.log(content);
  req.write(content);

  req.end();
}


