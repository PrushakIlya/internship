<?php

function users_fake($db_connect)
{
    $names = ['Ilya', 'Kate', 'Aleksandr', 'Sergey', 'John', 'Olya', 'Kirill', 'Ilya', 'John', 'Vlad'];
    $lastnames = ['lastnameoOne', 'lastnameTwo', 'lastnameThree', 'lastnameFour', 'lastnameFive', 'lastnameSix', 'lastnameSeven', 'lastnameEight', 'lastnameNine', 'lastnameTen'];
    $emails = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    $emails_last = ['gmail.com', 'mail.ru', 'yandex.ru'];

    for ($i = 0; $i < count($names); $i++) {
        $sql = "INSERT INTO users (name,lastname,email,gender,status) 
        VALUES (:name,:lastname,:email,:gender,:status)";
        $stmt = $db_connect->prepare($sql);
        $stmt->execute(array(
            ":name" => $names[$i],
            ":lastname" => $lastnames[$i],
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
