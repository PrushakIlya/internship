<?php

include '../vendor/autoload.php';
include '../src/HTTP/Kernel.php';

session_start();
$dotenv = Dotenv\Dotenv::createImmutable(str_replace('/public', '', __DIR__));
$dotenv->load();

date_default_timezone_set($_ENV['TIMEZONE']);
ini_set('display_errors', $_ENV['DEBUG_DISPLAY']);

try {
    include '../database/seeders/databaseSeeder.php';
} catch (PDOException $e) {
    echo $e;
}
$web = new Kernal();
$web->route();
