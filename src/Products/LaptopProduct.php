<?php

namespace Prushak\Task7\Products;

use Prushak\Task7\Test;

class LaptopProduct extends Product
{
    private string $name = 'Laptop';
    public function __construct(array $type, string $manufacture, string $releaseDate, int $cost)
    {
        parent::__construct($type, $this->name, $manufacture, $releaseDate, $cost);
    }
}
