<?php

namespace Prushak\Internship\HTTP\Controller;

session_start();

class CombineController extends BaseController
{
    public function __construct()
    {
        parent::__construct();
        if (!$_COOKIE) {
            $_SESSION['count'] = 0;
        }

        if (isset($_COOKIE['bloked'])) {
            header('HTTP/1.0 404 Not Found');
            include '../resources/views/blocked.php';
            die();
        }
    }

    public function registration(): void
    {
        $this->getCheckService()->checkSessionCookies($this->view());
    }

    public function authorization(): void
    {
        $this->getCheckService()->checkSessionCookies($this->view());
    }

    public function ifAutorized(): void
    {
        if (!isset($_SESSION['autorized']) && !isset($_COOKIE['autorized'])) {
            header('Location: /combine/registration');
        } elseif (isset($_SESSION['autorized'])) {
            $id = $_SESSION['autorized'];
            $result = $this->getCombineUsersModel()->selectById($id);
            $results = $this->getCombineFilesModel()->selectByUserId($id);
            $this->view([$results, $result]);
        } else {
            $id = $_COOKIE['autorized'];
            $result = $this->getCombineUsersModel()->selectById($id);
            $results = $this->getCombineFilesModel()->selectByUserId($id);
            $this->view([$results, $result]);
        }
    }

    public function logout(): void
    {
        setcookie('autorized', ' ', time() - 1, '/combine', $this->getDomain());
        $_SESSION = [];
        header('Location: /combine/registration');
    }

    public function store(): void
    {
        $this->getCombineUsersModel()->store($this->passwordHash($_POST['password']));
        setcookie('success', 'welcome', time() + 2, '/combine', $this->getDomain());
        header('Location: /combine/registration');
    }

    public function check()
    {
        $result = $this->getCombineUsersModel()->selectEqualEmailName($_POST['auth_email'], $_POST['auth_name']);
        $this->countToBlock(3);
        $password = password_verify($_POST['auth_password'], $result[0]['password']);
        $results = $this->getCombineUsersModel()->selectEqualPassword($result[0]['password']);

        if (!empty($results) && $password) {
            count($_POST) === 4 ? setcookie('autorized', $result[0]['id'], time() + 3600 * 24 * 7, '/combine', $this->getDomain()) && $_SESSION = [] : $_SESSION['autorized'] = $result[0]['id'];

            return header('Location: /combine/ifAutorized');
        }
    }

    public function storeUploded(): void
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
            header('Location: /combine/ifAutorized');
        } elseif (isset($_COOKIE['autorized'])) {
            $id = $_COOKIE['autorized'];
            header('Location: /combine/ifAutorized');
        } else {
            header('Location: /combine/registration');
        }

        if ($types[count($types) - 1] === $typeFile) {
            $results = $this->getCheckService()->contenerUpload($fileName, $tmpName, 'text');
            $this->successUploadCombine($results, $fileName, $typeFile, $fileSize, $id);
        } else {
            foreach ($types as $item) {
                if ($typeFile === $item) {
                    $results = $this->getCheckService()->contenerUpload($fileName, $tmpName, 'img', $type[1]);
                    $this->successUploadCombine($results, $fileName, $typeFile, $fileSize, $id);
                }
            }
        }
    }
}
