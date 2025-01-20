<?php
session_start();


include 'connect.php';
if(isset($_SESSION["id"])){
    echo json_encode([
        'status' => 'success',
        'email' => $_SESSION['email'],
        'name' => $_SESSION['name'],
     
    ]);
  }

  else{
    echo json_encode(['status' => 'error']);
  }



?>