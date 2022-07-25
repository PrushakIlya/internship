<?php

namespace Prushak\Internship\HTTP\Controller;

class ApiController extends BaseController
{
    public function checkEmail(): string
    {
        return $this->getApiService()->checkEmail($this->getUsersModel()->getEmail($this->getApiService()->getData()));
    }

    public function checkEmailGo(): string
    {
        $results = $this->getApiService()->curlReturn($this->getApi('get'));

        return $this->getApiService()->checkEmailGo($results);
    }
    public function checkEmailForm(): string
    {
        $results = json_decode(file_get_contents('php://input'), true);
        $result = $this->getClientsModel()->selectByEmail($results);
        if (!empty($result)) {
            return json_encode(true);
        }

        return json_encode(false);
    }
    public function checkEmailReg(): string
    {
        $result = json_decode(file_get_contents('php://input'), true);
        $results = $this->getClientsModel()->selectByEmail($result);

        if (!empty($results)) {
            return json_encode(true);
        }

        return json_encode(false);
    }

    public function checkCombineEmail(): string
    {
        $result = json_decode(file_get_contents('php://input'), true);
        $results = $this->getCombineUsersModel()->selectByEmail($result);

        if (!empty($results)) {
            return json_encode(true);
        }

        return json_encode(false);
    }
}
