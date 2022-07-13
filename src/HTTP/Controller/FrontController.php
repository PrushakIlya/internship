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

    public function update($id)
    {
        $this->users_model->update($id);
        header('Location: /');
    }

    public function destroy($id)
    {
        $this->users_model->destroy($id);
        header('Location: /');
    }

    public function mass_destroy()
    {
        if (preg_match('~^([0-9]+)-([0-9]+)~', $_POST['ids'], $matches)) {
            $arr = explode('-', $_POST['ids']);
            $first_elem = array_shift($arr);
            $range = array_pop($arr) - $first_elem + 1;
            var_dump($range);
            for ($i = 0; $i < $range; $i++) {
                $this->users_model->destroy($first_elem);
                $first_elem++;
            }
        }
        header('Location: /');
    }

    public function create()
    {
        include '../resources/views/layout.php';
    }

    public function store()
    {
        $this->users_model->store();
        header('Location: /');
    }
}
