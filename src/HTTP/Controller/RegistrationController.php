<?php

namespace Prushak\Internship\HTTP\Controller;

class RegistrationController extends BaseController
{
    public function index(): void
    {
        parent::view();
    }
    public function store(): void
    {
        parent::getClientsModel()->store(parent::passwordHash($_POST['password']));
        setcookie('success', 'welcome', time() + 2, '/registration');
        header('Location: /registration');
    }
}
