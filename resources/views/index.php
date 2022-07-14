<section class="index">
  <div class="wrapper">
    <div class="index_panel">
      <button class="btn success"><a href="/create">Add New</a></button>
      <form action="/mass_destroy" method="POST" class="index_panel__delete">
        <input type="submit" class="btn delete" value="Mass Delete">
        <input type="text" name="ids" placeholder="example: 1-4 (by №)">
      </form>
    </div>
    <div class="grid_contener">
      <?php foreach ($results as $item) : ?>
        <div class="grid-item">
          <div><?php echo "№".$item['id'] ?></div>
          <div><?php echo $item['name'] ?></div>
          <div><?php echo $item['lastname'] ?></div>
          <div><?php echo $item['email'] ?></div>
          <div><?php echo $item['gender'] === 1 ? 'male' : 'female' ?></div>
          <div><?php echo $item['status'] === 1 ? 'active' : 'inactive' ?></div>
          <div>
            <button class='btn success' id='<?php $item['id'] ?>'><a href='/edit/<?php echo $item['id'] ?>'>edit</a></button>
            <button class='btn delete' id='<?php $item['id'] ?>'><a href='/destroy/<?php echo $item['id'] ?>'>delete</a></button>
          </div>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>