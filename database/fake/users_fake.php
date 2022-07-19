<?php

function usersFake($dbConnect)
{
    $names = ['Ilya Lastname', 'Kate Lastname', 'Aleksandr Lastname', 'Sergey Lastname', 'John Lastname', 'Olya Lastname', 'Kirill Lastname', 'Ilya Lastname', 'John Lastname', 'Vlad Lastname'];
    $emails = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    $emailsLast = ['gmail.com', 'mail.ru', 'yandex.ru'];

    foreach ($names as $name) {
        $sql = 'INSERT INTO users (name,lastname,email,gender,status) 
        VALUES (:name,:lastname,:email,:gender,:status)';
        $stmt = $dbConnect->prepare($sql);
        $stmt->execute([
            ':name' => $name,
            ':email' => randEmail($emails) . '@' . $emailsLast[array_rand($emailsLast, 1)],
            ':gender' => rand(0, 1),
            ':status' => rand(0, 1),
        ]);
    }
}

function randEmail($emails)
{
    $rand = array_rand($emails, rand(5, 10));

    $email = '';
    foreach ($rand as $key => $item) {
        $email .= $emails[$item];
    }

    return $email;
}
