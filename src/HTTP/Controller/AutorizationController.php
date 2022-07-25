<?php

namespace Prushak\Internship\HTTP\Controller;

class AutorizationController extends BaseController
{
    public function ifAutorized(): void
    {
        $results = $this->getClientsModel()->selectById($_COOKIE['autorized']);
        $this->view($results);
    }

    public function autorization(): void
    {
        $this->ifHaveCookie();
    }

    public function logout()
    {
        setcookie('autorized', '', time() - 1, '/autorization', $this->getDomain());
        header('Location: /autorization');
    }

    public function check()
    {
        $result = $this->getClientsModel()->selectEqualEmailName($_POST['auth_email'], $_POST['auth_name']);
        $password = password_verify($_POST['auth_password'], $result[0]['password']);
        $results = $this->getClientsModel()->selectEqualPassword($result[0]['password']);

        if (!empty($results) && $password) {
            setcookie('autorized', $results[0]['id'], time() + 3600, '/autorization', $this->getDomain());

            return header('Location: /autorization/ifAutorized');
        }
        setcookie('error', 'It is not correct!One more', time() + 2, '/autorization', $this->getDomain());
        header('Location: /autorization');
    }
}
