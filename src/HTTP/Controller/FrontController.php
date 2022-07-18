<?php

namespace Prushak\Internship\HTTP\Controller;

class FrontController extends BaseController
{
    public function index(): void
    {
        $results = parent::getUsersModel()->index();
        include '../resources/views/layout.php';
    }

    public function edit($id): void
    {
        $results = parent::getUsersModel()->elemById($id);
        include '../resources/views/layout.php';
    }

    public function create(): void
    {
        include '../resources/views/layout.php';
    }

    public function store(): void
    {
        header('Location: /');
        parent::getUsersModel()->store();
    }

    public function update($id): void
    {
        header('Location: /');
        parent::getUsersModel()->update($id);
    }

    public function destroy($id): void
    {
        header('Location: /');
        parent::getUsersModel()->destroy($id);
    }

    public function massDestroy(): void
    {
        header('Location: /');
        parent::getCheckService()->splitInputDestroy(parent::getUsersModel());
    }

    public function upload()
    {
        $results = parent::getFilesModel()->index();

        $loader = new \Twig\Loader\FilesystemLoader('../resources/views');
        $twig = new \Twig\Environment($loader, []);

        echo $twig->render('upload.twig', array(
            'results' => $results,
        ));
        // var_dump($results);
        // include '../resources/views/layout.php';
    }

    public function saveUpload()
    {
        header('Location: /upload');
        $types = ['image/png', 'image/jpeg', 'text/plain'];
        $type_file = $_FILES['file']['type'];
        $tmp_name = $_FILES['file']['tmp_name'];
        $file_text = uniqid('text_');

        if ($types[count($types) - 1] === $type_file) {
            $results = parent::getCheckService()->contenerUpload($file_text, $tmp_name, 'text');
            parent::successUpload($results, $file_text, '.txt', $type_file);
        }

        foreach ($types as $type) {
            if ($type_file === $type) {
                $arr = explode('/', $type);
                $results = parent::getCheckService()->contenerUpload($file_text, $tmp_name, 'img', $arr[1]);
                parent::successUpload($results, $file_text, $arr, $type_file);
            }
        }
    }
}
