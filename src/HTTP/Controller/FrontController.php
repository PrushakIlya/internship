<?php

namespace Prushak\Internship\HTTP\Controller;

class FrontController extends BaseController
{
    public function index(): void
    {
        $results = parent::getUsersModel()->index();
        include '../resources/views/layout.php';
    }

    public function edit($id): void
    {
        $results = parent::getUsersModel()->elemById($id);
        include '../resources/views/layout.php';
    }

    public function create(): void
    {
        include '../resources/views/layout.php';
    }

    public function store(): void
    {
        header('Location: /');
        parent::getUsersModel()->store();
    }

    public function update($id): void
    {
        header('Location: /');
        parent::getUsersModel()->update($id);
    }

    public function destroy($id): void
    {
        header('Location: /');
        parent::getUsersModel()->destroy($id);
    }

    public function massDestroy(): void
    {
        header('Location: /');
        parent::getCheckService()->splitInputDestroy(parent::getUsersModel());
    }

    public function upload()
    {
        return __METHOD__;
    }
}
