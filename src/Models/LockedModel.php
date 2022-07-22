<?php

namespace Prushak\Internship\Models;

use PDO;

class LockedModel extends BaseModel
{
    public function store($ip, $expired): void
    {
        $sql = 'INSERT INTO locked (ip, unlocked_date) VALUES (:ip, :unlocked_date)';
        $stmt = BaseModel::getConn()->prepare($sql);
        $stmt->execute([':ip' => $ip, ':unlocked_date' => $expired]);
    }

    public function getByIp($ip): array
    {
        $sql = "SELECT * FROM locked WHERE ip = '$ip'";
        $stmt = BaseModel::getConn()->query($sql);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $result;
    }

    public function destroy($ip): void
    {
        $sql = "DELETE FROM locked WHERE id = '$ip'";
        BaseModel::getConn()->exec($sql);
    }
}
