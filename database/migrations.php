<?php

$dbConnect = include_once '../config/connect_db.php';
include_once '../config/check_table.php';

$sqlFilesMigration = include_once '../database/files_migration.php';
$sqlUsersMigration = include_once '../database/users_migration.php';

checkTable($dbConnect, $sqlFilesMigration, 'files');
checkTable($dbConnect, $sqlUsersMigration, 'users');
