<?php

require_once "koneksi.php";

 $data = stripcslashes(file_get_contents("php://input"));
 $idPelanggan = json_decode($data,true);

 $idpelanggan = $idpelanggan['idpelanggan'];
 

 if (! empty($idpelanggan) ) {
    
 

 $sql = "DELETE FORM tblpelanggan WHERE idpelanggan=$idPelanggan";
 if ($result = mysqli_query($con,$sql)) {
    echo "Data sudah di hapus !";
 } else {
    echo "Data gagal di hapus !";
 }
 
} else {
    echo "Data belum di pilih";
}
 