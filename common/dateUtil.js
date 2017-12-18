/**
 * 计算日期间隔
 */
exports.diff=function (date1, date2){ 
    var type1 = typeof date1, type2 = typeof date2; 
    if(type1 == 'string') 
    date1 = stringToTime(date1); 
    else if(date1.getTime) 
    date1 = date1.getTime(); 
    if(type2 == 'string') 
    date2 = stringToTime(date2); 
    else if(date2.getTime) 
    date2 = date2.getTime(); 
    return Math.abs(date1 - date2) / 1000;//结果是秒 
}

//字符串转成Time(dateDiff)所需方法 
function stringToTime(string){ 
    var f = string.split(' ', 2); 
    var d = (f[0] ? f[0] : '').split('-', 3); 
    var t = (f[1] ? f[1] : '').split(':', 3); 
    return (new Date( 
    parseInt(d[0], 10) || null, 
    (parseInt(d[1], 10) || 1)-1, 
    parseInt(d[2], 10) || null, 
    parseInt(t[0], 10) || null, 
    parseInt(t[1], 10) || null, 
    parseInt(t[2], 10) || null 
    )).getTime();

}


Date.prototype.pattern=function(fmt) {         
    var o = {         
    "M+" : this.getMonth()+1, //月份         
    "d+" : this.getDate(), //日         
    "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时         
    "H+" : this.getHours(), //小时         
    "m+" : this.getMinutes(), //分         
    "s+" : this.getSeconds(), //秒         
    "q+" : Math.floor((this.getMonth()+3)/3), //季度         
    "S" : this.getMilliseconds() //毫秒         
    };         
    var week = {         
    "0" : "/u65e5",         
    "1" : "/u4e00",         
    "2" : "/u4e8c",         
    "3" : "/u4e09",         
    "4" : "/u56db",         
    "5" : "/u4e94",         
    "6" : "/u516d"        
    };         
    if(/(y+)/.test(fmt)){         
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));         
    }         
    if(/(E+)/.test(fmt)){         
        fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "/u661f/u671f" : "/u5468") : "")+week[this.getDay()+""]);         
    }         
    for(var k in o){         
        if(new RegExp("("+ k +")").test(fmt)){         
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));         
        }         
    }         
    return fmt;         
}       


/**
 * 将字符串转换为时间对象
 */
exports.stringToTime=stringToTime;