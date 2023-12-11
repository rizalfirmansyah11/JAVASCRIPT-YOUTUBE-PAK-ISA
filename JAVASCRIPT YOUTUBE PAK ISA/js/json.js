document.querySelector("#klik").addEventListener("click",tampil);

function tampil(params) {
    let url = "js/tblmenu.json";
    fetch(url)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        let output = "<h1>DATA MENU</h1> <table><th>menu</th> <table><th>harga</th> <table><th>warna</th>";
        data.array.forEach(element => {
            output += `<tr>
            <td> ${element.menu}</td>
            <td> ${element.harga}</td>
            <td> ${element.warna[0]}</td>
            </tr>`;
        });
        output += "</table";
        document.querySelector("#isi").innerHTML= output;
    })
   
}

// let tblmenu= [ {

//     "idmenu" : 1,
//     "idkategori" : 1,
//     "menu" : "apel manalagi",
//     "harga" : 3000,
//     "warna" : ["merah", "kuning", "hijau"],
//     "stok" : true,
//     "keterangan" : null

// },
// {

//     "idmenu" : 2,
//     "idkategori" : 1,
//     "menu" : "pisang",
//     "harga" : 2000,
//     "warna" : ["merah", "kuning"],
//     "stok" : false,
//     "keterangan" : null

// },

// ]

// console.log(tblmenu[0].menu);