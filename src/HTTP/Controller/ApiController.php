<?php

namespace Prushak\Internship\HTTP\Controller;

class ApiController extends BaseController
{
    public function checkEmail(): string
    {
        return parent::getApiService()->checkEmail(parent::getUsersModel()->getEmail(parent::getApiService()->getData()));
    }

    public function checkEmailGo(): string
    {
        $results = parent::getApiService()->curlReturn(parent::getApi('get'));

        return parent::getApiService()->checkEmailGo($results);
    }
    public function checkEmailForm(): string
    {
        $results = json_decode(file_get_contents('php://input'), true);
        $result = parent::getClientsModel()->selectByEmail($results);
        if (!empty($result)) {
            return json_encode(true);
        }

        return json_encode(false);
    }
    public function checkEmailReg(): string
    {
        $result = json_decode(file_get_contents('php://input'), true);
        $results = parent::getClientsModel()->selectByEmail($result);

        if (!empty($results)) {
            return json_encode(true);
        }

        return json_encode(false);
    }

    public function checkCombineEmail(): string
    {
        $result = json_decode(file_get_contents('php://input'), true);
        $results = parent::getCombineUsersModel()->selectByEmail($result);

        if (!empty($results)) {
            return json_encode(true);
        }

        return json_encode(false);
    }
}
