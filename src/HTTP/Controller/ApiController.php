<?php

namespace Prushak\Internship\HTTP\Controller;

use Prushak\Internship\HTTP\Models\UsersModel;

class ApiController extends BaseController
{
  private $users_model;

  public function __construct()
  {
    $this->users_model = new UsersModel;
  }

  public function checkEmail()
  {
    $data = json_decode(file_get_contents('php://input'), true);
    $result = $this->users_model->getEmail($data);
    return json_encode(!empty($result));
  }
}