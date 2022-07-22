<?php

include '../vendor/autoload.php';
include '../src/HTTP/Kernel.php';

try {
    include '../database/migrations.php';
} catch (PDOException $e) {
    echo $e;
}
$web = new Web();
$web->route();
