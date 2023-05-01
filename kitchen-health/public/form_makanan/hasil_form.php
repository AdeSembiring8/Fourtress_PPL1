<html>
<head>
    <title>HASIL PEMESANAN JaDul</title>
    <link rel="stylesheet" href="styleHasil.css">
<style>
        

</style>
</head>
<body style="background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(4.jpg); background-size: cover;">
    <div>
        <header>
            <h1 style="font-size: 60px; font-weight: bold;">Hasil Pemesanan</h1>
        </header>
    </div>
    <div id="layout">
        <div id="pesan">
            <div>
            <?php
            if (isset($_POST["submit"])){
                $nama=$_POST["nama"];
                $email=$_POST["email"];
                $nohp=$_POST["nohp"];
                $alamat=$_POST["alamat"];
                $pembayaran=$_POST["pembayaran"];
                $ongkos=10000;   
            }
            ?>
                <form method="post" action="<?php echo isset($POST["submit"]);?>">
                    <table cellspacing="5" cellpadding="5">
                        <tr>
                            <td><label class="judul" for="nama">Nama Lengkap</label></td>
                            <td> : </td>
                            <td> <?php echo $nama;?> </td>
                        </tr>
                        <tr>
                            <td><label class="judul" for="email">Email</label></td>
                            <td> : </td>
                            <td> <?php echo $email;?> </td>
                        </tr>
                        <tr>
                            <td><label class="judul" for="hp">Nomor Handphone</label></td>
                            <td> : </td>
                            <td> <?php echo $nohp;?> </td>
                        </tr>
                        <tr>
                            <td><label class="judul" for="alamat">Alamat</label></td>
                            <td> : </td>
                            <td> <?php echo $alamat;?> </td>
                        </tr>
                        <tr>
                            <td><label class="judul" for="pembayaran">Pembayaran</label></td>
                            <td> : </td>
                            <td> <?php echo $pembayaran;?> </td>
                        </tr>
                        
                        

                        <tr>
                            <td class="judul">Makanan Yang Dipilih</td>
                            <td> : </td>
                            <td>
                                <?php
                                if (isset($_POST['TelurGulung'])){
                                    echo $_POST['TelurGulung']." || ";
                                    echo "Harga        : Rp " .$harga[0]=7000;
                                    echo "<br>";
                                }

                                if (isset($_POST['PermenGulali'])){  
                                    echo $_POST['PermenGulali']." || ";
                                    echo " Rp " .$harga[1]=6000;
                                    echo "<br>";
                                }
                                if (isset($_POST['CirengIsi'])){  
                                    echo $_POST['CirengIsi']." || ";
                                    echo "Rp " .$harga[2]=10000;
                                    echo "<br>";
                                }
                                if (isset($_POST['Cimol'])){  
                                    echo $_POST['Cimol']." || ";
                                    echo "Rp " .$harga[3]=4000;
                                    echo "<br>";
                                }
                                if (isset($_POST['Cilung'])){  
                                    echo $_POST['Cilung']." || ";
                                    echo "Rp " .$harga[4]=4000;
                                    echo "<br>";
                                }
                                if (isset($_POST['KuePukis'])){  
                                    echo $_POST['KuePukis']." || ";
                                    echo "Rp " .$harga[5]=15000;
                                    echo "<br>";
                                }
                                if (isset($_POST['EsMambo'])){  
                                    echo $_POST['EsMambo']." || ";
                                    echo "Rp " .$harga[6]=5000;
                                    echo "<br>";
                                }
                                if (isset($_POST['PopIce'])){  
                                    echo $_POST['PopIce']." || ";
                                    echo "Rp " .$harga[7]=5000;
                                    echo "<br>";
                                }
                                if (isset($_POST['EsKulkul'])){  
                                    echo $_POST['EsKulkul']." || ";
                                    echo "Rp " .$harga[8]=5000;
                                    echo "<br>";
                                }
                                
                                ?>
                            </td>
                        </tr>

                        <tr>
                            <td><label class="judul" for="ongkos">Ongkos Kirim</label></td>
                            <td> : </td>
                            <td> <?php echo $ongkos;?> </td>
                        </tr>
                        <tr>
                            <td class="judul">Total Bayar</td>
                            <td> : </td>
                            <td> 
                                <?php 
                                $totbay=array_sum($harga) + $ongkos; 
                                echo " Rp $totbay <br>";
                                ?> </td>
                        </tr>
                    </table>
                    <br><br>
                    <h2 class="pesan">Di Tunggu Pesanannya~~</h2>
                </form>
            </div>
        </div>
    </body>
</body>
</html>