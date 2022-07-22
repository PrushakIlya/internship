<?php

namespace Prushak\Internship\Models;

use PDO;

class UsersModel extends BaseModel
{
    public function store($password): void
    {
        $sql = 'INSERT INTO users (name, email, password) VALUES (:name,:email, :password)';
        $stmt = BaseModel::getConn()->prepare($sql);
        $stmt->execute([':name' => $_POST['reg_name'], ':email' => $_POST['reg_email'], ':password' => $password]);
    }
    public function selectByEmail($email): array
    {
        $sql = "SELECT * FROM users WHERE email = '$email'";
        $stmt = BaseModel::getConn()->query($sql);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $result;
    }
    public function selectById($id): array
    {
        $sql = "SELECT * FROM users WHERE id = '$id'";
        $stmt = BaseModel::getConn()->query($sql);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $result;
    }
}
