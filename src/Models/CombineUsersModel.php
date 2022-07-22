<?php

namespace Prushak\Internship\Models;

use PDO;

class CombineUsersModel extends BaseModel
{
    public function store($password): void
    {
        $sql = 'INSERT INTO combineUsers (firstname, lastname, email, password) VALUES (:firstname, :lastname, :email, :password)';
        $stmt = BaseModel::getConn()->prepare($sql);
        $stmt->execute([
            ':firstname' => $_POST['firstname'],
            ':lastname' => $_POST['lastname'],
            ':email' => $_POST['email'],
            ':password' => $password,
        ]);
    }

    public function selectByEmail($email): array
    {
        $sql = "SELECT * FROM combineUsers WHERE email = '$email'";
        $stmt = BaseModel::getConn()->query($sql);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $result;
    }

    public function selectEqualEmailName($email, $name): array
    {
        $sql = "SELECT * FROM combineUsers WHERE email = '$email' AND firstname = '$name'";
        $stmt = BaseModel::getConn()->query($sql);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $result;
    }

    public function selectEqualPassword($password): array
    {
        $sql = "SELECT * FROM combineUsers WHERE password = '$password'";
        $stmt = BaseModel::getConn()->query($sql);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $result;
    }

    public function selectById($id): array
    {
        $sql = "SELECT * FROM combineUsers WHERE id='$id'";
        $stmt = BaseModel::getConn()->query($sql);
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $results;
    }
}
