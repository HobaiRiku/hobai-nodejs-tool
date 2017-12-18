const isN = require('../common/isN');

/**
 * 发送邮件的工具
 */
const nodemailer = require('nodemailer');
/**
 * 邮件工具配置
 */
let setting = {
    user: '',
    pass: '',
    host: '',
    port: 25,
    //是否开启ssl 连接
    secure: false, // secure:true for port 465, secure:false for port 587
    //设置等待问候响应时间长一点，
    greetingTimeout: 120000,
    //忽略tls加密检测，25端口不能开启tls,secure必须为false才生效
    ignoreTLS: true,
    fromName: '',
    fromEmail: '',
}

/**
 * 邮件发送设置
 * @param {*} obj 
 */
function setup(obj) {
    for (let one in obj) {
        for (let o in setting) {
            if (o == one) setting[o] = obj[one];
        }
    }
}
/**
 * 发送邮件工具
 * @param {String} email 发送至
 * @param {String} subject_context 邮件主题
 * @param {String} text 纯文本（若html文本存在，则被忽略）
 * @param {String} html html文本
 */
function sendEmail(email, subject_context, text, html) {
    let transporter = nodemailer.createTransport({
        host: setting.host,
        port: setting.port,
        secure: setting.secure,
        greetingTimeout: setting.greetingTimeout,
        ignoreTLS: setting.ignoreTLS,
        auth: {
            user: setting.user,
            pass: setting.pass
        }
    });
    let fromName = isN(setting.fromName) ? setting.user : setting.fromName;
    let fromEmail = isN(setting.fromEmail) ? setting.user : setting.fromEmail;
    let mailOptions = {
        from: '"' + fromName + '"<' + fromEmail + '>',
        to: email,
        subject: subject_context,
        text: text,
        html: html
    };
    //console.log(mailOptions);
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            throw error;
        }
    });
}

module.exports = {
    'sendEmail': sendEmail,
    'setup': setup,
    'setting': setting
}