<?php

namespace Prushak\Internship\HTTP\Controller;

session_start();

class CombineController extends BaseController
{
    public function __construct()
    {
        new BaseController();
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
        if (isset($_SESSION['autorized']) || isset($_COOKIE['autorized'])) {
            header('Location: /combine/ifAutorized');
        } else {
            parent::view();
        }
    }

    public function authorization(): void
    {
        if (isset($_SESSION['autorized']) || isset($_COOKIE['autorized'])) {
            header('Location: /combine/ifAutorized');
        } else {
            parent::view();
        }
    }

    public function ifAutorized(): void
    {
        if (isset($_SESSION['autorized'])) {
            $id = $_SESSION['autorized'];
        } else {
            $id = $_COOKIE['autorized'];
        }
        $result = parent::getCombineUsersModel()->selectById($id);
        $results = parent::getCombineFilesModel()->selectByUserId($id);
        parent::view([$results, $result]);
    }

    public function logout(): void
    {
        setcookie('autorized', ' ', time() - 1, '/combine');
        $_SESSION = [];
        header('Location: /combine/registration');
    }

    public function store(): void
    {
        parent::getCombineUsersModel()->store(parent::passwordHash($_POST['password']));
        setcookie('success', 'welcome', time() + 2, '/combine');
        header('Location: /combine/registration');
    }

    public function check()
    {
        $result = parent::getCombineUsersModel()->selectEqualEmailName($_POST['auth_email'], $_POST['auth_name']);
        if (empty($result)) {
            $_SESSION['count'] += 1;
            if ($_SESSION['count'] === 3 && isset($_SERVER['REMOTE_ADDR'])) {
                $_SESSION['count'] = 0;

                self::getLogService()->logCombineError('exceptions');

                setcookie('bloked', 'A lot attempt', time() + 60 * 15, '/combine');
            } else {
                setcookie('error', 'Come again pls', time() + 2, '/combine');
            }

            return header('Location: /combine/authorization');
        }

        $password = password_verify($_POST['auth_password'], $result[0]['password']);
        $results = parent::getCombineUsersModel()->selectEqualPassword($result[0]['password']);

        if (!empty($results) && $password) {
            count($_POST) === 4 ? setcookie('autorized', $result[0]['id'], time() + 3600 * 24 * 7, '/combine') && $_SESSION = [] : $_SESSION['autorized'] = $result[0]['id'];

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
            $results = parent::getCheckService()->contenerUpload($fileName, $tmpName, 'text');
            parent::successUploadCombine($results, $fileName, $typeFile, $fileSize, $id);
        } else {
            foreach ($types as $type) {
                if ($typeFile === $type) {
                    $results = parent::getCheckService()->contenerUpload($fileName, $tmpName, 'img', $type[1]);
                    parent::successUploadCombine($results, $fileName, $typeFile, $fileSize, $id);
                }
            }
        }
    }
}
