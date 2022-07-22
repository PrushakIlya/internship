<?php

namespace Prushak\Internship\HTTP\Controller;

class AutorizationController extends BaseController
{
    public function ifAutorized(): void
    {
        $results = parent::getClientsModel()->selectById($_COOKIE['autorized']);
        parent::view($results);
    }

    public function autorization(): void
    {
        parent::ifHaveCookie();
    }

    public function logout()
    {
        setcookie('autorized', '', time() - 1, '/autorization', self::getDomain());
        header('Location: /autorization');
    }

    public function check()
    {
        $result = parent::getClientsModel()->selectEqualEmailName($_POST['auth_email'], $_POST['auth_name']);
        $password = password_verify($_POST['auth_password'], $result[0]['password']);
        $results = parent::getClientsModel()->selectEqualPassword($result[0]['password']);

        if (!empty($results) && $password) {
            setcookie('autorized', $results[0]['id'], time() + 3600, '/autorization', self::getDomain());

            return header('Location: /autorization/ifAutorized');
        }
        setcookie('error', 'It is not correct!One more', time() + 2, '/autorization', self::getDomain());
        header('Location: /autorization');
    }
}
