<?php
include 'components/inputError.php';
include 'components/select.php';
?>
<section class="edit">
  <div class="wrapper">
    <form action="/update/<?php echo $id ?>" method="POST">
      <?php foreach ($results as $item) : ?>
        <?php echo inputError('edit_error_name', 'text', 'edit_name','name', $item['name']) ?>
        <?php echo inputError('edit_error_lastname', 'text', 'edit_lastname','lastname', $item['lastname']) ?>
        <?php echo inputError('edit_error_email', 'text', 'edit_email','email', $item['email']) ?>
        <?php echo select('edit_gender_block', 'gender', 'male', 'female') ?>
        <?php echo select('edit_status_block', 'status', 'active', 'inactive') ?>
      <?php endforeach; ?>
      <input type="submit" id="edit_submit" value="change" class="btn success">
    </form>
  </div>
</section>
