<?php
    session_start();
    if (!isset($_SESSION["username"])) {
        header("Location: login.php");
        exit;
    }

    include("connection.php");


    if (isset($_GET['nim'])) {
        $nim = $_GET['nim'];

        
        $query = "DELETE FROM student WHERE nim = '$nim'";
        $result = mysqli_query($connection, $query);
        if ($result) {
            $message = "Data berhasil dihapus";
        } else {
            $message = "Gagal menghapus data: ".mysqli_error($connection);
        }
    } else {
        $message = "NIM tidak ditemukan";
    }

    
    header("Location: student_view.php?message=" . urlencode($message));
    exit;
?>