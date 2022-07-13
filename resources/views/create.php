<?php
include 'components/inputError.php';
include 'components/select.php';
?>
<section class="create">
  <div class="wrapper">
    <form action="/store" method="POST">
      <div>
        <?php echo inputError('create_error_name', 'text', 'create_name', 'name') ?>
        <?php echo inputError('create_error_lastname', 'text', 'create_lastname', 'lastname') ?>
        <?php echo inputError('create_error_email', 'text', 'create_email', 'email') ?>
        <?php echo select('create_gender_block', 'gender', 'male', 'female') ?>
        <?php echo select('create_status_block', 'status', 'active', 'inactive') ?>
      </div>
      <input type="submit" value="save" id="create_submit" class="btn disabled">
    </form>
  </div>
  </header>