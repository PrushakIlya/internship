<?php

namespace Prushak\Internship\Models;

class BaseModel
{
    private static object $conn;

    public function __construct()
    {
        self::$conn = include '../config/connect_db.php';
    }

    public static function getConn(): object
    {
        return self::$conn;
    }
}
