<?php 
    if(isset($_POST['login'])){
        include 'conn.php';
    }
    else{
        echo "Error in button";
    }
    if($conn){
        $aname=$_POST['aname'];
        $apw=$_POST['apw'];
        $result=mysqli_query($conn,"select * from admin where aname='$aname' and apw='$apw'") or die("Cant connect to server!");
        if(mysqli_num_rows($result)>0){
            header("location: intern-details-entry.html");
        }
        else{
            echo"<script language='javascript'>
                 alert('Please enter correct credentials!!');
                 window.location.href='admin-login.html';
            </script>";
        }
    }
?>  