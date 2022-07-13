<section class="edit">
  <div class="wrapper">
    <form action="/update/<?php echo $id ?>" method="POST">
      <?php foreach ($results as $item) : ?>
        <div id="error_name" class="errors"></div>
        <div>
          <label for="name">Name: </label>
          <input type="text" name="name" id="name" value="<?php echo $item['name'] ?>">
        </div>
        <div id="error_lastname" class="errors"></div>
        <div>
          <label for="lastname">Lastname: </label>
          <input type="text" name="lastname" id="lastname" value="<?php echo $item['lastname'] ?>">
        </div>
        <div id="error_email" class="errors"></div>
        <div>
          <label for="email">Email: </label>
          <input type="text" name="email" id="email" value="<?php echo $item['email'] ?>">
        </div>
        <div class="gender_block">
          <label for="gender">Gender: </label>
          <select name="gender" id="gender">
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>
        <div>
          <label for="status">Status: </label>
          <select name="status" id="status">
            <option value="active">active</option>
            <option value="inactive">inactive</option>
          </select>
        </div>
      <?php endforeach; ?>
      <input type="submit" id="submit" value="change">
    </form>
  </div>
</section>
<script src="/js/edit.js" type="module" defer></script>