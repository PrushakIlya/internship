<?php

namespace Prushak\Internship\HTTP\Controller;

class UploadController extends BaseController
{
    public function store(): void
    {
        $types = ['image/png', 'image/jpeg', 'text/plain'];
        $typeFile = $_FILES['file']['type'];
        $tmpName = $_FILES['file']['tmp_name'];
        $fileSize = $_FILES['file']['size'];
        $fileName = uniqid('upload_');
        $type = explode('/', $typeFile);
        $id = 0;

        if (isset($_SESSION['autorized'])) {
            $id = $_SESSION['autorized'];
            header('Location: /ifAutorized');
        } elseif (isset($_COOKIE['autorized'])) {
            $id = $_COOKIE['autorized'];
            header('Location: /ifAutorized');
        } else {
            header('Location: /');
        }

        var_dump($_SESSION);
        if ($types[count($types) - 1] === $typeFile) {
            $results = parent::getCheckService()->contenerUpload($fileName, $tmpName, 'text');
            parent::successUpload($results, $fileName, $typeFile, $fileSize, $id);
        } else {
            foreach ($types as $item) {
                if ($typeFile === $item) {
                    $results = parent::getCheckService()->contenerUpload($fileName, $tmpName, 'img', $type[1]);
                    parent::successUpload($results, $fileName, $typeFile, $fileSize, $id);
                }
            }
        }
    }
}
