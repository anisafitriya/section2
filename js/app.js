var $ = Dom7;
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
    theme = document.location.search.split('theme=')[1].split('&')[0];
}
var app = new Framework7({
    id: 'com.perumdamjombang',
    root: '#app',
    theme: theme,
    data: function () {
        return {
            user: {
              firstName: 'John',
              lastName: 'Doe',
            },
        };
    },
    methods: {
        helloWorld: function () {
            app.dialog.alert('Hello World!');
        },
    },
    routes: routes,
    popup: {
        closeOnEscape: true,
    },
    sheet: {
        closeOnEscape: true,
    },
    popover: {
        closeOnEscape: true,
    },
    actions: {
        closeOnEscape: true,
    },
    vi: {
        placementId: 'pltd4o7ibb9rc653x14',
    },
    placementKey: "rFkOO517Bb",
    initOnDeviceReady:true,
    view:{
        stackPages: true,
        pushState:true,
    }
});


var terjemahanbulan = ['','Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
var terjemahanhari = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];

function tgl_pendek(tgl_en){
    var bulan = ['','Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
    var tgl = tgl_en.split("-");
    return tgl[2] + ' ' + bulan[parseInt(tgl[1])] + ' ' + tgl[0];
}


function format_ribuan(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function random_all(){
    var karakter = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var panjang = 10;
    var hasil = "";
    for(i=0; i<panjang; i++){
        var nilai = Math.floor(Math.random() * karakter.length);
        hasil += karakter.substring(nilai, nilai + 1);
    }
    return hasil;
}

function tgl_sekarang(tgl_js){
    var tahun = tgl_js.getFullYear();
    var bulan = tgl_js.getMonth() + 1;
    var tgl;
    if(tgl_js.getDate() < 10){tgl = "0" + tgl_js.getDate();}
    else{tgl = tgl_js.getDate();}
    return tgl_pendek(tahun + "-" + bulan + "-" + tgl);
}

function tgl_sekarang2(tgl_js){
    var tahun = tgl_js.getFullYear();
    var bulan2;
    var bulan = tgl_js.getMonth() + 1;
    if(bulan < 10){bulan2 = "0" + bulan;}else{bulan2 = bulan;}
    var tgl;
    if(tgl_js.getDate() < 10){tgl = "0" + tgl_js.getDate();}else{tgl = tgl_js.getDate();}
    return tahun + "-" + bulan2 + "-" + tgl;
}

function jam_sekarang(tgl_js){
    var jam, menit, detik;
    if(tgl_js.getHours() < 10){jam = "0" + tgl_js.getHours();}
    else{jam = tgl_js.getHours();}
    if(tgl_js.getMinutes() < 10){menit = "0" + tgl_js.getMinutes();}
    else{menit = tgl_js.getMinutes();}
    if(tgl_js.getSeconds() < 10){detik = "0" + tgl_js.getSeconds();}
    else{detik = tgl_js.getSeconds();}
    return jam + ":" + menit + ":" + detik;
}

function sekarang(){
    var tglsekarang = new Date();
    var hr, tgl, bl, th, jm, mn, dt;
    hr = terjemahanhari[tglsekarang.getDay()];
    if(tglsekarang.getDate() <= 9){tgl = "0" + tglsekarang.getDate();}
    else{tgl = tglsekarang.getDate();}
    bl = terjemahanbulan[tglsekarang.getMonth()+1];
    th = tglsekarang.getFullYear();
    if(tglsekarang.getHours() <= 9){jm = "0" + tglsekarang.getHours();}
    else{jm = tglsekarang.getHours();}
    if(tglsekarang.getMinutes() <= 9){mn = "0" + tglsekarang.getMinutes();}
    else{mn = tglsekarang.getMinutes();}
    if(tglsekarang.getSeconds() <= 9){dt = "0" + tglsekarang.getSeconds();}
    else{dt = tglsekarang.getSeconds();}
    return hr + ", " + tgl + " " + bl + " " + th + "<br>Jam " + jm + ":" + mn + ":" + dt;
}