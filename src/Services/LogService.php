<?php

namespace Prushak\Internship\Services;

class LogService
{
    // public function log($fileName, $typeFile, $reason = ''): void
    // {
    //     $fileName = 'upload_' . date('d.m.Y') . '.log';
    //     $allFiles = scandir('../storage/logs/');
    //     foreach ($allFiles as $item) {
    //         if ($item === $fileName) {
    //             fopen('../storage/logs/' . $fileName, 'w');

    //             break;
    //         }
    //     }
    //     $content = file_get_contents('../storage/logs/' . $fileName);
    //     $content .= 'The data had not sent:' . $reason . date('Y-m-d H:i:s') . '/' . $fileName . '/' . $typeFile . "\n";
    //     file_put_contents('../storage/logs/' . $fileName, $content);
    // }

    public function log($fileName, $fileSize, $archiveName, $sumSize): void
    {
        $nameFile = 'log_' . date('d.m.Y') . '.log';
        $filesInDir = scandir('../storage/logs/'.$archiveName.'/');
        $flag = 0;
        foreach ($filesInDir as $item) {
            if ($item === $nameFile) {
                $flag = 1;
            }
        }
        $flag === 0 && fopen('../storage/logs/'.$archiveName.'/'.$nameFile, 'w+');

        $content = file_get_contents('../storage/logs/'.$archiveName.'/' . $nameFile);
        $content .= date('Y-m-d H:i:s') . ' - ' . $fileName.' - '.$fileSize .'bytes - ARCHIVE: storage/logs/'.$archiveName.' - ARCHIVE SIZE: '.$sumSize."bytes\n";
        file_put_contents('../storage/logs/'.$archiveName.'/'.$nameFile, $content);
    }

    public function logError($archiveName): void
    {
        $nameFile = 'log_' . date('d.m.Y') . '.log';
        $filesInDir = scandir('../storage/logs/'.$archiveName.'/');
        $flag = 0;
        foreach ($filesInDir as $item) {
            if ($item === $nameFile) {
                $flag = 1;
            }
        }
        $flag === 0 && fopen('../storage/logs/'.$archiveName.'/'.$nameFile, 'w+');

        $time = time() + 900;
        $time = gmdate('Y-m-d H:i:s', $time);

        $content = file_get_contents('../storage/logs/'.$archiveName.'/' . $nameFile);
        $content .= 'Blocked by IP: '.$_SERVER['REMOTE_ADDR'].' - from: '.date('Y-m-d H:i:s').' - to: '.$time."\n";
        file_put_contents('../storage/logs/'.$archiveName.'/'.$nameFile, $content);
    }
}
