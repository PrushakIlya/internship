<?php

namespace Prushak\Internship\HTTP\Controller;

session_start();

class AuntificationController extends BaseController
{
    public function __construct()
    {
        new BaseController();// why without it does not see variables????
        // if (!$_COOKIE) {
        //     $_SESSION['count'] = 0;
        // }

        // if (isset($_COOKIE['bloked'])) {
        //     header('HTTP/1.0 404 Not Found');
        //     include '../resources/views/blocked.php';
        //     die();
        // }
    }

    public function index(): void
    {
        view('index');
        // parent::getCheckService()->checkSessionCookies(parent::view());
    }

    public function authorisation(): void
    {
        view('authorisation');
        // parent::getCheckService()->checkSessionCookies(parent::view());
    }

    public function ifAutorized(): void
    {
        if (!isset($_SESSION['autorized']) && !isset($_COOKIE['autorized'])) {
            header('Location: /index');
        } elseif (isset($_SESSION['autorized'])) {
            $id = $_SESSION['autorized'];
            $result = parent::getUsersModel()->selectById($id);
            $results = parent::getFilesModel()->selectByUserId($id);
            parent::view([$results, $result]);
        } else {
            $id = $_COOKIE['autorized'];
            $result = parent::getUsersModel()->selectById($id);
            $results = parent::getFilesModel()->selectByUserId($id);
            parent::view([$results, $result]);
        }
    }

    // public function logout(): void
    // {
    //     setcookie('autorized', ' ', time() - 1, '/combine', self::getDomain());
    //     $_SESSION = [];
    //     header('Location: /combine/registration');
    // }

    public function store(): void
    {
        parent::getUsersModel()->store(parent::passwordHash($_POST['password']));
        setcookie('success', 'welcome', time() + 2, '/', self::getDomain());
        header('Location: /');
    }

    public function check()
    {
        $result = parent::getUsersModel()->selectEqualEmailName($_POST['email'], $_POST['name']);
        var_dump($result);
        // self::countToBlock(3, '/');
        $password = password_verify($_POST['password'], $result[0]['password']);
        $results = parent::getUsersModel()->selectEqualPassword($result[0]['password']);

        if (!empty($results) && $password) {
            count($_POST) === 4 ? setcookie('autorized', $result[0]['id'], time() + 3600 * 24 * 7, '/', self::getDomain()) && $_SESSION = [] : $_SESSION['autorized'] = $result[0]['id'];

            return header('Location: /ifAutorized');
        }
    }

    // public function storeUploded(): void
    // {
    //     $types = ['image/png', 'image/jpeg', 'text/plain'];
    //     $typeFile = $_FILES['file']['type'];
    //     $tmpName = $_FILES['file']['tmp_name'];
    //     $fileSize = $_FILES['file']['size'];
    //     $fileName = uniqid('upload_');
    //     $type = explode('/', $typeFile);
    //     $id = 0;
    //     var_dump($type[1]);
    //     if (isset($_SESSION['autorized'])) {
    //         $id = $_SESSION['autorized'];
    //         header('Location: /combine/ifAutorized');
    //     } elseif (isset($_COOKIE['autorized'])) {
    //         $id = $_COOKIE['autorized'];
    //         header('Location: /combine/ifAutorized');
    //     } else {
    //         header('Location: /combine/registration');
    //     }

    //     if ($types[count($types) - 1] === $typeFile) {
    //         $results = parent::getCheckService()->contenerUpload($fileName, $tmpName, 'text');
    //         parent::successUploadCombine($results, $fileName, $typeFile, $fileSize, $id);
    //     } else {
    //         foreach ($types as $item) {
    //             if ($typeFile === $item) {
    //                 $results = parent::getCheckService()->contenerUpload($fileName, $tmpName, 'img', $type[1]);
    //                 parent::successUploadCombine($results, $fileName, $typeFile, $fileSize, $id);
    //             }
    //         }
    //     }
    // }
}
