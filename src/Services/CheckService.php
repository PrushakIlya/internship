<?php

namespace Prushak\Internship\Services;

class CheckService
{
    public function splitInputDestroy($model): void
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

    public function splitInputMassDestroy(): array
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

    private function checkFile($folder, $fileName): bool
    {
        $allFiles = scandir($folder);
        foreach ($allFiles as $file) {
            if ($file === $fileName) {
                return true;
            }
        }

        return false;
    }

    private function checkExistFolder($folder): void
    {
        strlen(realpath($_SERVER['DOCUMENT_ROOT'] . '/' . $folder)) === 0 && @mkdir($folder);
    }

    public function contenerUpload($fileText, $tmpName, $name, $nameExplode = 'text'): array
    {
        $fileName = $fileText . '.' . $nameExplode;
        $this->checkExistFolder($name);
        move_uploaded_file($tmpName, $name . '/' . $fileName);
        $result = $this->checkFile($name, $fileName);

        return [$result, $fileName];
    }
}
