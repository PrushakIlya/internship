<?php

namespace Prushak\Internship\HTTP\Controller;

use Prushak\Internship\HTTP\Models\UsersModel;


class FrontController extends BaseController
{
    private $users_model;

    public function __construct()
    {
        $this->users_model = new UsersModel;
    }

    public function index()
    {
        $results = $this->users_model->index();
        include '../resources/views/layout.php';
    }

    public function edit($id)
    {
        $results = $this->users_model->elemById($id);
        include '../resources/views/layout.php';
    }

    public function create()
    {
        include '../resources/views/layout.php';
    }

    public function store()
    {
        header('Location: /');
        $this->users_model->store();
    }

    public function update($id)
    {
        header('Location: /');
        $this->users_model->update($id);
    }

    public function destroy($id)
    {
        header('Location: /');
        $this->users_model->destroy($id);
    }

    public function mass_destroy()
    {
        if (preg_match('~^([0-9]+)-([0-9]+)~', $_POST['ids'], $matches)) {
            $arr = explode('-', $_POST['ids']);
            $first_elem = array_shift($arr);
            $range = array_pop($arr) - $first_elem + 1;
            for ($i = 0; $i < $range; $i++) {
                $this->users_model->destroy($first_elem);
                $first_elem++;
            }
        }
        header('Location: /');
    }
}
