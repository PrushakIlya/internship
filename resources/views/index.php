<?php
$href_edit = '';
$href_destroy = '';
$href_create = '';
$action_mass_destroy = '';

if ($_SERVER['REQUEST_URI'] === '/api') {
  $href_edit = '/api/edit/';
  $href_destroy = '/api/destroy/';
  $href_create = '/api/create';
  $action_mass_destroy = '/api/massDestroy';
} else {
  $href_edit = '/edit//';
  $href_destroy = '/destroy//';
  $href_create = '/create';
  $action_mass_destroy = '/massDestroy';
}

?>

<section class="index">
  <div class="wrapper">
    <div class="index_panel">
      <div class="panel_block">
        <a href="/"><button class="btn black">Task-1</button></a>
        <a href="/api" class="index_panel__button"><button class="btn black">Task-2</button></a>
      </div>
      <div class="panel_block">
        <a href="<?php echo $href_create ?>"><button class="btn success">Add New</button></a>
        <form action="<?php echo $action_mass_destroy ?>" method="POST" class="index_panel__button">
          <input type="submit" class="btn delete" value="Mass Delete">
          <input type="text" name="ids" placeholder="example: 1-4 (by №)">
        </form>
      </div>
    </div>
    <div class="grid_contener">
      <?php foreach ($results as $item) : ?>
        <div class="grid-item">
          <div><?php echo "№" . $item['id'] ?></div>
          <div><?php echo $item['name'] ?></div>
          <div><?php echo $item['email'] ?></div>
          <div><?php echo $item['gender'] === 1 ? 'male' : 'female' ?></div>
          <div><?php echo $item['status'] === 1 ? 'active' : 'inactive' ?></div>
          <div>
            <a href='<?php echo $href_edit . $item['id'] ?>'><button class='btn success' id='<?php $item['id'] ?>'>edit</button></a>
            <a href='<?php echo $href_destroy . $item['id'] ?>'> <button class='btn delete' id='<?php $item['id'] ?>'>delete</a>
          </div>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>