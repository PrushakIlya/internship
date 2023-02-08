<?php

namespace Prushak\Task7\Services;

use Prushak\Task7\Inter;

abstract class Service
{
    private string $type;
    private int $deadline;
    private int $queue;
    private int $cost;

    public function __construct(string $type, int $deadline, int $queue, int $cost)
    {
        $this->type = $type;
        $this->deadline = $deadline;
        $this->queue = $queue;
        $this->cost = $cost;
    }

    public function getParams(): array
    {
        return ['type'=>$this->type,'deadline'=>$this->deadline,'queue'=>$this->queue,'cost'=>$this->cost];
    }
}
