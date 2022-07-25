<?php

function clientsFake($dbConnect)
{
    $names = ['John', 'Jane'];
    $emails = ['user1@test.com', 'user2@test.com'];
    $passwords = ['1234567890', '1234567890'];

    for ($i = 0;$i < count($names);$i++) {
        $sql = 'INSERT INTO clients (name,email,password) 
        VALUES (:name,:email,:password)';
        $stmt = $dbConnect->prepare($sql);
        $stmt->execute([
            ':name' => $names[$i],
            ':email' => $emails[$i],
            ':password' => password_hash($passwords[$i], PASSWORD_BCRYPT),
        ]);
    }
}
