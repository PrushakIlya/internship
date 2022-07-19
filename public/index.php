<?php

include_once '../vendor/autoload.php';
include_once '../src/HTTP/Kernel.php';

$dbConnect = include_once '../config/connect_db.php';
include_once '../config/check_table.php';

include_once '../database/fake/users_fake.php';
include_once '../database/fake/clients_fake.php';
$sqlUsersMigration = include_once '../database/users_migration.php';
$sqlFilesMigration = include_once '../database/files_migration.php';
$sqlFilesMigration = include_once '../database/clients_migration.php';

try {
    checkTable($dbConnect, $sqlUsersMigration, 'users');
    checkTable($dbConnect, $sqlFilesMigration, 'files');
    checkTable($dbConnect, $sqlFilesMigration, 'clients');

    // usersFake($db_connect);
    // clientsFake($dbConnect);
} catch (PDOException $e) {
    echo $e;
}
$web = new Web();
$web->route();
