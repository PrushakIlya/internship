<?php

try {
    return new PDO(
        "mysql:host={$_ENV['DB_HOST']};port={$_ENV['DB_PORT']};dbname={$_ENV['DB_DATABASE']}",$_ENV['DB_USERNAME'],$_ENV['DB_PASSWORD']
    );
} catch (PDOException $e) {
    echo 'Create db by named: internship';
}

