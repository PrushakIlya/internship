<?php

namespace Prushak\Internship\Console\Services;

include 'Service.php';

class InstallService extends Service
{
    public function __construct(string $whatRepair, int $deadline, int $queue, int $cost)
    {
        parent::__construct($whatRepair, $deadline, $queue, $cost);
        $this->type = 'service: install, ';
    }
}
