<?php

namespace Prushak\Internship\HTTP\Controller;

use Prushak\Internship\Models\FilesModel;
use Prushak\Internship\Models\UsersModel;
use Prushak\Internship\Services\ApiService;
use Prushak\Internship\Services\CheckService;
use Prushak\Internship\Services\LogService;
use Prushak\Internship\Models\ClientsModel;

class BaseController
{
    private static object $usersModel;
    private static object $filesModel;
    private static object $clientsModel;
    private static array $api;
    private static object $checkService;
    private static object $apiService;
    private static object $logService;

    public function __construct()
    {
        self::$usersModel = new UsersModel();
        self::$filesModel = new FilesModel();
        self::$clientsModel = new ClientsModel();
        self::$api = include '../routes/api.php';
        self::$checkService = new CheckService();
        self::$apiService = new ApiService();
        self::$logService = new LogService();
    }

    public static function view($results = [], string $view = 'layout.php')
    {
        include '../resources/views/'.$view;
    }

    public static function getUsersModel(): object
    {
        return self::$usersModel;
    }

    public static function getClientsModel(): object
    {
        return self::$clientsModel;
    }

    public static function getFilesModel(): object
    {
        return self::$filesModel;
    }

    public static function passwordHash($request)
    {
        return password_hash($request, PASSWORD_BCRYPT);
    }

    public static function getCheckService(): object
    {
        return self::$checkService;
    }

    public static function getApi($param): string
    {
        return self::$api[$param] . self::$api['token'];
    }
    public static function getApiElem($param, $elem): string
    {
        return self::$api[$param] . $elem . self::$api['token'];
    }
    public static function getApiService(): object
    {
        return self::$apiService;
    }
    public static function getLogService(): object
    {
        return self::$logService;
    }

    public static function successUpload($results, $file_text, $arr, $type_file): void
    {
        if ($results[0]) {
            self::getFilesModel()->store($results[1]);
            self::getLogService()->log($file_text . $arr[1], $type_file);
        } else {
            self::getLogService()->log($file_text . $arr[1], $type_file, 'Connect is not stable');
        }
    }

    public static function ifHaveCookie(): void
    {
        if ($_COOKIE && !$_COOKIE['error'] && $_COOKIE['autorized']) {
            header('Location: /autorization/ifAutorized');
        } else {
            self::view();
        }
    }

    public static function setCookie($name, $value, $path, $time, $symbol = '+')
    {
        switch ($symbol) {
            case '+': setcookie($name, $value, 0, $path, time() + $time);

                break;
            case '-': setcookie($name, '', 0, $path, time() - $time);

                break;
        }
    }
}
