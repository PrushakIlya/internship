<?php

namespace Prushak\Internship\Models;

use PDO;

class FilesModel extends BaseModel
{
    public function index(): array
    {
        $sql = "SELECT * FROM files";
        $stmt = BaseModel::getConn()->query($sql);
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $results;
    }

    public function store($fileName): void
    {
        $sql = "INSERT INTO files (name, size, type) VALUES (:name, :size, :type)";
        $stmt = BaseModel::getConn()->prepare($sql);
        $stmt->execute(array(
            ":name" => $fileName, ":size" => $_FILES["file"]["size"], ":type" => $_FILES["file"]["type"]
        ));
    }
}
