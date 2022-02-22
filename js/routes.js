var routes = [
  {path: "/", url: "index.html"},
  {path: "/barang/", componentUrl: "pages/barang.html"},
  {path: "/tambah_barang/", componentUrl: "pages/tambah_barang.html"},
  {path: "/kelola_barang/", componentUrl: "pages/kelola_barang.html"},
  {path: "/kelola_toko/", componentUrl: "pages/kelola_toko.html"},
  {path: "/versi/", url: "pages/versi.html"},
  {path: "/tentang/", url: "pages/tentang.html"},
  {path: "/akun/", componentUrl: "pages/akun.html"},
  {path: "/tambah_akun/", componentUrl: "pages/tambah_akun.html"},
  {path: "/kelola_akun/", componentUrl: "pages/kelola_akun.html"},
  {path: "/transaksi/", componentUrl: "pages/transaksi.html"},
  {path: "/dtransaksi/", componentUrl: "pages/detail_transaksi.html"},
  {path: "/gantipass/", componentUrl: "pages/password.html"},
  {path: "(.*)", url: "pages/404.html"}
];