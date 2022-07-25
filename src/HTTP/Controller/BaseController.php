<?php

namespace Prushak\Internship\HTTP\Controller;

use Prushak\Internship\Models\FilesModel;
use Prushak\Internship\Models\UsersModel;
use Prushak\Internship\Services\CheckService;
use Prushak\Internship\Services\LogService;
use Prushak\Internship\Models\LockedModel;

class BaseController
{
    private object $usersModel;
    private object $filesModel;
    private object $lockedModel;
    private object $checkService;
    private object $logService;
    private string $domain;

    public function __construct()
    {
        $this->usersModel = new UsersModel();
        $this->filesModel = new FilesModel();
        $this->lockedModel = new LockedModel();
        $this->checkService = new CheckService();
        $this->logService = new LogService();
        $this->domain = '';
    }

    public function getDomain()
    {
        return $this->domain;
    }

    public function getUsersModel(): object
    {
        return $this->usersModel;
    }

    public function getLockedModel(): object
    {
        return $this->lockedModel;
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

    public function getLogService(): object
    {
        return $this->logService;
    }

    public function ifHaveCookie(): void
    {
        if ($_COOKIE && count($_COOKIE) >= 2 && !$_COOKIE['error'] && $_COOKIE['autorized']) {
            header('Location: /ifAutorized');
        } else {
            view('index');
        }
    }

    public function successUpload($results, $fileName, $typeFile, $fileSize, $id): void
    {
        $sumSize = $this->filesModel->getSumSize();

        if ($results[0]) {
            $this->getFilesModel()->store($fileName, $id);

            $this->getLogService()->log($fileName .'.'. $typeFile, $fileSize, 'successes', $sumSize[0]['sum']);
        } else {
            $this->getLogService()->logError('errors');
        }
    }

    public function countToBlock($time, $url, $result, $results)
    {
        if (empty($result) || empty($results) || empty($password)) {
            $_SESSION['count'] += 1;
            if ($_SESSION['count'] === $time && isset($_SERVER['REMOTE_ADDR'])) {
                $_SESSION['count'] = 0;

                $date = date('Y-m-d H:i:s', (time() + $_ENV['TIME_BLOCK']));
                $this->getLockedModel()->store($_SERVER['REMOTE_ADDR'], $date);
                $this->getLogService()->logError('exceptions');
            } else {
                setcookie('error', 'Come again pls', time() + 2, '/', $this->getDomain());
            }

            return header("Location: $url");
        }
    }
    public function ifAuthorizedParam($storage)
    {
        $id = $storage;
        $users = $this->getUsersModel()->selectById($id);
        $files = $this->getFilesModel()->selectByUserId($id);
        view('if_autorized', ['users' => $users, 'files' => $files]);
    }
}
