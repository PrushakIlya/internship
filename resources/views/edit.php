<?php
include 'components/inputError.php';
include 'components/select.php';
?>
<section class="edit">
  <div class="wrapper">
    <form action="/update/<?php echo $id ?>" method="POST">
      <?php foreach ($results as $item) : ?>
        <?php echo inputError('error_name', 'text', 'name', $item['name']) ?>
        <?php echo inputError('error_lastname', 'text', 'lastname', $item['lastname']) ?>
        <?php echo inputError('error_email', 'text', 'email', $item['email']) ?>
        <?php echo select('gender_block', 'gender', 'male', 'female') ?>
        <?php echo select('status_block', 'status', 'active', 'inactive') ?>
      <?php endforeach; ?>
      <input type="submit" id="submit" value="change" class="btn success">
    </form>
  </div>
</section>
<script src="/js/edit.js" type="module" defer></script>