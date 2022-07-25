<?php

namespace Prushak\Internship\HTTP\Controller;

class RegistrationController extends BaseController
{
    public function index(): void
    {
        $this->view();
    }
    public function store(): void
    {
        $this->getClientsModel()->store($this->passwordHash($_POST['password']));
        setcookie('success', 'welcome', time() + 2, '/registration', $this->getDomain());
        header('Location: /registration');
    }
}
