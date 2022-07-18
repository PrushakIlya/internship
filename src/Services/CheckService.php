<?php

namespace Prushak\Internship\Services;

class CheckService
{
  public function splitInputDestroy($model)
  {
    if (preg_match('~^([0-9]+)-([0-9]+)~', $_POST['ids'], $matches)) {
      $arr = explode('-', $_POST['ids']);
      $firstElem = array_shift($arr);
      $range = array_pop($arr) - $firstElem + 1;
      for ($i = 0; $i < $range; $i++) {
        $model->destroy($firstElem);
        $firstElem++;
      }
    }
  }

  public function splitInputMassDestroy()
  {
    $elems = [];
    if (preg_match('~^([0-9]+)-([0-9]+)~', $_POST['ids'], $matches)) {
      $arr = explode('-', $_POST['ids']);
      $firstElem = array_shift($arr);
      $range = array_pop($arr) - $firstElem + 1;
      for ($i = 0; $i < $range; $i++) {
        array_push($elems, $firstElem);
        $firstElem++;
      }
    }
    return $elems;
  }
}
