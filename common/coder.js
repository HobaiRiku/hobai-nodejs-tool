/**
 * 获取随机数字和字母组合随机码
* @param {Number} size 随机码大小
 * @returns {String}
 */
function getNumAndRoman(size){
  let code = "";
  let codeLength = size;
  let random = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
    'S','T','U','V','W','X','Y','Z'];
  for(let i = 0; i < codeLength; i++) {
    let index = Math.floor(Math.random()*36);
    code += random[index];
  }
  return code;
}

/**
 * 获取随机数字组合随机码
 * @param {Number} size 随机码大小
 * @returns {String}
 */
function getNum(size){
  let code = "";
  let codeLength = size;
  let random = [0,1,2,3,4,5,6,7,8,9];
  for(let i = 0; i < codeLength; i++) {
    let index = Math.floor(Math.random()*10);
    code += random[index];
  }
  return code;
}


/**
 * 获取随机字母组合随机码
* @param {Number} size 随机码大小
 * @returns {String}
 */
function getRoman(size){
  let code = "";
  let codeLength = size;
  let random = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
    'S','T','U','V','W','X','Y','Z'];
  for(let i = 0; i < codeLength; i++) {
    let index = Math.floor(Math.random()*26);
    code += random[index];
  }
  return code;
}

function getHEXcode(size){
  let code = "";
  let codeLength = size;
  let random = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
  for(let i = 0; i < codeLength; i++) {
    let index = Math.floor(Math.random()*16);
    code += random[index];
  }
  return code;
}

module.exports={getNumAndRoman:getNumAndRoman,getNum:getNum,getRoman:getRoman,getHEXcode:getHEXcode};
