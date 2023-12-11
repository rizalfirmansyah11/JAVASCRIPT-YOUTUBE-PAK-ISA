document.querySelector("#klik").addEventListener("click",tampil);

function tampil() {
    let url = ""
   fetch(url)
//    .then(function (res) {
//     return res.json();
//    })
    .then(ress=> ress.json())
//    .then(function (data) {
//     console.log(data);
//    })
   .then(data => {
    // console.log(data);
    let out = "<ul>"
    data.array.forEach(el => {
        out += `<li>${el.title}</li>`
        console.log(el.title);
    });
    out +="</ul>";
    document.querySelector("#sisi").innerHTML = out;
})
}