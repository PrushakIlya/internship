<?php

namespace Prushak\Internship\Console;

abstract class Product
{
    protected string $type;
    protected string $model;
    protected string $manufactures;
    protected string $releaseDate;
    protected int $cost;
    

    public function __construct(string $type, string $name, string $manufactures, string $releaseDate, int $cost)
    {
        $this->type = $type;
        $this->name = $name;
        $this->manufactures = $manufactures;
        $this->releaseDate = $releaseDate;
        $this->cost = $cost;
    }

    public function getType()
    {
        return $this->type;
    }
}
