<html>
    <head></head>
    <body>
        

        <?php
        $nama=$_POST['nama'];
        $email=$_POST['email'];
        $alamat=$_POST['alamat'];
        $pembayaran=$_POST['pembayaran'];
        ?>
        <table>
            <tr>
                <td>Nama Lengkap</td>
                <td> : </td>
                <td> <?php echo $nama;?> </td>
            </tr>
            <tr>
                <td>Email</td>
                <td> : </td>
                <td> <?php echo $email;?> </td>
            </tr>
            <tr>
                <td>Alamat</td>
                <td> : </td>
                <td> <?php echo $alamat;?> </td>
            </tr>
            <tr>
                <td>Menu Makanan</td>
                <td> : </td>
                <td></td>
            </tr>
        
        </table>



        <input type = "checkbox" name="Cimol" value="Cimol"> Cimol
                <input type = "checkbox" name="Cilung" value="Cilung"> Cilung
                <input type = "checkbox" name="Kue Pukis" value="Kue Pukis"> Kue Pukis


                if (isset($_POST['Cimol'])){  
                                echo "4.".$_POST['Cimol']."<br>";
                                echo "Harga        : Rp " .$harga[3]=400000;
                                echo "<br>";
                            }
                            if (isset($_POST['Cilung'])){  
                                echo "5.".$_POST['Cilung']."<br>";
                                echo "Harga        : Rp " .$harga[4]=40000;
                                echo "<br>";
                            }
                            if (isset($_POST['Kue Pukis'])){  
                                echo "6.".$_POST['Kue Pukis']."<br>";
                                echo "Harga        : Rp " .$harga[5]=150000;
                                echo "<br>";
                            }



        echo "Nama Pelanggan   : $nama <br>";
        echo "Email Pelanggan  : $email  <br>";
        echo "Alamat Pelanggan : $alamat  <br>";
        
        echo "Jasa Yang Telah di pilih<br>";
        if (isset($_POST['seblak']))

            {
            echo "1.".$_POST['seblak']."<br>";
            echo "Harga        : Rp " .$harga[0]=25000;
            echo "<br>";
        }

        if (isset($_POST['cireng']))
        {  
            echo "2.".$_POST['cireng']."<br>";
            echo "Harga        : Rp " .$harga[1]=35000;
            echo "<br>";
        }
        if (isset($_POST['baso']))
        {  
            echo "3.".$_POST['baso']."<br>";
            echo "Harga        : Rp " .$harga[2]=115000;
            echo "<br>";
        }

        echo "Pembayaran  : $pembayaran <br>";
      
        $totbay=array_sum($harga); 
        echo "Total Bayar Anda Sebesar = Rp $totbay <br>";

        ?>

</body>
</html>
        






