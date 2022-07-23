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

function view($template, $payload = [])
{
    $template = str_replace('.', '/', $template);
    $loader = new \Twig\Loader\FilesystemLoader('../resources/views');
    $twig = new \Twig\Environment($loader, ['debug' => true, ]);
    $twig->addExtension(new \Twig\Extension\DebugExtension());
    echo $twig->render("/$template.twig", $payload);
}
