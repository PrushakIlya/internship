<?php

function checkTable($dbConnect, $migration, $tableName)
{
    $table = $dbConnect->query("SHOW TABLES LIKE '$tableName'");
    $result = $table->fetchAll(PDO::FETCH_ASSOC);
    if (empty($result)) {
        echo 'Table users has been created';
        $dbConnect->exec($migration);
    }
}
