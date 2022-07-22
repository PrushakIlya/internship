<?php

namespace Prushak\Internship\HTTP\Controller;

class UploadController extends BaseController
{
    // public function index(): void
    // {
    //     $results = parent::getUsersModel()->index();
    //     parent::view($results);
    // }

    // public function edit($id): void
    // {
    //     $results = parent::getUsersModel()->elemById($id);
    //     parent::view($results);
    // }

    // public function create(): void
    // {
    //     parent::view();
    // }

    // public function store(): void
    // {
    //     header('Location: /');
    //     parent::getUsersModel()->store();
    // }

    // public function update($id): void
    // {
    //     header('Location: /');
    //     parent::getUsersModel()->update($id);
    // }

    // public function destroy($id): void
    // {
    //     header('Location: /');
    //     parent::getUsersModel()->destroy($id);
    // }

    // public function massDestroy(): void
    // {
    //     header('Location: /');
    //     parent::getCheckService()->splitInputDestroy(parent::getUsersModel());
    // }

    public function upload(): void
    {
        $results = parent::getFilesModel()->index();
        parent::view($results);
    }

    public function saveUpload(): void
    {
        header('Location: /upload');
        $types = ['image/png', 'image/jpeg', 'text/plain'];
        $typeFile = $_FILES['file']['type'];
        $tmpName = $_FILES['file']['tmp_name'];
        $fileName = uniqid('text_');

        if ($types[count($types) - 1] === $typeFile) {
            $results = parent::getCheckService()->contenerUpload($fileName, $tmpName, 'text');
            parent::successUpload($results, $fileName, '.txt', $typeFile);
        }

        foreach ($types as $type) {
            if ($typeFile === $type) {
                $arr = explode('/', $type);
                $results = parent::getCheckService()->contenerUpload($fileName, $tmpName, 'img', $arr[1]);
                parent::successUpload($results, $fileName, $arr, $typeFile);
            }
        }
    }
}
