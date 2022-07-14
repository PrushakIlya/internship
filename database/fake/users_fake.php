<?php

function users_fake($db_connect)
{
    $names = ['Ilya Lastname', 'Kate Lastname', 'Aleksandr Lastname', 'Sergey Lastname', 'John Lastname', 'Olya Lastname', 'Kirill Lastname', 'Ilya Lastname', 'John Lastname', 'Vlad Lastname'];
    $emails = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    $emails_last = ['gmail.com', 'mail.ru', 'yandex.ru'];

    foreach ($names as $name) {
        $sql = "INSERT INTO users (name,lastname,email,gender,status) 
        VALUES (:name,:lastname,:email,:gender,:status)";
        $stmt = $db_connect->prepare($sql);
        $stmt->execute(array(
            ":name" => $name,
            ":email" => rand_email($emails) . '@' . $emails_last[array_rand($emails_last, 1)],
            ":gender" => rand(0, 1),
            ":status" => rand(0, 1),
        ));
    }
}

function rand_email($emails)
{
    $rand = array_rand($emails, rand(5, 10));

    $email = '';
    foreach ($rand as $key => $item) {
        $email .= $emails[$item];
    }
    return $email;
}
