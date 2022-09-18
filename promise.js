const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
let tidakmarah = 0;
let marah = 0;

for (let i = 0; i < promiseTheaterIXX.length; i++) {
    if (hasilsetelahmenonton.hasil = marah) {marah++}
    else {tidakmarah++}
}
for (let i = 0; i < promiseTheaterVGC.length; i++) {
    if (hasilsetelahmenonton.hasil = marah) {marah++}
    else {tidakmarah++}
}

const promiseOutput = () => {
    return new Promise((resolve, reject) => {
        if (promiseTheaterIXX.length > 0 || promiseTheaterVGC.length >0) {
            resolve("marah" = marah && "tidak marah" = tidakmarah);
        } else {
            reject("emosi = 0");
        }
    });
};

module.exports = {
  promiseOutput,
};lengt0
