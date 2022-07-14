<?php
function select($class, $name_id, $option_1, $option_2)
{
  $title = ucfirst($name_id);
  return "
      <div class='$class'>
        <label for='$name_id'>$title: </label>
        <select name='$name_id' id='$name_id'>
          <option value='$option_1'>$option_1</option>
          <option value='$option_2'>$option_2</option>
        </select>
      </div>
  ";
}
