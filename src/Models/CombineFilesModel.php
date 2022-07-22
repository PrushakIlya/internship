<?php

namespace Prushak\Internship\Models;

use PDO;

class CombineFilesModel extends BaseModel
{
    public function index(): array
    {
        $sql = 'SELECT * FROM combineFiles';
        $stmt = BaseModel::getConn()->query($sql);
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $results;
    }

    public function getSumSize(): array
    {
        $sql = 'SELECT SUM(size) AS sum FROM combineFiles';
        $stmt = BaseModel::getConn()->query($sql);
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $results;
    }

    public function selectByUserId($id): array
    {
        $sql = "SELECT * FROM combineFiles WHERE user_id = '$id'";
        $stmt = BaseModel::getConn()->query($sql);
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $results;
    }

    public function store($fileName, $id): void
    {
        $sql = 'INSERT INTO combineFiles (name, size, type, user_id) VALUES (:name, :size, :type, :user_id )';
        $stmt = BaseModel::getConn()->prepare($sql);
        $stmt->execute([
            ':name' => $fileName, ':size' => $_FILES['file']['size'],
            ':type' => $_FILES['file']['type'], ':user_id' => $id,
        ]);
    }
}
