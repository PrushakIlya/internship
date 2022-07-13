<?php
include_once '../vendor/autoload.php';
include_once '../routes/Web.php';

$db_connect = include_once '../config/connect_db.php';

include_once '../database/fake/users_fake.php';
$sql_users_migration = include_once '../database/users_migration.php';



try {
    $db_connect->exec($sql_users_migration);

    // users_fake($db_connect);

    echo "Table users has been created";
} catch (PDOException $e) {
    // echo $e;
}
$web = new Web();
$web->route();
