<?php

function inputError($idError, $type, $nameId, $name, $value = '')
{
    $title = ucfirst($name);

    return "
          <div id='$idError' class='errors'></div>
          <div class='input_block'>
            <label for='$nameId'>$title: </label>
            <input type='$type' name='$name' id='$nameId' value='$value'>
          </div>
          ";
}
