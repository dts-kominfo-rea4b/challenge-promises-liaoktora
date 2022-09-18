const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
function pertama(emosi) {
  return new Promise(resolve => {
    const theaterIXX = promiseTheaterIXX();
    const film1 = theaterIXX.then((data) => {
      const count = data.filter(item => item.hasil == emosi).length;
      resolve(count)
    });
  });
}

function kedua(emosi) {
  return new Promise(resolve => {
    const theaterIXX = promiseTheaterVCG();
    const film1 = theaterIXX.then((data) => {
      const count = data.filter(item => item.hasil == emosi).length;
      resolve(count)
    });
  });
}

function promiseOutput(emosi) {
  return new Promise(resolve => {
    const pertamaPromise = pertama(emosi);
    const keduaPromise = kedua(emosi);
    Promise.all([pertamaPromise, keduaPromise]).then(([hasil1, hasil2]) => {
      resolve(hasil1 + hasil2)
    })
  })
}

const output = promiseOutput('marah');
output.then(respon => console.log("Jumlah :", respon))

module.exports = {
  promiseOutput,
}
