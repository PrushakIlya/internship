<?php

namespace Prushak\Internship\Console;
use Prushak\Internship\Console\Test;
include 'Test.php';
include 'Product.php';

abstract class FridgeProduct extends Product
{
    protected string $type;
    protected string $model;
    protected string $manufactures;
    protected string $releaseDate;
    protected int $cost;
    use Test;

    public function __construct(string $type, string $name, string $manufactures, string $releaseDate, int $cost)
    {
        $this->type = $type;
        $this->name = $name;
        $this->manufactures = $manufactures;
        $this->releaseDate = $releaseDate;
        $this->cost = $cost;
    }
}
