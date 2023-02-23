// menseleksi element div dengan id date untuk dimanipulasi isinya (innerHTMLnya)
let datePlus = document.querySelector(".plus");
let dateMinus = document.querySelector(".minus");

// Membuat Array Hari untuk diambil indexnya agar Disesuaikan dengan Date Method getDay() 0 - 6 (Minggu - Sabtu)
let days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];

// Membuat Array Bulan untuk diambil indexnya agar Disesuaikan dengan Date Method getMonth() 0 - 11 (Januari - Februari)
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Menseleksi Jam Dan Menit Date Method getDay() dan getHours()
let pickHours = new Date().getHours();
let pickMinute = new Date().getMinutes();

// Menseleksi Hari Tanggal, Bulan dan Tahun
let pickDay = new Date().getDay();
let pickDate = new Date().getDate();
let pickMonth = new Date().getMonth();
let pickYear = new Date().getFullYear();
// Pengkondisian Hari Dengan Menyesuaikan Nomor Indexnya
switch (pickDay) {
  case 0:
    days[0];
    break;
  case 1:
    days[1];
    break;
  case 2:
    days[2];
    break;
  case 3:
    days[3];
    console.info(days[3]);
    break;
  case 4:
    days[4];
    console.info(days[4]);
    break;
  case 5:
    days[5];
    console.info(days[5]);
    break;
  case 6:
    days[5];
    console.info(days[6]);
    break;

  default:
    break;
}

// Pengkondisian Bulan Dengan Menyesuaikan Nomor Indexnya
switch (pickMonth) {
  case 0:
    pickMonth = months[0];
    console.info(months[0]);
    break;
  case 1:
    pickMonth = months[1];
    console.info(months[1]);
    break;
  case 2:
    pickMonth = months[2];
    console.info(months[2]);
    break;
  case 3:
    pickMonth = months[3];
    console.info(months[3]);
    break;
  case 4:
    months[4];
    break;
  case 5:
    months[5];
    break;
  case 6:
    months[6];
    break;
  case 7:
    months[7];
    break;
  case 8:
    months[8];
    break;
  case 9:
    months[9];
    break;
  case 10:
    months[10];
    break;
  case 11:
    months[11];
    break;

  default:
    break;
}

// result date untuk menampilkan notifikasi ketika selesai input saldo tambahan
let resultDate = `${pickDay}, ${pickDate} ${pickMonth} ${pickYear}`;
console.info(resultDate);

class InputUser {
  nama;
  saldoAwal;
  saldoAkhir = this.saldoAwal;
  promptUser() {
    this.nama = prompt("Masukkan Nama User");
    let begBalance = Number(prompt("Masukkan Nominal Saldo Awal"));
    this.saldoAwal = begBalance;
    this.saldoAkhir = this.saldoAwal;
    return user.saldoAkhir;
  }
  addBalance() {
    this.saldoAkhir;
    let tambahSaldo = Number(prompt("Tambahkan Saldo"));
    this.saldoAkhir = this.saldoAkhir + tambahSaldo;
    if (tambahSaldo == String) {
      alert(
        "Yang Anda Masukkan Bukan Angka \n Pastikan Anda Menginput Nominal Dengan Benar"
      );
    }
    setTimeout(() => {
      datePlus.classList.add("active");
      datePlus.innerHTML = `Hari ini ${resultDate} Pukul ${pickHours}:${pickMinute} <br> Saldo Anda Bertambah ${tambahSaldo.toLocaleString(
        "id-ID"
      )} Saldo Akhir Anda Menjadi ${this.saldoAkhir.toLocaleString("id-ID")}`;
    }, 300);
    setTimeout(() => {
      datePlus.classList.remove("active");
    }, 4000);
    return this.saldoAkhir;
  }
  creditBalance() {
    this.saldoAkhir;
    let kurangSaldo = Number(prompt("Kurangi Saldo"));
    this.saldoAkhir = this.saldoAkhir - kurangSaldo;
    if (kurangSaldo == String) {
      alert(
        "Yang Anda Masukkan Bukan Angka \n Pastikan Anda Menginput Nominal Dengan Benar"
      );
    }
    setTimeout(() => {
      dateMinus.classList.add("active");
      dateMinus.innerHTML = `Hari ini ${resultDate} Pukul ${pickHours}:${pickMinute} <br> Saldo Anda Berkurang ${kurangSaldo.toLocaleString(
        "id-ID"
      )} Saldo Akhir Anda Menjadi ${this.saldoAkhir.toLocaleString("id-ID")}`;
    }, 300);
    setTimeout(() => {
      dateMinus.classList.remove("active");
    }, 4000);
    return this.saldoAkhir;
  }
}

let nameValue = document.getElementById("userName");
let balance = document.getElementById("begBalance");
let ending = document.getElementById("endBalance");
const user = new InputUser();
function inputPrompt() {
  user.promptUser();
  nameValue.value = user.nama;
  balance.value = user.saldoAwal;
  ending.value = user.saldoAkhir;
}

function tambahSaldo() {
  ending.value = user.addBalance();
}

function kurangSaldo() {
  ending.value = user.creditBalance();
}
