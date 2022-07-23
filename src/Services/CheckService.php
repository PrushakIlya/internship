<?php

namespace Prushak\Internship\Services;

class CheckService
{
    private function checkFile($folder, $fileName): bool
    {
        $allFiles = scandir('storage/'.$folder);
        foreach ($allFiles as $file) {
            if ($file === $fileName) {
                return true;
            }
        }

        return false;
    }

    private function checkExistFolder($folder): void
    {
        strlen(realpath($_SERVER['DOCUMENT_ROOT'] . '/storage/' . $folder)) === 0 && mkdir('storage/'.$folder);
    }

    public function contenerUpload($fileText, $tmpName, $name, $nameExplode = 'text')
    {
        $fileName = $fileText . '.' . $nameExplode;
        $this->checkExistFolder($name);
        move_uploaded_file($tmpName, 'storage'.'/'.$name . '/' . $fileName);
        $result = $this->checkFile($name, $fileName);

        return [$result, $fileName];
    }

    public function checkSessionCookies()
    {
        if (isset($_SESSION['autorized']) || isset($_COOKIE['autorized'])) {
            return header('Location: /ifAutorized');
        }
    }
}
