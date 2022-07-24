<?php

namespace Prushak\Internship\HTTP\Controller;

use Prushak\Internship\Models\FilesModel;
use Prushak\Internship\Models\UsersModel;
use Prushak\Internship\Services\ApiService;
use Prushak\Internship\Services\CheckService;
use Prushak\Internship\Services\LogService;

class BaseController
{
    private static object $usersModel;
    private static object $filesModel;
    private static array $api;
    private static object $checkService;
    private static object $apiService;
    private static object $logService;

    public function __construct()
    {
        self::$usersModel = new UsersModel();
        self::$filesModel = new FilesModel();
        self::$api = include '../routes/api.php';
        self::$checkService = new CheckService();
        self::$apiService = new ApiService();
        self::$logService = new LogService();
    }

    public static function getUsersModel(): object
    {
        return self::$usersModel;
    }

    public static function getFilesModel(): object
    {
        return self::$filesModel;
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
}
