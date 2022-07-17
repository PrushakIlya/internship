<?php
function inputError($id_error, $type, $name_id, $name, $value = '')
{
  $title = ucfirst($name);
  return "
          <div id='$id_error' class='errors'></div>
          <div class='input_block'>
            <label for='$name_id'>$title: </label>
            <input type='$type' name='$name' id='$name_id' value='$value'>
          </div>
          ";
}
