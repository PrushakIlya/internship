<?php

namespace Prushak\Internship\HTTP\Controller;

class GorestController extends BaseController
{
    private function getResponseData()
    {
        $jsonData = file_get_contents(parent::getApi('get'));

        return json_decode($jsonData);
    }

    public function index(): void
    {
        $results = parent::getApiService()->toArray($this->getResponseData());
        parent::view($results);
    }

    public function edit($id): void
    {
        $results = parent::getApiService()->toArrayEqual($this->getResponseData(), $id);
        parent::view($results);
    }

    public function update($id): void
    {
        header('Location: /two');
        parent::getApiService()->curl(parent::getApiElem('update', $id), 'PUT');
    }

    public function create(): void
    {
        parent::view();
    }

    public function store(): void
    {
        header('Location: /two');
        parent::getApiService()->curl(parent::getApi('post'), 'POST');
    }

    public function destroy($id): void
    {
        header('Location: /two');
        parent::getApiService()->destroy(parent::getApiElem('destroy', $id));
    }

    public function massDestroy(): void
    {
        header('Location: /two');
        $elems = parent::getCheckService()->splitInputMassDestroy();
        foreach ($elems as $elem) {
            parent::getApiService()->destroy(parent::getApiElem('destroy', $elem));
        }
    }
}
