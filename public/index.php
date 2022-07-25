<?php


include '../vendor/autoload.php';
include '../src/HTTP/Kernel.php';

ini_set('display_errors', 1);
error_reporting(E_ALL);

try {
    include '../database/migrations.php';
} catch (PDOException $e) {
    echo $e;
}
$web = new Kernal();
$web->run();
