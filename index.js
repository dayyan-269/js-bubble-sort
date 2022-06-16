let { dataMapel } = require("./data"); // import data dari file data.js

const bubbleSort = (data) => {
  // membuat nested for untuk membandingkan 2 harga awal yang ada
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length - i - 1; j++) {
      if (data[j].harga > data[j + 1].harga) {
        let temp = data[j]; //  menyimpan nilai terbesar awal pada variabel "temp"

        //  menukar posisi dari harga terkecil ke terbesar
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
};

// menampilkan data acak
console.log("before", dataMapel);

//  memanggil fungsi bernama "bubbleSort" dan
//  memberikan variable dataMapel sebagai parameter
bubbleSort(dataMapel);

//menampilkan data yang terurut
console.log("after", dataMapel);
