<?php

namespace Prushak\Task7\Services;

use Prushak\Task7\Test;

class ConfigureService extends Service
{
    private string $type = 'configure';
    public function __construct(int $deadline, int $queue, int $cost)
    {
        parent::__construct($this->type, $deadline, $queue, $cost);
    }
}
