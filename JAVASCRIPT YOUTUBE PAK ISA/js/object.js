const objek = {

    nama : "smk revit",
    telp : 12345678,

    buah : ["apel", "jeruk", "mangga"],

    coba : function () {
        return "coba fungction dalam objek";
    },

    boleh: true,
    "tulis aja": 12345600,

};

console.log(objek.nama);
console.log(objek.telp);
console.log(objek.boleh);
console.log(objek.coba());
console.log(objek.buah[1]);
console.log(objek["tulis aja"]);