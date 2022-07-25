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
    private object $usersModel;
    private object $filesModel;
    private object $clientsModel;
    private array $api;
    private object $checkService;
    private object $apiService;
    private object $logService;
    private object $combineUsersModel;
    private object $combineFilesModel;
    private string $domain;

    public function __construct()
    {
        $this->usersModel = new UsersModel();
        $this->filesModel = new FilesModel();
        $this->clientsModel = new ClientsModel();
        $this->checkService = new CheckService();
        $this->apiService = new ApiService();
        $this->logService = new LogService();
        $this->combineFilesModel = new CombineFilesModel();
        $this->combineUsersModel = new CombineUsersModel();
        $this->api = include '../routes/api.php';
        $this->domain = '';
    }

    public function getDomain()
    {
        return $this->domain;
    }

    public function view($results = [], string $view = 'layout.php')
    {
        include '../resources/views/'.$view;
    }

    public function getCombineFilesModel()
    {
        return $this->combineFilesModel;
    }

    public function getCombineUsersModel()
    {
        return $this->combineUsersModel;
    }

    public function getUsersModel(): object
    {
        return $this->usersModel;
    }

    public function getClientsModel(): object
    {
        return $this->clientsModel;
    }

    public function getFilesModel(): object
    {
        return $this->filesModel;
    }

    public function passwordHash($request)
    {
        return password_hash($request, PASSWORD_BCRYPT);
    }

    public function getCheckService(): object
    {
        return $this->checkService;
    }

    public function getApi($param): string
    {
        return $this->api[$param] . $this->api['token'];
    }
    public function getApiElem($param, $elem): string
    {
        return $this->api[$param] . $elem . $this->api['token'];
    }
    public function getApiService(): object
    {
        return $this->apiService;
    }
    public function getLogService(): object
    {
        return $this->logService;
    }

    public function successUpload($results, $fileText, $arr, $typeFile): void
    {
        if ($results[0]) {
            $this->getFilesModel()->store($results[1]);
            $this->getLogService()->log($fileText . $arr[1], $typeFile);
        } else {
            $this->getLogService()->log($fileText . $arr[1], $typeFile, 'Connect is not stable');
        }
    }

    public function ifHaveCookie(): void
    {
        if ($_COOKIE && count($_COOKIE) >= 2 && !$_COOKIE['error'] && $_COOKIE['autorized']) {
            header('Location: /autorization/ifAutorized');
        } else {
            $this->view();
        }
    }

    public function successUploadCombine($results, $fileName, $typeFile, $fileSize, $id): void
    {
        $sumSize = $this->combineFilesModel->getSumSize();
        var_dump($results);
        if ($results[0]) {
            $this->getCombineFilesModel()->store($fileName, $id);

            $this->getLogService()->logCombine($fileName .'.'. $typeFile, $fileSize, 'successes', $sumSize[0]['sum']);
        } else {
            $this->getLogService()->logCombineError('errors');
        }
    }

    public function countToBlock($time)
    {
        if (empty($result)) {
            $_SESSION['count'] += 1;
            if ($_SESSION['count'] === $time && isset($_SERVER['REMOTE_ADDR'])) {
                $_SESSION['count'] = 0;

                $this->getLogService()->logCombineError('exceptions');

                setcookie('bloked', 'A lot attempt', time() + 60 * 15, '/combine', $this->getDomain());
            } else {
                setcookie('error', 'Come again pls', time() + 2, '/combine', $this->getDomain());
            }

            return header('Location: /combine/authorization');
        }
    }
}
