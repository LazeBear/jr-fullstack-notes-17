const msg = 'secret message';

function getMsg() {
  return msg;
}

console.log(__dirname, __filename);

module.exports = { getMsg };
// exports.getMsg = getMsg'
// exports, __dirname, __filename, require
//  { getMsg: getMsg }

// const obj = { exports: {} };

// (function (module) {
//   let msg = 'secret message';

//   // msg = '123'

//   function getMsg() {
//     return msg;
//   }
//   module.exports = { getMsg };
// })(obj);

// obj.exports.getMsg();
