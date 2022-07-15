<?php

namespace Prushak\Internship\HTTP\Models;

use InvalidArgumentException;
use PDO;

class UsersModel
{
    private object $conn;

    public function __construct()
    {
        $this->conn = include '../config/connect_db.php';
    }

    public function store(): void
    {
        $sql = "INSERT INTO users (name, email, gender, status) VALUES (:name, :email, :gender, :status)";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute(array(
            ":name" => $_POST["name"], ":email" => $_POST["email"],
            ":gender" => $_POST["gender"] === 'male' ? 1 : 0, ":status" => $_POST["status"] === 'active'  ? 1 : 0
        ));
    }

    public function index(): array
    {
        $sql = "SELECT * FROM users";
        $stmt = $this->conn->query($sql);
        if ($stmt) {
            $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
            return $results;
        } else {
            throw new InvalidArgumentException('Request on the server is failed');
        }
    }

    public function getEmail($email): array
    {
        $sql = "SELECT email FROM users WHERE email='$email'";
        $stmt = $this->conn->query($sql);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }

    public function elemById($id): array
    {
        $sql = "SELECT * FROM users WHERE id='$id'";
        $stmt = $this->conn->query($sql);
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $results;
    }

    public function update($id): void
    {
        $sql = "UPDATE users SET name=:name,email=:email,gender=:gender,status=:status WHERE id = '$id'";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute(array(
            ":name" => $_POST["name"], ":email" => $_POST["email"],
            ":gender" => $_POST["gender"] === 'male' ? 1 : 0, ":status" => $_POST["status"] === 'active'  ? 1 : 0
        ));
    }

    public function destroy($id): void
    {
        $sql = "DELETE FROM users WHERE id = '$id'";
        $this->conn->exec($sql);
    }
}
