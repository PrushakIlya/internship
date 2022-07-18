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
}
