let coba = function () {
    return "coba fungction";
}

let buah = ["apel", "mangga", "jeruk",10, coba(),
    (tes = ()=>"hasil retur arrow fungction"),
    function name() {
        return "smk revit";
    }
];

console.log(buah);

console.log(buah[0]);

for(let i in buah){
    console.log(buah[i]);
}

console.log(buah[5]());

console.log(buah[6]());