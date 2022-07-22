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
    private static object $checkService;
    private static object $apiService;
    private static object $logService;
    private static string $domain;

    public function __construct()
    {
        self::$usersModel = new UsersModel();
        self::$filesModel = new FilesModel();
        self::$checkService = new CheckService();
        self::$apiService = new ApiService();
        self::$logService = new LogService();
        self::$domain = '';
    }

    public static function getDomain()
    {
        return self::$domain;
    }

    public static function view($results = [], string $view = 'layout.php')
    {
        include '../resources/views/'.$view;
    }

    public static function getUsersModel(): object
    {
        return self::$usersModel;
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

    public static function getApiService(): object
    {
        return self::$apiService;
    }
    public static function getLogService(): object
    {
        return self::$logService;
    }

    public static function successUpload($results, $fileText, $arr, $typeFile): void
    {
        if ($results[0]) {
            self::getFilesModel()->store($results[1]);
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

    // public static function successUploadCombine($results, $fileName, $typeFile, $fileSize, $id): void
    // {
    //     $sumSize = self::$combineFilesModel->getSumSize();
    //     var_dump($results);
    //     if ($results[0]) {
    //         self::getCombineFilesModel()->store($fileName, $id);

    //         self::getLogService()->logCombine($fileName .'.'. $typeFile, $fileSize, 'successes', $sumSize[0]['sum']);
    //     } else {
    //         self::getLogService()->logCombineError('errors');
    //     }
    // }

    public static function countToBlock($time, $url)
    {
        if (empty($result)) {
            $_SESSION['count'] += 1;
            if ($_SESSION['count'] === $time && isset($_SERVER['REMOTE_ADDR'])) {
                $_SESSION['count'] = 0;

                self::getLogService()->logCombineError('exceptions');

                setcookie('bloked', 'A lot attempt', time() + 60 * 15, '/', self::getDomain());
            } else {
                setcookie('error', 'Come again pls', time() + 2, '/', self::getDomain());
            }

            return header("Location: $url");
        }
    }
}
