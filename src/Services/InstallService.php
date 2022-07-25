<?php

namespace Prushak\Task7\Services;

class InstallService extends Service
{
    private string $type = 'install';
    public function __construct(int $deadline, int $queue, int $cost)
    {
        parent::__construct($this->type, $deadline, $queue, $cost);
    }
}
