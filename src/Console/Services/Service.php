<?php

namespace Prushak\Internship\Console\Services;

use Prushak\Internship\Console\Inter;

abstract class Service
{
    private string $whatRepair;
    private array $listRepair = ['tv-sets', 'laptops', 'mobile phones', 'fridges'];
    private int $deadline;
    private int $queue;
    private int $cost;
    protected string $type;

    public function __construct(string $whatRepair, int $deadline, int $queue, int $cost)
    {
        $this->whatRepair = $this->$whatRepair;
        $this->deadline = $deadline;
        $this->queue = $queue;
        $this->cost = $cost;
    }

    public function getCost()
    {
        return $this->cost;
    }
}
