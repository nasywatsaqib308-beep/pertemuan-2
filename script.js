let keranjang = ["apel", "jeruk", "mangga"];
console.log(keranjang);

keranjang.push("anggur");
console.log(keranjang);

keranjang.unshift("semangka");
console.log(keranjang);

keranjang.pop();
console.log(keranjang);

keranjang.shift();
console.log(keranjang);

for(let i = 0; i < keranjang.length; i++) {
    console.log(`keranjang: ${keranjang[i]}`);
}


const produk = [
    { nama: "Beras", harga: 50000 },
    { nama: "Minyak", harga: 20000 }
];

produk.push({ nama : "Gula", harga : 15000});
console.log(produk);

produk.pop();
console.log(produk);

console.table(produk);
function tambahProduk(nama, harga) {
    produk.push({ nama, harga });
}

function hitungTotal(){
    let total = 0;
    for (let i = 0; i < produk.length; i++) {
    total += produk[i].harga;
  }
  return total;
}

tambahProduk("Telur", 25000);
console.table(produk);
console.log("Total harga semua produk:", hitungTotal());

if (produk.length > 0) {
  console.log("Produk tersedia");
} else {
  console.log("Produk kosong");
}

let angkaHari = 3; 
switch (angkaHari) {
  case 0: console.log("Hari: Minggu"); break;
  case 1: console.log("Hari: Senin"); break;
  case 2: console.log("Hari: Selasa"); break;
  case 3: console.log("Hari: Rabu"); break;
  case 4: console.log("Hari: Kamis"); break;
  case 5: console.log("Hari: Jumat"); break;
  case 6: console.log("Hari: Sabtu"); break;
  default: console.log("Hari tidak valid");
}