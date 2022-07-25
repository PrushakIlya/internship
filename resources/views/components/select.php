<?php
function select($class, $name_id, $option_1, $option_2)
{
    $title = ucfirst($name_id);
    return "
      <div class='$class'>
        <label for='$nameId'>$title: </label>
        <select name='$nameId' id='$nameId'>
          <option value='$optionOne'>$optionOne</option>
          <option value='$optionTwo'>$optionTwo</option>
        </select>
      </div>
  ";
}
