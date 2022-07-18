<?php
include_once '../vendor/autoload.php';
include_once '../src/HTTP/Kernel.php';

$dbConnect = include_once '../config/connect_db.php';

include_once '../database/fake/users_fake.php';
$sqlUsersMigration = include_once '../database/users_migration.php';

try {
    $table = $dbConnect->query("SHOW TABLES LIKE 'users'");
    $result = $table->fetchAll(PDO::FETCH_ASSOC);
    if (empty($result)) {
        echo "Table users has been created";
        $db_connect->exec($sqlUsersMigration);
    }

    // users_fake($db_connect);


} catch (PDOException $e) {
    // echo $e;
}
$web = new Web();
$web->route();
