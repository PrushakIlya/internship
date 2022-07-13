<?php
function inputError($id_error, $type, $name_id, $value = '')
{
  $title = ucfirst($name_id);
  return "
          <div id=$id_error class='errors'></div>
          <div class='input_block'>
            <label for=$name_id>$title: </label>
            <input type=$type name=$name_id id=$name_id value=$value>
          </div>
          ";
}
