<?php

$dbConnect = include_once '../config/connect_db.php';

$sqlFilesMigration = include_once '../database/migrations/files_migration.php';
$sqlUsersMigration = include_once '../database/migrations/users_migration.php';
$sqlLockedMigration = include_once '../database/migrations/locked_migration.php';

checkTable($dbConnect, $sqlFilesMigration, 'files');
checkTable($dbConnect, $sqlUsersMigration, 'users');
checkTable($dbConnect, $sqlLockedMigration, 'locked');
