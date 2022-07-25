<?php

namespace Prushak\Internship\Console;

use Prushak\Internship\Console\Services\ConfigureService;

trait Test
{
    public function configure($type)
    {
        return (new ConfigureService($type, rand(1, 10), rand(1, 10), rand(20, 100)))->getCost();
    }
}
