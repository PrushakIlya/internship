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
        parent::setCookie('autorized', '', 1, '/', '-');
        header('Location: /autorization');
    }

    public function check()
    {
        $result = parent::getClientsModel()->selectEqualEmailName($_POST['auth_email'], $_POST['auth_name']);
        $password = password_verify($_POST['auth_password'], $result[0]['password']);
        $results = parent::getClientsModel()->selectEqualPassword($result[0]['password']);

        if (!empty($results) && $password) {
            parent::setCookie('autorized', $results[0]['id'], 3600, '/');

            return header('Location: /autorization/ifAutorized');
        }
        setcookie('error', 'It is not correct!One more', time() + 2, '/autorization');
        header('Location: /autorization');
    }
}
