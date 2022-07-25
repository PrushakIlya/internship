<?php

namespace Prushak\Internship\HTTP\Controller;

class FrontController extends BaseController
{
    public function index(): void
    {
        $results = $this->getUsersModel()->index();
        $this->view($results);
    }

    public function edit($id): void
    {
        $results = $this->getUsersModel()->elemById($id);
        $this->view($results);
    }

    public function create(): void
    {
        $this->view();
    }

    public function store(): void
    {
        header('Location: /');
        $this->getUsersModel()->store();
    }

    public function update($id): void
    {
        header('Location: /');
        $this->getUsersModel()->update($id);
    }

    public function destroy($id): void
    {
        header('Location: /');
        $this->getUsersModel()->destroy($id);
    }

    public function massDestroy(): void
    {
        header('Location: /');
        $this->getCheckService()->splitInputDestroy($this->getUsersModel());
    }

    public function upload(): void
    {
        $results = $this->getFilesModel()->index();
        $this->view($results);
    }

    public function saveUpload(): void
    {
        header('Location: /upload');
        $types = ['image/png', 'image/jpeg', 'text/plain'];
        $typeFile = $_FILES['file']['type'];
        $tmpName = $_FILES['file']['tmp_name'];
        $fileName = uniqid('text_');

        if ($types[count($types) - 1] === $typeFile) {
            $results = $this->getCheckService()->contenerUpload($fileName, $tmpName, 'text');
            $this->successUpload($results, $fileName, '.txt', $typeFile);
        }

        foreach ($types as $type) {
            if ($typeFile === $type) {
                $arr = explode('/', $type);
                $results = $this->getCheckService()->contenerUpload($fileName, $tmpName, 'img', $arr[1]);
                $this->successUpload($results, $fileName, $arr, $typeFile);
            }
        }
    }
}
