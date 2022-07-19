<?php
include 'components/inputError.php';
include 'components/select.php';

$action = '';
$hrefBack = '';

if ($_SERVER['REQUEST_URI'] === '/two/create') {
    $action = '/two/store';
    $hrefBack = '/two';
} else {
    $action = '/store';
    $hrefBack = '/';
}
?>

<section class="create">
  <div class="wrapper">
    <form action="<?php echo $action ?>" method="POST">
      <div>
        <?php echo inputError('create_error_name', 'text', 'create_name', 'name') ?>
        <?php echo inputError('create_error_email', 'text', 'create_email', 'email') ?>
        <?php echo select('create_gender_block', 'gender', 'male', 'female') ?>
        <?php echo select('create_status_block', 'status', 'active', 'inactive') ?>
      </div>
      <input type="submit" value="save" id="create_submit" class="btn disabled">
      <a href="<?php echo $hrefBack ?>"><button
          class="btn success">Back</button></a>
    </form>
  </div>
  </header>