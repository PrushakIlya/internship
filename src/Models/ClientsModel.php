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

    public function selectByEmail($email): array
    {
        $sql = "SELECT * FROM registrations WHERE email = '$email'";
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

    public function store($password): void
    {
        $sql = 'INSERT INTO registrations (firstname, lastname, email, password) VALUES (:firstname, :lastname, :email, :password)';
        $stmt = BaseModel::getConn()->prepare($sql);
        $stmt->execute([
            ':firstname' => $_POST['firstname'],
            ':lastname' => $_POST['lastname'],
            ':email' => $_POST['email'],
            ':password' => $password,
        ]);
    }
}
