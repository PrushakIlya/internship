<?php

namespace Prushak\Task7\Products;

class FridgeProduct extends Product
{
    private string $name = 'Fridge';
    public function __construct(array $type, string $manufacture, string $releaseDate, int $cost)
    {
        parent::__construct($type, $this->name, $manufacture, $releaseDate, $cost);
    }
}