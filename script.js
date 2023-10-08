// Nama = Billy Dwi Prakoso
// Class B Morning Group 9 - Web Development

// if
let kuali = "memercik minyak goreng menuju muka saya";

if (kuali == "memercik minyak goreng menuju muka saya") {
  console.log("menjauh, lalu memakai sutil sebagai tameng");
}

// else
let saya = "kena percikan minyak goreng";

if (saya == "tidak kena percikan minyak goreng") {
  console.log("lanjut menggoreng");
} else {
  console.log("ambil uang untuk beli makanan di luar");
}

// nested if
let uang = 10000;

if (uang == 10000) {
  if (uang > 9000) {
    console.log("uang saya lebih dari 9000");
  } else {
    console.log("uang saya ga lebih dari 9000");
  }
}

// switch case
let beli = "ketoprak";

switch (beli) {
  case "lasagna":
    console.log("udah lama nih ga makan lasagna");
    break;
  case "ketoprak":
    console.log("sepertinya enak kalau beli ketoprak");
    break;
  default:
    console.log("ga jadi beli, deh");
}

// for statement
for (kerupuk = 1; kerupuk <= 5; kerupuk++) {
  console.log("aku makan " + kerupuk + " kerupuk ketoprak");
}

// while
let ketoprak = 1;

while (ketoprak < 7) {
  console.log("suapan ke-" + ketoprak + " ketoprak");
  ketoprak += 1;
}

// do.. while
let bayar = 1;

do {
  console.log("memberi total uang " + bayar * 2 + "000");
  bayar++;
} while (bayar <= 5);

// build function
function kondisi() {
  let keadaan = "kenyang";

  if (keadaan == "belum kenyang") {
    console.log("beli lagi");
  } else {
    console.log("ayo pulang");
  }
}

kondisi();

// parameter function
function jalan(pembayaran, langkah = 0) {
  switch (langkah) {
    case 30:
      console.log(`aku ${pembayaran} dan aku masih jauh dari rumah`);
      break;
    case 50:
      console.log(`aku ${pembayaran} dan sebentar lagi aku sampai ke rumah`);
      break;
    default:
      console.log(`aku ${pembayaran} aku belum sampai rumah`);
  }
}

jalan("sudah bayar", 50);

// return function
function menghitung(langkah_kaki_kiri, langkah_kaki_kanan) {
  return langkah_kaki_kiri + langkah_kaki_kanan;
}

console.log(menghitung(24, 26));
