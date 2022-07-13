<?php

namespace Prushak\Internship\HTTP\Models;

use PDO;

class UsersModel
{
    private $conn;

    public function __construct()
    {
        $this->conn = include '../config/connect_db.php';
    }

    public function store()
    {
        $sql = "INSERT INTO users (name, lastname, email, gender,status) VALUES (:name, :lastname, :email, :gender,:status)";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute(array(
            ":name" => $_POST["name"], ":lastname" => $_POST["lastname"], ":email" => $_POST["email"],
            ":gender" => $_POST["gender"] === 'male' ? 1 : 0, ":status" => $_POST["status"] === 'active'  ? 1 : 0
        ));
    }

    public function index()
    {
        $sql = "SELECT * FROM users";
        $stmt = $this->conn->query($sql);
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $results;
    }

    public function getEmail($email)
    {
        $sql = "SELECT email FROM users WHERE email='$email'";
        $stmt = $this->conn->query($sql);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }

    public function elemById($id)
    {
        $sql = "SELECT * FROM users WHERE id='$id'";
        $stmt = $this->conn->query($sql);
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $results;
    }

    public function update($id)
    {
        $sql = "UPDATE users SET name=:name,lastname=:lastname,email=:email,gender=:gender,status=:status WHERE id = '$id'";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute(array(
            ":name" => $_POST["name"], ":lastname" => $_POST["lastname"], ":email" => $_POST["email"],
            ":gender" => $_POST["gender"] === 'male' ? 1 : 0, ":status" => $_POST["status"] === 'active'  ? 1 : 0
        ));
    }

    public function destroy($id)
    {
        $sql = "DELETE FROM users WHERE id = '$id'";
        $this->conn->exec($sql);
    }
}
