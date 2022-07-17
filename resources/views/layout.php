<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="/app.css">
  <title>Document</title>
</head>

<body>
  <?php include('../resources/views/header.php') ?>

  <main>
    <!-- SQL -->
    <?php $_SERVER['REQUEST_URI'] === '/' && include('../resources/views/index.php') ?>
    <?php preg_match('~^(\/edit\/([0-9]+))$~', $_SERVER['REQUEST_URI'], $matches) && include('../resources/views/edit.php') ?>
    <?php $_SERVER['REQUEST_URI'] === '/create' && include('../resources/views/create.php') ?>

    <!-- API -->
    <?php $_SERVER['REQUEST_URI'] === '/api' && include('../resources/views/index.php') ?>
    <?php preg_match('~^(\/api\/edit\/([0-9]+))$~', $_SERVER['REQUEST_URI'], $matches) && include('../resources/views/edit.php') ?>
    <?php $_SERVER['REQUEST_URI'] === '/api/create' && include('../resources/views/create.php') ?>
  </main>

  <?php include('../resources/views/footer.php') ?>

  <script src="/app.js" defer></script>
</body>

</html>