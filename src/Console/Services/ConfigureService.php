<?php

namespace Prushak\Internship\Console\Services;

include 'Service.php';

// use Prushak\Internship\Console\Services\Service; Why is not warking?

class ConfigureService extends Service
{
    public function __construct(string $whatRepair, int $deadline, int $queue, int $cost)
    {
        parent::__construct($whatRepair, $deadline, $queue, $cost);
        $this->type = 'service: configure, ';
    }
}
