<?php

namespace Prushak\Task7\Products;

use Prushak\Task7\ServiceTrait;

abstract class Product
{
    public array $type;
    private string $name;
    private string $manufacture;
    private string $releaseDate;
    private int $cost;
    use ServiceTrait;

    public function __construct(array $type, string $name, string $manufacture, string $releaseDate, int $cost)
    {
        $this->type = $type;
        $this->name = $name;
        $this->manufacture = $manufacture;
        $this->releaseDate = $releaseDate;
        $this->cost = $cost;
    }

    public function show()
    {
        return 'Kind of: '.$this->name.', manufacture: '.$this->manufacture.', 
                release date: '.$this->releaseDate.', cost: '.$this->cost.', 
                >>>type: '.$this->type['type'].', deadline: '.$this->type['deadline'].', 
                queue: '.$this->type['queue'].', cost: '.$this->type['cost']."<br>";
    }
}
