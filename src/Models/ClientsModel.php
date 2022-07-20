<?php

namespace Prushak\Internship\Models;

use PDO;

class ClientsModel extends BaseModel
{
    public function selectEqualEmailName($email, $name): array
    {
        $sql = "SELECT * FROM clients WHERE email = '$email' AND name = '$name'";
        $stmt = BaseModel::getConn()->query($sql);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $result;
    }
    public function selectEqualPassword($password): array
    {
        $sql = "SELECT * FROM clients WHERE password = '$password'";
        $stmt = BaseModel::getConn()->query($sql);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $result;
    }
    public function selectById($id): array
    {
        $sql = "SELECT * FROM clients WHERE id = '$id'";
        $stmt = BaseModel::getConn()->query($sql);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $result;
    }
}
