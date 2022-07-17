<?php
include_once '../vendor/autoload.php';
include_once '../routes/Web.php';

$db_connect = include_once '../config/connect_db.php';

include_once '../database/fake/users_fake.php';
$sql_users_migration = include_once '../database/users_migration.php';

try {
    $table = $db_connect->query("SHOW TABLES LIKE 'users'");
    $result = $table->fetchAll(PDO::FETCH_ASSOC);
    if (empty($result)) {
        echo "Table users has been created";
        $db_connect->exec($sql_users_migration);
    }

    // users_fake($db_connect);


} catch (PDOException $e) {
    // echo $e;
}
$web = new Web();
$web->route();
