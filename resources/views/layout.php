<?php
$loader = new \Twig\Loader\FilesystemLoader('../resources/views');
$twig = new \Twig\Environment($loader, ['debug' => true, ]);
$twig->addExtension(new \Twig\Extension\DebugExtension());
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="/app.css">
  <title>Document</title>
</head>

<body>
  <?php include '../resources/views/header.php'?>
  <main>
    <?php include '../resources/views/panel.php' ?>

    <!-- SQL -->
    <?php $_SERVER['REQUEST_URI'] === '/' && include '../resources/views/index.php'?>
    <?php preg_match('~^(\/edit\/([0-9]+))$~', $_SERVER['REQUEST_URI'], $matches) && include '../resources/views/edit.php'?>
    <?php $_SERVER['REQUEST_URI'] === '/create' && include '../resources/views/create.php'?>
    <?php if ($_SERVER['REQUEST_URI'] === '/upload') {
        echo $twig->render('twigs/upload.twig', ['results' => $results, ]);
    }?>
    <?php if ($_SERVER['REQUEST_URI'] === '/autorization') {
        echo $twig->render('twigs/autorization.twig', []);
    }?>
    <?php if ($_SERVER['REQUEST_URI'] === '/autorization/ifAutorized') {
        echo $twig->render('twigs/if_autorized.twig', ['results' => $results, ]);
    }?>
    <?php if ($_SERVER['REQUEST_URI'] === '/registration') {
        echo $twig->render('twigs/registration.twig', []);
    }?>
    <?php if ($_SERVER['REQUEST_URI'] === '/combine/registration') {
        echo $twig->render('twigs/combine_registration.twig', []);
    }?>
    <?php if ($_SERVER['REQUEST_URI'] === '/combine/authorization') {
        echo $twig->render('twigs/combine_autorization.twig', []);
    }?>
    <?php if ($_SERVER['REQUEST_URI'] === '/combine/ifAutorized') {
        echo $twig->render('twigs/combine_if_autorized.twig', ['results' => $results[0], 'result' => $results[1]]);
    }?>
    


    <!-- API -->
    <?php $_SERVER['REQUEST_URI'] === '/two' && include '../resources/views/index.php'?>
    <?php preg_match('~^(\/two\/edit\/([0-9]+))$~', $_SERVER['REQUEST_URI'], $matches) && include '../resources/views/edit.php'?>
    <?php $_SERVER['REQUEST_URI'] === '/two/create' && include '../resources/views/create.php'?>
  </main>

  <?php include '../resources/views/footer.php'?>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous">
  </script>
  <script src="/app.js" defer></script>
</body>

</html>