<?php

namespace Prushak\Internship\HTTP\Controller;

use Prushak\Internship\Models\FilesModel;
use Prushak\Internship\Models\UsersModel;
use Prushak\Internship\Services\ApiService;
use Prushak\Internship\Services\CheckService;
use Prushak\Internship\Services\LogService;
use Prushak\Internship\Models\ClientsModel;
use Prushak\Internship\Models\CombineFilesModel;
use Prushak\Internship\Models\CombineUsersModel;

class BaseController
{
    private static object $usersModel;
    private static object $filesModel;
    private static object $clientsModel;
    private static array $api;
    private static object $checkService;
    private static object $apiService;
    private static object $logService;
    private static object $combineUsersModel;
    private static object $combineFilesModel;

    public function __construct()
    {
        self::$usersModel = new UsersModel();
        self::$filesModel = new FilesModel();
        self::$clientsModel = new ClientsModel();
        self::$checkService = new CheckService();
        self::$apiService = new ApiService();
        self::$logService = new LogService();
        self::$combineFilesModel = new CombineFilesModel();
        self::$combineUsersModel = new CombineUsersModel();
        self::$api = include '../routes/api.php';
    }

    public static function view($results = [], string $view = 'layout.php')
    {
        include '../resources/views/'.$view;
    }

    public static function getCombineFilesModel()
    {
        return self::$combineFilesModel;
    }

    public static function getCombineUsersModel()
    {
        return self::$combineUsersModel;
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

    public static function successUpload($results, $fileText, $arr, $typeFile, $id): void
    {
        if ($results[0]) {
            self::getCombineFilesModel()->store($results[1], $id);
            self::getLogService()->log($fileText . $arr[1], $typeFile);
        } else {
            self::getLogService()->log($fileText . $arr[1], $typeFile, 'Connect is not stable');
        }
    }

    public static function ifHaveCookie(): void
    {
        if ($_COOKIE && count($_COOKIE) >= 2 && !$_COOKIE['error'] && $_COOKIE['autorized']) {
            header('Location: /autorization/ifAutorized');
        } else {
            self::view();
        }
    }

    public static function setCookie(string $name, string $value, int $time, string $path, string $symbol = '+')
    {
        switch ($symbol) {
            case '+': setcookie($name, $value, time() + $time, $path);

                break;
            case '-': setcookie($name, $value, time() - $time, $path);

                break;
        }
    }

    public static function successUploadCombine($results, $fileName, $typeFile, $fileSize, $id): void
    {
        $sumSize = self::$combineFilesModel->getSumSize();
        if ($results[0]) {
            self::getCombineFilesModel()->store($results[1], $id);
            self::getLogService()->logCombine($fileName .'.'. $typeFile, $fileSize, 'successes', $sumSize[0]['sum']);
        } else {
            self::getLogService()->logCombineError('errors');
        }
    }
}
