// Superclass Kapal
class Kapal { 
  constructor(nama, jenis, panjang, lebar) {
      this.nama = nama;
      this.jenis = jenis;
      this.panjang = panjang;
      this.lebar = lebar;
  }

  infokapal() {
      return `Kapal ${this.nama} merupakan jenis ${this.jenis} yang berukuran ${this.panjang} m x ${this.lebar} m.`;
  }
}

// Subclass KapalPenumpang
class KapalPenumpang extends Kapal {
  constructor(nama, panjang, lebar, kapasitasPenumpang) {
      super(nama, "kapal feri", panjang, lebar);
      this.kapasitasPenumpang = kapasitasPenumpang;
  }

  infokapal() {
      return `${super.infokapal()} Kapal ini memiliki kapasitas ${this.kapasitasPenumpang} orang.`;
  }

  getKapasitas() {
      return this.kapasitasPenumpang;
  }
}

// Subclass Tiket
class Tiket extends KapalPenumpang {
  constructor(nama, panjang, lebar, kapasitasPenumpang, hargaTiket) {
      super(nama, panjang, lebar, kapasitasPenumpang);
      this.hargaTiket = hargaTiket;
  }

  infoTiket() {
      return `Harga tiket untuk kapal ${this.nama} adalah Rp ${this.hargaTiket}.`;
  }
}

// Subclass PenumpangNaik
class PenumpangNaik extends KapalPenumpang {
  constructor(nama, panjang, lebar, kapasitasPenumpang, pelabuhanNaik) {
      super(nama, panjang, lebar, kapasitasPenumpang);
      this.pelabuhanNaik = pelabuhanNaik;
  }

  infoNaik() {
      return `Penumpang naik di pelabuhan ${this.pelabuhanNaik}.`;
  }
}

// Subclass PenumpangTurun
class PenumpangTurun extends KapalPenumpang {
  constructor(nama, panjang, lebar, kapasitasPenumpang, pelabuhanTurun) {
      super(nama, panjang, lebar, kapasitasPenumpang);
      this.pelabuhanTurun = pelabuhanTurun;
  }

  infoTurun() {
      return `Penumpang turun di pelabuhan ${this.pelabuhanTurun}.`;
  }
}

// Contoh penggunaan
const kapalTiket = new Tiket("MUTIS", 621, 259, 319, 45000);
console.log(kapalTiket.infokapal());
console.log(kapalTiket.infoTiket());

const kapalNaik = new PenumpangNaik("MUTIS", 200, 100, 319, "Pelabuhan Ketapang");
console.log(kapalNaik.infoNaik());

const kapalTurun = new PenumpangTurun("MUTIS", 200, 100, 319, "Pelabuhan Gilimanuk");
console.log(kapalTurun.infoTurun());
