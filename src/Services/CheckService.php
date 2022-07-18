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

  private function checkFile($folder, $file_name)
  {
    $all_files = scandir($folder);
    foreach ($all_files as $file) {
      if ($file === $file_name) {
        return true;
      }
    }
    return false;
  }

  private function checkExistFolder($folder)
  {
    strlen(realpath($_SERVER['DOCUMENT_ROOT'] . '/' . $folder)) === 0 && @mkdir($folder); // I do not know why the is @ before mkdir. I know mkdir and @mkdir are the same;
  }

  public function contenerUpload($fileText, $tmpName, $name, $nameExplode = 'text')
  {
    $fileName = $fileText . '.' . $nameExplode;
    $this->checkExistFolder($name);
    move_uploaded_file($tmpName, $name . '/' . $fileName);
    $result = $this->checkFile($name, $fileName);
    return [$result, $fileName];
  }
}
