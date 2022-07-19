<?php

function select($class, $nameId, $optionOne, $optionTwo)
{
    $title = ucfirst($nameId);

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
