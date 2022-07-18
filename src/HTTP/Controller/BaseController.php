<?php

namespace Prushak\Internship\HTTP\Controller;

use Prushak\Internship\Models\UsersModel;
use Prushak\Internship\Services\ApiService;
use Prushak\Internship\Services\CheckService;

class BaseController
{
  private static object $usersModel;
  private static array $api;
  private static object $checkService;
  private static object $apiService;

  public function __construct()
  {
    self::$usersModel = new UsersModel;
    self::$api = include '../routes/api.php';
    self::$checkService = new CheckService;
    self::$apiService = new ApiService;
  }

  public static function getUsersModel()
  {
    return self::$usersModel;
  }

  public static function getCheckService()
  {
    return self::$checkService;
  }

  public static function getApi($param)
  {
    return self::$api[$param] . self::$api['token'];
  }
  public static function getApiElem($param, $elem)
  {
    return self::$api[$param] . $elem . self::$api['token'];
  }
  public static function getApiService()
  {
    return self::$apiService;
  }
}
