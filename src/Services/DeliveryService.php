<?php

namespace Prushak\Task7\Services;

class DeliveryService extends Service
{
    private string $type = 'delivery';
    public function __construct(int $deadline, int $queue, int $cost)
    {
        parent::__construct($this->type, $deadline, $queue, $cost);
    }
}
