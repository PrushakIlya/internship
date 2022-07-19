<?php

namespace Prushak\Internship\HTTP\Controller;

class AuntificationController extends BaseController
{
    public function registration(): void
    {
        parent::ifHaveCookie();
    }

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
        parent::setCookie('autorized', ' ', '/', 1, '-');
        header('Location: /registration');
    }

    public function store()
    {
        parent::getClientsModel()->store(parent::passwordHash($_POST['reg_password']));
        $results = parent::getClientsModel()->selectByEmail($_POST['reg_email']);
        parent::setCookie('autorized', $results[0]['id'], '/', 3600);

        header('Location: /auntification/ifAutorized');
    }
    public function check()
    {
        $results = parent::getClientsModel()->selectByEmail($_POST['auth_email']);
        $password = password_verify($_POST['auth_password'], $results[0]['password']);
        if (!empty($results) && $password) {
            parent::setCookie('autorized', $results[0]['id'], '/', 3600);

            return header('Location: /auntification/ifAutorized');
        }
        setcookie('error', 'It is not correct!One more', time() + 2, '/autorization');
        header('Location: /autorization');
    }
}
