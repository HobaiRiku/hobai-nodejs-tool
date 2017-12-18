const https = require('https');
const http = require('http');
const isN = require('../common/isN');
function httpsReq(options,data){
    //console.log("debug:",data);
    let data_write='';
    if(isN(data)) data_write= data;
    //console.log('debug:',data_write);
    return new Promise((resolve, reject) =>{
        const req = https.request(options, (res) => {
            let bufs = [];
            res.on('data', (d) => {
                bufs.push(d);
            });
            res.on('end', () => {
                let buf
                let data_rec
                try {
                     buf = Buffer.concat(bufs);
                     data_rec = JSON.parse(buf.toString());
                     if(data_rec.error) {
                        let error = new Error(data_rec.error)
                        error.code=data_rec.code;
                        reject(error);
                    } 
                } catch (error) {
                    reject(error);
                }
                resolve(data_rec);
            });
            res.on('error', (e) => {
                reject(e);
            });

            }); 
        req.on('error', (e) => {
            reject(e);
            });
        req.write(data_write);
        req.end();    
     
    });

}
function httpReq(options,data){
    let data_write='';
    if(isN(data)) data_write=JSON.stringify(data);
    return new Promise((resolve, reject) =>{
        const req = http.request(options, (res) => {
            res.on('data', (d) => {
                bufs.push(d);
            });
            res.on('end', () => {
                let buf
                let data_rec
                try {
                     buf = Buffer.concat(bufs);
                     data_rec = JSON.parse(buf.toString());
                     if(data_rec.error) {
                        let error = new Error(data_rec.error)
                        error.code=data_rec.code;
                        reject(error);
                    } 
                } catch (error) {
                    reject(error);
                }
                resolve(data_rec);
            });
            });
        req.on('error', (e) => {
            reject(e);
            });
        req.write(data_write);
        req.end();    
    });

}

function Option(obj){
    let option = {
        hostname: '',
        port: 80,
        path: '',
        method: 'get',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    }
    for(let one in obj ){
        for(let o in option){
            if(o == one ) option[o] =obj[one];
        }
    }
    return option;
}

module.exports={'httpsReq': httpsReq,'httpReq': httpReq,'Option':Option}