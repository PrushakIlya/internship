<?php

namespace Prushak\Internship\HTTP\Controller;

class GorestController extends BaseController
{
    private function getResponseData()
    {
        $jsonData = file_get_contents($this->getApi('get'));

        return json_decode($jsonData);
    }

    public function index(): void
    {
        $results = $this->getApiService()->toArray($this->getResponseData());
        $this->view($results);
    }

    public function edit($id): void
    {
        $results = $this->getApiService()->toArrayEqual($this->getResponseData(), $id);
        $this->view($results);
    }

    public function update($id): void
    {
        header('Location: /two');
        $this->getApiService()->curl($this->getApiElem('update', $id), 'PUT');
    }

    public function create(): void
    {
        $this->view();
    }

    public function store(): void
    {
        header('Location: /two');
        $this->getApiService()->curl($this->getApi('post'), 'POST');
    }

    public function destroy($id): void
    {
        header('Location: /two');
        $this->getApiService()->destroy($this->getApiElem('destroy', $id));
    }

    public function massDestroy(): void
    {
        header('Location: /two');
        $elems = $this->getCheckService()->splitInputMassDestroy();
        foreach ($elems as $elem) {
            $this->getApiService()->destroy($this->getApiElem('destroy', $elem));
        }
    }
}
