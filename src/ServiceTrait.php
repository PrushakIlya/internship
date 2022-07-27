<?php

namespace Prushak\Task7;

use Prushak\Task7\Services\ConfigureService;

trait ServiceTrait
{
    public function checkService($type)
    {
        switch ($type) {
            case 'configure': return (new ConfigureService($type, rand(1, 10), rand(1, 10), rand(20, 100)));
            case 'delivery': return (new ConfigureService($type, rand(1, 10), rand(1, 10), rand(20, 100)));
            case 'install': return (new ConfigureService($type, rand(1, 10), rand(1, 10), rand(20, 100)));
            default: return 0;
                break;
        }
    }
}
