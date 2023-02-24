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
    pickDay = days[0];
    console.info(pickDay);
    break;
  case 1:
    pickDay = days[1];
    console.info(pickDay);
    break;
  case 2:
    pickDay = days[2];
    console.info(pickDay);
    break;
  case 3:
    pickDay = days[3];
    console.info(pickDay);
    break;
  case 4:
    pickDay = days[4];
    console.info(pickDay);
    break;
  case 5:
    pickDay = days[5];
    console.info(pickDay);
    break;
  case 6:
    pickDay = days[5];
    console.info(pickDay);
    break;

  default:
    break;
}

// Pengkondisian Bulan Dengan Menyesuaikan Nomor Indexnya
switch (pickMonth) {
  case 0:
    pickMonth = months[0];
    break;
  case 1:
    pickMonth = months[1];
    break;
  case 2:
    pickMonth = months[2];
    break;
  case 3:
    pickMonth = months[3];
    break;
  case 4:
    pickMonth = months[4];
    break;
  case 5:
    pickMonth = months[5];
    break;
  case 6:
    pickMonth = months[6];
    break;
  case 7:
    pickMonth = months[7];
    break;
  case 8:
    pickMonth = months[8];
    break;
  case 9:
    pickMonth = months[9];
    break;
  case 10:
    pickMonth = months[10];
    break;
  case 11:
    pickMonth = months[11];
    break;

  default:
    break;
}

// result date untuk menampilkan notifikasi ketika selesai input saldo tambahan
let resultDate = `${pickDay}, ${pickDate} ${pickMonth} ${pickYear}`;
console.info(resultDate);

// Menggunakan OOP class Input User
class InputUser {
  nama;
  saldoAwal;
  saldoAkhir = this.saldoAwal;
  
//   Method untuk input nama dan saldo awal
  promptUser() {
    this.nama = prompt("Masukkan Nama User");
    let begBalance = Number(prompt("Masukkan Nominal Saldo Awal"));
    this.saldoAwal = begBalance;
    this.saldoAkhir = this.saldoAwal;
    return user.saldoAkhir;
  }
  
//   Method untuk input tambah saldo
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
  
//   Method untuk mengurangi saldo
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

// Seleksi Form Yang Akan di Input Valuenya
let nameValue = document.getElementById("userName");
let balance = document.getElementById("begBalance");
let ending = document.getElementById("endBalance");

// Instance Object (Ambil Data, Method dari OOP Class InputUser)
const user = new InputUser();
// Input Name dan Saldo Awal
function inputPrompt() {
  user.promptUser();
  nameValue.value = user.nama;
  balance.value = user.saldoAwal;
  ending.value = user.saldoAkhir;
}

// Input Tambah Saldo
function tambahSaldo() {
  ending.value = user.addBalance();
}

// Input Kurangi Saldo
function kurangSaldo() {
  ending.value = user.creditBalance();
}
