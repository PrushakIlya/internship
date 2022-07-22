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

    public function contenerUpload($fileText, $tmpName, $name, $nameExplode = 'text')
    {
        $fileName = $fileText . '.' . $nameExplode;
        move_uploaded_file($tmpName, $name . '/' . $fileName);
        $this->checkExistFolder($name);
        $result = $this->checkFile($name, $fileName);

        return [$result, $fileName];
    }

    public function checkSessionCookies($view)
    {
        if (isset($_SESSION['autorized']) || isset($_COOKIE['autorized'])) {
            header('Location: /combine/ifAutorized');
        } else {
            $view;
        }
    }
}
