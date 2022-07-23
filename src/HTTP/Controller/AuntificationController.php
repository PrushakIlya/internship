<?php

namespace Prushak\Internship\HTTP\Controller;

session_start();

class AuntificationController extends BaseController
{
    public function __construct()
    {
        new BaseController();// why without it does not see variables????
        if (!$_COOKIE) {
            $_SESSION['count'] = 0;
        }

        $result = parent::getLockedModel()->getByIp($_SERVER['REMOTE_ADDR']);

        if (!empty($result)) {
            if (date('Y-m-d H:i:s') === $result[0]['unlocked_date']) {
                parent::getLockedModel()->destroy($_SERVER['REMOTE_ADDR']);
            } else {
                header('HTTP/1.0 404 Not Found');
                include '../resources/views/status/403.twig';
                die();
            }
        }
    }

    public function index(): void
    {
        parent::getCheckService()->checkSessionCookies();
        view('index');
    }

    public function authorisation(): void
    {
        parent::getCheckService()->checkSessionCookies();
        view('authorisation');
    }

    public function ifAutorized(): void
    {
        if (!isset($_SESSION['autorized']) && !isset($_COOKIE['autorized'])) {
            header('Location: /');
        } elseif (isset($_SESSION['autorized'])) {
            $id = $_SESSION['autorized'];
            $users = parent::getUsersModel()->selectById($id);
            $files = parent::getFilesModel()->selectByUserId($id);
            view('if_autorized', ['users' => $users, 'files' => $files]);
        } else {
            $id = $_COOKIE['autorized'];
            $users = parent::getUsersModel()->selectById($id);
            $files = parent::getFilesModel()->selectByUserId($id);
            view('if_autorized', ['users' => $users, 'files' => $files]);
        }
    }

    public function logout(): void
    {
        setcookie('autorized', ' ', time() - 1, '/', self::getDomain());
        $_SESSION = [];
        header('Location: /');
    }

    public function store(): void
    {
        parent::getUsersModel()->store(parent::passwordHash($_POST['password']));
        setcookie('success', 'welcome', time() + 2, '/', self::getDomain());
        header('Location: /');
    }

    public function check()
    {
        $result = parent::getUsersModel()->selectEqualEmailName($_POST['email'], $_POST['firstname']);
        self::countToBlock(3, '/authorisation', $result);


        $password = password_verify($_POST['password'], $result[0]['password']);
        $results = parent::getUsersModel()->selectEqualPassword($result[0]['password']);

        if (!empty($results) && $password) {
            count($_POST) === 4 ? setcookie('autorized', $result[0]['id'], time() + 3600 * 24 * 7, '/', self::getDomain()) && $_SESSION = [] : $_SESSION['autorized'] = $result[0]['id'];

            return header('Location: /ifAutorized');
        }
    }
}
