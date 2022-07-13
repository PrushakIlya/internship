<?php
include 'components/select.php';
include 'components/inputError.php';
?>
<section class="edit">
  <div class="wrapper">
    <form action="/store" method="POST">
      <div>
        <?php echo inputError('error_name', 'text', 'name') ?>
        <?php echo inputError('error_lastname', 'text', 'lastname') ?>
        <?php echo inputError('error_email', 'text', 'email') ?>
        <?php echo select('gender_block', 'gender', 'male', 'female') ?>
        <?php echo select('status_block', 'status', 'active', 'inactive') ?>
      </div>
      <input type="submit" value="save" id="submit" class="btn success">
    </form>
  </div>
  </header>
  <script src="./js/create.js" type="module" defer></script>