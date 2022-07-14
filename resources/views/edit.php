<?php
include 'components/inputError.php';
include 'components/select.php';

$action = '';
if (preg_match('~^(\/api\/edit\/([0-9]+))$~', $_SERVER['REQUEST_URI'], $matches)) {
  $action = '/api/update/';
} else {
  $action = '/update/';
}

?>
<section class="edit">
  <div class="wrapper">
    <form action="<?php echo $action . $id ?>" method="POST">
      <?php foreach ($results as $item) : ?>
        <?php echo inputError('edit_error_name', 'text', 'edit_name', 'name', $item['name']) ?>
        <?php echo inputError('edit_error_email', 'text', 'edit_email', 'email', $item['email']) ?>
        <?php echo select('edit_gender_block', 'gender', 'male', 'female') ?>
        <?php echo select('edit_status_block', 'status', 'active', 'inactive') ?>
      <?php endforeach; ?>
      <input type="submit" id="edit_submit" value="change" class="btn success">
    </form>
  </div>
</section>