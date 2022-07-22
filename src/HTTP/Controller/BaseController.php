<?php

namespace Prushak\Internship\HTTP\Controller;

use Prushak\Internship\Models\FilesModel;
use Prushak\Internship\Models\UsersModel;
use Prushak\Internship\Services\ApiService;
use Prushak\Internship\Services\CheckService;
use Prushak\Internship\Services\LogService;
use Prushak\Internship\Models\LockedModel;

class BaseController
{
    private static object $usersModel;
    private static object $filesModel;
    private static object $lockedModel;
    private static object $checkService;
    private static object $apiService;
    private static object $logService;
    private static string $domain;

    public function __construct()
    {
        self::$usersModel = new UsersModel();
        self::$filesModel = new FilesModel();
        self::$lockedModel = new LockedModel();
        self::$checkService = new CheckService();
        self::$apiService = new ApiService();
        self::$logService = new LogService();
        self::$domain = '';
    }

    public static function getDomain()
    {
        return self::$domain;
    }

    public static function getUsersModel(): object
    {
        return self::$usersModel;
    }

    public static function getLockedModel(): object
    {
        return self::$lockedModel;
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

    // public static function successUpload($results, $fileText, $arr, $typeFile): void
    // {
    //     if ($results[0]) {
    //         self::getFilesModel()->store($results[1]);
    //         self::getLogService()->log($fileText . $arr[1], $typeFile);
    //     } else {
    //         self::getLogService()->log($fileText . $arr[1], $typeFile, 'Connect is not stable');
    //     }
    // }

    public static function ifHaveCookie(): void
    {
        if ($_COOKIE && count($_COOKIE) >= 2 && !$_COOKIE['error'] && $_COOKIE['autorized']) {
            header('Location: /ifAutorized');
        } else {
            view('index');
        }
    }

    public static function successUpload($results, $fileName, $typeFile, $fileSize, $id): void
    {
        $sumSize = self::$filesModel->getSumSize();

        if ($results[0]) {
            self::getFilesModel()->store($fileName, $id);

            self::getLogService()->log($fileName .'.'. $typeFile, $fileSize, 'successes', $sumSize[0]['sum']);
        } else {
            self::getLogService()->logError('errors');
        }
    }

    public static function countToBlock($time, $url, $result)
    {
        if (empty($result)) {
            $_SESSION['count'] += 1;
            if ($_SESSION['count'] === $time && isset($_SERVER['REMOTE_ADDR'])) {
                $_SESSION['count'] = 0;

                $time = time() + 900;
                $time = gmdate('Y-m-d H:i:s', $time);
                self::getLockedModel()->store($_SERVER['REMOTE_ADDR'], $time);
                self::getLogService()->logError('exceptions');
            // setcookie('bloked', 'A lot attempt', time() + 60 * 15, '/', self::getDomain());
            } else {
                setcookie('error', 'Come again pls', time() + 2, '/', self::getDomain());
            }

            return header("Location: $url");
        }
    }
}
