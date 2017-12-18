const index = require('./index');
let setting={
    user:'park@reachxm.com',
    pass:'reach2008',
    host:'smtp.reachxm.com',
    port:25,
    //是否开启ssl 连接
    secure:false,// secure:true for port 465, secure:false for port 587
    //设置等待问候响应时间长一点，
    greetingTimeout:120000,
     //忽略tls加密检测，25端口不能开启tls,secure必须为false才生效
    ignoreTLS:true, 
    fromName:'park000000',
}
index.communicate.MAIL.setup(setting);
index.communicate.MAIL.sendEmail('me@hobairiku.site','测试邮件','测试','<h1>这是一个H1标题</h1>');
console.log(new index.communicate.request.Option);