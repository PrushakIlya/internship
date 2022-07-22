<?php

namespace Prushak\Internship\HTTP\Controller;

class ApiController extends BaseController
{
    public function checkEmail(): string
    {
        $results = json_decode(file_get_contents('php://input'), true);
        $result = parent::getUsersModel()->selectByEmail($results);

        if (!empty($result)) {
            return json_encode(true);
        }

        return json_encode(false);
    }
}
